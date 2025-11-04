import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    // 1️⃣ Send to the client (your inbox for now)
    await resend.emails.send({
      from: "Showcase Transport <info@showcasetransportllc.com>",
      to: ["mike@starktechstudios.com"], // client's inbox (temporary)
      reply_to: data.email, // reply goes to user's email
      subject: "New Quote Request — Showcase Transport",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name || ""}</p>
        <p><strong>Company:</strong> ${data.company || ""}</p>
        <p><strong>Email:</strong> ${data.email || ""}</p>
        <p><strong>Phone:</strong> ${data.phone || ""}</p>
        <p><strong>Origin:</strong> ${data.origin || ""}</p>
        <p><strong>Destination:</strong> ${data.destination || ""}</p>
        <p><strong>Load Type:</strong> ${data.loadType || ""}</p>
        <p><strong>Message:</strong><br>${(data.message || "").replace(/\n/g, "<br>")}</p>
      `,
    });

    // 2️⃣ Send confirmation back to the user's typed email
    if (data.email) {
      await resend.emails.send({
        from: "Showcase Transport <info@showcasetransportllc.com>",
        to: [data.email], // email from the form
        subject: "We received your quote request",
        html: `
          <h2>Thanks, ${data.name || "there"}!</h2>
          <p>Your quote request has been received by Showcase Transport.</p>
          <p><strong>Summary:</strong></p>
          <ul>
            <li><strong>Origin:</strong> ${data.origin || ""}</li>
            <li><strong>Destination:</strong> ${data.destination || ""}</li>
            <li><strong>Load Type:</strong> ${data.loadType || ""}</li>
          </ul>
          <p>We'll be in touch soon. This message confirms your form was submitted successfully.</p>
        `,
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Error sending email:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};

