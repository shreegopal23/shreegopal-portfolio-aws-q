# Email Setup Guide

Your contact form is now ready to send emails! Choose one of the following setup options:

## Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use their test domain
3. Get your API key from the dashboard
4. Add to your `.env.local` file:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

## Option 2: Gmail with App Password

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a 16-character password
3. Add to your `.env.local` file:
   ```
   GMAIL_USER=your_gmail@gmail.com
   GMAIL_APP_PASSWORD=your_16_character_app_password
   ```

## Option 3: Other SMTP Services

For other email providers (Outlook, Yahoo, etc.), add:
```
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@domain.com
SMTP_PASS=your_password
```

## Testing

1. Create a `.env.local` file with your chosen configuration
2. Restart your development server: `pnpm dev`
3. Test the contact form on your website

## Deployment

Make sure to add your environment variables to your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- AWS/Other: Add to your deployment configuration

## Troubleshooting

- Check your environment variables are correctly set
- Verify your email service credentials
- Check the browser console and server logs for errors
- Test with a simple email first
