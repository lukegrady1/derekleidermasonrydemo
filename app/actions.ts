'use server'

// Server Actions for form handling
// Note: In production, you'll need to install nodemailer and configure SMTP
// npm install nodemailer @types/nodemailer

import { revalidatePath } from 'next/cache'

interface ContactFormData {
  name: string
  email: string
  phone: string
  address: string
  projectType: string[]
  budgetRange: string
  timeline: string
  message: string
  honeypot: string
}

export async function submitContactForm(formData: FormData) {
  // Rate limiting check (in production, use Redis or similar)
  // For now, we'll just validate the data

  // Honeypot spam check
  const honeypot = formData.get('website') as string
  if (honeypot) {
    return {
      success: false,
      error: 'Spam detected',
    }
  }

  // Extract and validate form data
  const data: ContactFormData = {
    name: (formData.get('name') as string)?.trim() || '',
    email: (formData.get('email') as string)?.trim() || '',
    phone: (formData.get('phone') as string)?.trim() || '',
    address: (formData.get('address') as string)?.trim() || '',
    projectType: formData.getAll('projectType') as string[],
    budgetRange: (formData.get('budgetRange') as string) || '',
    timeline: (formData.get('timeline') as string) || '',
    message: (formData.get('message') as string)?.trim() || '',
    honeypot: honeypot,
  }

  // Validation
  if (!data.name || data.name.length < 2) {
    return { success: false, error: 'Please enter your name' }
  }

  if (!data.email || !isValidEmail(data.email)) {
    return { success: false, error: 'Please enter a valid email address' }
  }

  if (!data.phone || data.phone.length < 10) {
    return { success: false, error: 'Please enter a valid phone number' }
  }

  if (data.projectType.length === 0) {
    return { success: false, error: 'Please select at least one project type' }
  }

  if (!data.message || data.message.length < 10) {
    return {
      success: false,
      error: 'Please provide more details about your project',
    }
  }

  // Check for disposable email domains (basic check)
  const disposableDomains = ['tempmail.com', 'throwaway.email', '10minutemail.com']
  const emailDomain = data.email.split('@')[1]
  if (disposableDomains.includes(emailDomain)) {
    return { success: false, error: 'Please use a valid email address' }
  }

  try {
    // In production, send email using nodemailer
    // For now, we'll just log to console
    console.log('Contact form submission:', data)

    // Example nodemailer implementation (commented out):
    /*
    const nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `New Quote Request from ${data.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Project Type:</strong> ${data.projectType.join(', ')}</p>
        <p><strong>Budget Range:</strong> ${data.budgetRange}</p>
        <p><strong>Timeline:</strong> ${data.timeline}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    })
    */

    // Track analytics event (GA4)
    // This would be done client-side via gtag

    return {
      success: true,
      message: "Thank you! We'll be in touch within 24 hours.",
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    return {
      success: false,
      error: 'Something went wrong. Please try calling us instead.',
    }
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
