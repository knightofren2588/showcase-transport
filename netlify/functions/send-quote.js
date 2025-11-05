import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  console.log("🚀 Function called!");
  console.log("HTTP Method:", event.httpMethod);
  
  if (event.httpMethod !== "POST") {
    console.log("❌ Wrong HTTP method");
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    console.log("📝 Parsing form data...");
    const data = JSON.parse(event.body);
    console.log("Form data received:", { 
      name: data.name, 
      email: data.email,
      company: data.company 
    });

    console.log("📧 Checking API key...");
    console.log("API Key exists:", !!process.env.RESEND_API_KEY);
    console.log("API Key starts with:", process.env.RESEND_API_KEY?.substring(0, 8));

    console.log("📤 Sending email via Resend...");
    const result = await resend.emails.send({
      from: "Showcase Transport <noreply@showcasetransportllc.com>",
      to: ["mike@starktechstudios.com"],
      reply_to: data.email,
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

    console.log("✅ Email sent successfully!");
    console.log("Resend response:", JSON.stringify(result, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("❌ ERROR sending email:", err);
    console.error("Error name:", err.name);
    console.error("Error message:", err.message);
    console.error("Full error:", JSON.stringify(err, null, 2));
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
