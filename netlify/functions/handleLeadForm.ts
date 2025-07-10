import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { fullName, email, phone, company, subject, message } = data;

    if (!fullName || !email || !phone || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing required fields' }),
      };
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',    
      to: 'chnindia2001@gmail.com',
      subject: `New CTA Form Submission - ${subject}`,
      html: `
    <div style="max-width:600px; margin:auto; font-family:'Segoe UI', sans-serif; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; background-color:#ffffff; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
      <div style="background:linear-gradient(to right, #10b981, #06b6d4); color:#ffffff; padding:20px 30px;">
        <h2 style="margin:0; font-size:22px;">New CTA Form Submission</h2>
        <p style="margin:4px 0 0; font-size:14px;">Subject: <strong>${subject}</strong></p>
      </div>

      <div style="padding:30px; background-color:#f9fafb;">
        <table style="width:100%; border-collapse:collapse; font-size:15px; color:#111827;">
          <tr>
            <td style="padding:10px 0; width:35%; vertical-align:top;"><strong>Full Name:</strong></td>
            <td style="padding:10px 0;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding:10px 0; vertical-align:top;"><strong>Email Address:</strong></td>
            <td style="padding:10px 0;">${email}</td>
          </tr>
          <tr>
            <td style="padding:10px 0; vertical-align:top;"><strong>Phone Number:</strong></td>
            <td style="padding:10px 0;">${phone}</td>
          </tr>
          <tr>
            <td style="padding:10px 0; vertical-align:top;"><strong>Company:</strong></td>
            <td style="padding:10px 0;">${company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding:10px 0; vertical-align:top;"><strong>Message:</strong></td>
            <td style="padding:10px 0; white-space:pre-line;">${message || 'N/A'}</td>
          </tr>
        </table>
      </div>

      <div style="padding:18px 30px; background-color:#f3f4f6; font-size:12px; color:#6b7280; text-align:center;">
        This message was submitted via your website CTA form.
      </div>
    </div>
  `,
    });


    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (err: any) {
    console.error('Email error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error' }),
    };
  }
};

export { handler };
