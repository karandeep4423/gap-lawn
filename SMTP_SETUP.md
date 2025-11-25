# SMTP Email Configuration Guide

This guide will help you set up email notifications for the GAP Landscaping contact form.

## Quick Setup

1. **Create a `.env.local` file** in the root directory of your project
2. **Add the following environment variables** with your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
ADMIN_EMAIL=admin@gaplandscaping.com
```

3. **Restart your development server** for changes to take effect

## SMTP Provider Options

### Option 1: Gmail (Recommended for Testing)

**Configuration:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASSWORD=your-app-password
ADMIN_EMAIL=where-to-receive@email.com
```

**Setup Steps:**
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated 16-character password as `SMTP_PASSWORD`

**Notes:**
- Free tier: 500 emails/day
- App Passwords require 2FA to be enabled
- More info: https://support.google.com/accounts/answer/185833

---

### Option 2: Outlook/Hotmail

**Configuration:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
ADMIN_EMAIL=where-to-receive@email.com
```

**Notes:**
- Free tier: 300 emails/day
- Use your regular Outlook password
- May require app password if 2FA is enabled

---

### Option 3: SendGrid (Recommended for Production)

**Configuration:**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
ADMIN_EMAIL=where-to-receive@email.com
```

**Setup Steps:**
1. Sign up at https://sendgrid.com (free tier available)
2. Create an API key in Settings > API Keys
3. Use `apikey` as the username (literally the word "apikey")
4. Use your API key as the password

**Notes:**
- Free tier: 100 emails/day
- Better deliverability than personal email
- Detailed analytics and tracking

---

### Option 4: Mailgun

**Configuration:**
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASSWORD=your-mailgun-password
ADMIN_EMAIL=where-to-receive@email.com
```

**Setup Steps:**
1. Sign up at https://mailgun.com (free tier available)
2. Find SMTP credentials in your domain settings

**Notes:**
- Free tier: 5,000 emails/month for 3 months
- Enterprise-grade features

---

### Option 5: SMTP2GO

**Configuration:**
```env
SMTP_HOST=mail.smtp2go.com
SMTP_PORT=587
SMTP_USER=your-smtp2go-username
SMTP_PASSWORD=your-smtp2go-password
ADMIN_EMAIL=where-to-receive@email.com
```

**Notes:**
- Free tier: 1,000 emails/month
- Simple setup
- Good for small businesses

---

## Testing Your Configuration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to http://localhost:3000/landing-page

3. Fill out and submit the contact form

4. Check your admin email inbox for the notification

5. If you encounter errors, check:
   - Browser console for frontend errors
   - Terminal console for backend errors
   - Double-check your SMTP credentials

## Troubleshooting

### "Server configuration error"
- Make sure all environment variables are set in `.env.local`
- Restart your development server after adding `.env.local`

### "Failed to send message"
- Check your SMTP credentials are correct
- Verify your SMTP host and port
- Check terminal logs for specific error messages
- Ensure your email provider allows SMTP access

### Gmail "Less secure app" error
- Use App Passwords instead of your regular password
- Enable 2FA first, then generate an App Password

### Emails going to spam
- Use a professional email service (SendGrid, Mailgun)
- Set up SPF and DKIM records for your domain
- Use a verified sender email address

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the same environment variables to your hosting platform
2. Use a professional email service (SendGrid, Mailgun) instead of Gmail
3. Monitor your email sending limits
4. Consider setting up custom domain email

### Vercel
1. Go to your project settings
2. Navigate to Environment Variables
3. Add all five SMTP variables
4. Redeploy your application

### Netlify
1. Go to Site settings > Environment variables
2. Add all five SMTP variables
3. Trigger a new deploy

## Security Notes

- **Never commit `.env.local` to version control** (it's gitignored by default)
- Keep your SMTP credentials private
- Use App Passwords for Gmail, not your main password
- Rotate credentials if they're ever exposed
- Use environment-specific credentials (different for dev/prod)

## Email Template Customization

The email template is defined in `app/api/contact/route.js`. You can customize:
- Email subject line
- HTML styling and layout
- Text content
- Sender name

Look for the `mailOptions` object in the API route to make changes.
