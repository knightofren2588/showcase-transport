import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  console.log("Function started");

  if (event.httpMethod !== "POST") {
    console.log("Wrong method:", event.httpMethod);
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  console.log("API key present:", !!process.env.RESEND_API_KEY);

  try {
    const data = JSON.parse(event.body);
    console.log("Parsed data:", data);

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["mike@starktechstudios.com"],
      reply_to: data.email,
      subject: "New Quote Request — Showcase Transport",
      html: `
        <h3>New Quote Request</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Origin:</strong> ${data.origin}</p>
        <p><strong>Destination:</strong> ${data.destination}</p>
        <p><strong>Load Type:</strong> ${data.loadType}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
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

