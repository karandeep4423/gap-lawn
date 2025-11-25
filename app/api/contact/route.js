import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, phone, service, message } = body;

    // Validate required fields
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, ADMIN_EMAIL } = process.env;
    
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !ADMIN_EMAIL) {
      console.error('SMTP configuration is missing in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: parseInt(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    // Format the current date and time
    const submittedAt = new Date().toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    // Email content
    const mailOptions = {
      from: `"GAP Landscaping Website" <${SMTP_USER}>`,
      to: ADMIN_EMAIL,
      subject: 'New Contact Form Submission - GAP Landscaping',
      text: `You have received a new contact form submission from the GAP Landscaping website.

Name: ${name}
Phone: ${phone}
Service Requested: ${service}
Message: ${message || 'No message provided'}

Submitted at: ${submittedAt}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
          <div style="background-color: #16a34a; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
            <p style="color: #e5e7eb; margin: 5px 0 0 0;">GAP Landscaping & Irrigation</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="color: #374151; margin-top: 0;">You have received a new contact form submission from your website.</p>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #16a34a; margin-bottom: 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Contact Details</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563; width: 40%;">Name:</td>
                  <td style="padding: 12px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: white; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563;">Phone:</td>
                  <td style="padding: 12px; background-color: white; border-bottom: 1px solid #e5e7eb; color: #111827;">
                    <a href="tel:${phone.replace(/[^0-9+]/g, '')}" style="color: #16a34a; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563;">Service Requested:</td>
                  <td style="padding: 12px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; color: #111827;">${service}</td>
                </tr>
                ${message ? `
                <tr>
                  <td style="padding: 12px; background-color: white; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563; vertical-align: top;">Message:</td>
                  <td style="padding: 12px; background-color: white; border-bottom: 1px solid #e5e7eb; color: #111827;">${message}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 4px;">
              <p style="margin: 0; color: #15803d; font-size: 14px;">
                <strong>📅 Submitted:</strong> ${submittedAt}
              </p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <a href="tel:${phone.replace(/[^0-9+]/g, '')}" 
                 style="display: inline-block; background-color: #16a34a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-right: 10px;">
                📞 Call Now
              </a>
              <a href="sms:${phone.replace(/[^0-9+]/g, '')}" 
                 style="display: inline-block; background-color: #0891b2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                💬 Send SMS
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>This email was automatically generated from your GAP Landscaping website contact form.</p>
          </div>
        </div>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again or call us directly.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
