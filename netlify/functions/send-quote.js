// netlify/functions/send-quote.js
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

    const html = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${data.name || ""}</p>
      <p><strong>Company:</strong> ${data.company || ""}</p>
      <p><strong>Email:</strong> ${data.email || ""}</p>
      <p><strong>Phone:</strong> ${data.phone || ""}</p>
      <p><strong>Origin:</strong> ${data.origin || ""}</p>
      <p><strong>Destination:</strong> ${data.destination || ""}</p>
      <p><strong>Load Type:</strong> ${data.loadType || ""}</p>
      <p><strong>Message:</strong><br>${(data.message || "").replace(/\n/g, "<br>")}</p>
    `;

    const response = await resend.emails.send({
      from: "Showcase Transport <info@showcasetransportllc.com>",
      to: ["mike@starktechstudios.com"], // later: client email
      reply_to: data.email,
      subject: "New Quote Request — Website",
      html,
    });

    console.log("Resend response:", response);

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Error sending email:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};

