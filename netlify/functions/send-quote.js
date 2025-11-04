import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse the form data
    const body = JSON.parse(event.body);
    const { name, company, email, phone, origin, destination, loadType, message } = body;

    // Validate required fields
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Name and email are required" }),
      };
    }

    // Build HTML email
    const html = `
      <h2>New Quote Request — Showcase Transport</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        ${company ? `<tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${company}</td>
        </tr>` : ''}
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        ${phone ? `<tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
        </tr>` : ''}
        ${origin ? `<tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Origin</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${origin}</td>
        </tr>` : ''}
        ${destination ? `<tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Destination</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${destination}</td>
        </tr>` : ''}
        ${loadType ? `<tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Load Type</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${loadType}</td>
        </tr>` : ''}
        ${message ? `<tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
        </tr>` : ''}
      </table>
    `;

    // Send email via Resend
    await resend.emails.send({
      from: "Showcase Transport <no-reply@showcasetransport.com>",
      to: ["mike@starktechstudios.com"],
      reply_to: email,
      subject: "New Quote Request — Showcase Transport",
      html: html,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Email failed to send." }),
    };
  }
};

