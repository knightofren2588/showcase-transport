import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    console.log("Received form submission:", data);

    // Send email using Resend
    const result = await resend.emails.send({
      from: "Showcase Transport <onboarding@resend.dev>", // Use Resend's test domain OR your verified domain
      to: ["mike@starktechstudios.com"],
      replyTo: data.email,
      subject: `New Quote Request from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a2332; border-bottom: 3px solid #10b981; padding-bottom: 10px;">
            New Quote Request
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name || "N/A"}</p>
            <p style="margin: 10px 0;"><strong>Company:</strong> ${data.company || "N/A"}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email || "N/A"}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${data.phone || "N/A"}</p>
          </div>

          <div style="background: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #10b981; margin-top: 0;">Shipping Details</h3>
            <p style="margin: 10px 0;"><strong>Origin:</strong> ${data.origin || "N/A"}</p>
            <p style="margin: 10px 0;"><strong>Destination:</strong> ${data.destination || "N/A"}</p>
            <p style="margin: 10px 0;"><strong>Load Type:</strong> ${data.loadType || "Not specified"}</p>
          </div>

          ${data.message ? `
            <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #856404; margin-top: 0;">Additional Message</h3>
              <p style="white-space: pre-wrap;">${data.message}</p>
            </div>
          ` : ''}

          <p style="color: #6c757d; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
            This quote request was submitted via showcasetransportllc.com
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", result);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: result.id }),
    };
  } catch (err) {
    console.error("Error sending email:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: "Failed to send email",
        message: err.message 
      }),
    };
  }
};
