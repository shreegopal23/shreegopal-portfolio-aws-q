// Alternative Gmail setup - rename this to route.ts if you prefer Gmail
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 })
    }

    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    })

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'shreegopal2390@gmail.com',
      subject: `Portfolio: ${subject}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ message: 'Email sent!' })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
