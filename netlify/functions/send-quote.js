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

    // Send email only to your inbox (client's inbox later)
    await resend.emails.send({
      from: "Showcase Transport <no-reply@showcasetransportllc.com>", // keep the verified domain
      to: ["mike@starktechstudios.com"], // currently your inbox
      reply_to: data.email,              // reply goes to whoever filled out the form
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

