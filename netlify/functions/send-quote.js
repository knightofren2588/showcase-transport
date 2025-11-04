// netlify/functions/send-quote.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    // Construct email body
    const html = `
      <h2>New Quote Request from ${data.name}</h2>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Origin:</strong> ${data.origin}</p>
      <p><strong>Destination:</strong> ${data.destination}</p>
      <p><strong>Load Type:</strong> ${data.loadType}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
    `;

    // Send email through your verified domain
    const response = await resend.emails.send({
      from: 'Showcase Transport <info@showcasetransportllc.com>', // your domain
      to: ['mike@starktechstudios.com'], // or your client's inbox
      subject: `New Quote Request from ${data.name}`,
      html,
    });

    console.log('Resend response:', response);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Email error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

