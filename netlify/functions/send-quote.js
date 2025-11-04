const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the form data
    const body = JSON.parse(event.body);
    const { name, company, email, phone, origin, destination, loadType, message } = body;

    // Send email via Resend
    const data = await resend.emails.send({
      from: 'Showcase Transport <noreply@showcasetransport.com>',
      to: ['mike@starktechstudios.com'],
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Origin:</strong> ${origin}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        ${loadType ? `<p><strong>Load Type:</strong> ${loadType}</p>` : ''}
        ${message ? `<p><strong>Message:</strong><br>${message}</p>` : ''}
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};

