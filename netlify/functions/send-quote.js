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
    
    // Email 1: Send quote details to business
    const businessEmail = await resend.emails.send({
      from: "Showcase Transport <quotes@showcasetransportllc.com>",
      to: ["mikebutcher@equitashealth.com"],
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

    console.log("✅ Business email sent!");
    console.log("Business email response:", JSON.stringify(businessEmail, null, 2));

    // Email 2: Send confirmation to customer
    const customerEmail = await resend.emails.send({
      from: "Showcase Transport <quotes@showcasetransportllc.com>",
      to: [data.email],
      subject: "Thank You for Your Quote Request — Showcase Transport",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">Thank You for Your Quote Request!</h2>
          
          <p>Hi ${data.name || "there"},</p>
          
          <p>We've received your quote request and will respond within 24 hours.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Your Request Details:</h3>
            <p><strong>Name:</strong> ${data.name || ""}</p>
            <p><strong>Company:</strong> ${data.company || ""}</p>
            <p><strong>Email:</strong> ${data.email || ""}</p>
            <p><strong>Phone:</strong> ${data.phone || ""}</p>
            <p><strong>Origin:</strong> ${data.origin || ""}</p>
            <p><strong>Destination:</strong> ${data.destination || ""}</p>
            <p><strong>Load Type:</strong> ${data.loadType || ""}</p>
            ${data.message ? `<p><strong>Message:</strong><br>${data.message.replace(/\n/g, "<br>")}</p>` : ""}
          </div>
          
          <p>If you have any questions in the meantime, feel free to reply to this email.</p>
          
          <p>Best regards,<br>
          <strong>Showcase Transport</strong><br>
          Premium Logistics</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 12px;">
            This is an automated confirmation email. Please do not reply to this message.
          </p>
        </div>
      `,
    });

    console.log("✅ Customer confirmation email sent!");
    console.log("Customer email response:", JSON.stringify(customerEmail, null, 2));

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
