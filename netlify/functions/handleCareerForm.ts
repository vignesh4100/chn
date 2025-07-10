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
        const { fullName, email, phone, position, message, resumeBase64, resumeName, resumeType } = data;

        if (!fullName || !email || !phone || !position || !resumeBase64 || !resumeName || !resumeType) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Missing required fields' }),
            };
        }

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'vigneshvv293269@gmail.com',
            subject: `New Career Application - ${position}`,
            html: `
    <div style="max-width:600px; margin:auto; font-family:'Segoe UI', sans-serif; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; background-color:#ffffff; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
      <div style="background:linear-gradient(to right, #4f46e5, #7c3aed); color:#ffffff; padding:20px 30px;">
        <h2 style="margin:0; font-size:22px;">New Career Application</h2>
        <p style="margin:4px 0 0; font-size:14px;">Position Applied: <strong>${position}</strong></p>
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
            <td style="padding:10px 0; vertical-align:top;"><strong>Position:</strong></td>
            <td style="padding:10px 0;">${position}</td>
          </tr>
          <tr>
            <td style="padding:10px 0; vertical-align:top;"><strong>Cover Letter / Message:</strong></td>
            <td style="padding:10px 0; white-space:pre-line;">${message || 'N/A'}</td>
          </tr>
        </table>

        <div style="margin-top:20px; padding:16px; background:#eef2ff; border-left:4px solid #6366f1; border-radius:6px;">
          <strong>Resume Attached:</strong> ${resumeName}
        </div>
      </div>

      <div style="padding:18px 30px; background-color:#f3f4f6; font-size:12px; color:#6b7280; text-align:center;">
        This application was submitted via your career page form.
      </div>
    </div>
  `,
            attachments: [
                {
                    filename: resumeName,
                    content: resumeBase64,
                    type: resumeType,
                },
            ],
        });



        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Application submitted with resume' }),
        };
    } catch (err) {
        console.error('Email error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Server error' }),
        };
    }
};

export { handler };
