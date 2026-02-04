// Email Notification Service
// In production, integrate with EmailJS, SendGrid, AWS SES, or your backend API

const ADMIN_EMAIL = 'admin@buildlabs.in' // Change to your admin email

// EmailJS configuration (optional - uncomment and configure if using EmailJS)
// import emailjs from '@emailjs/browser'

export const emailService = {
  // Send email notification to admin when a new lead is submitted
  sendLeadNotification: async (leadData) => {
    try {
      // Option 1: Use EmailJS (requires setup)
      // Uncomment and configure if using EmailJS:
      /*
      const templateParams = {
        to_email: ADMIN_EMAIL,
        lead_name: leadData.name,
        lead_email: leadData.email,
        lead_phone: leadData.phone || 'Not provided',
        lead_company: leadData.company || 'Not provided',
        lead_service: leadData.service || 'Not specified',
        lead_budget: leadData.budget || 'Not specified',
        lead_message: leadData.message,
        timestamp: new Date().toLocaleString()
      }
      
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      )
      */

      // Option 2: Use your backend API
      // Uncomment and configure if you have a backend:
      /*
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: ADMIN_EMAIL,
          subject: `New Lead: ${leadData.name}`,
          template: 'new-lead',
          data: leadData
        })
      })
      
      if (!response.ok) {
        throw new Error('Failed to send email')
      }
      */

      // Option 3: For demo purposes, log to console
      // In production, replace this with actual email service
      console.log('📧 Email Notification (would be sent to admin):', {
        to: ADMIN_EMAIL,
        subject: `New Lead Submission: ${leadData.name}`,
        body: `
New Lead Received!

Name: ${leadData.name}
Email: ${leadData.email}
Phone: ${leadData.phone || 'Not provided'}
Company: ${leadData.company || 'Not provided'}
Service: ${leadData.service || 'Not specified'}
Budget: ${leadData.budget || 'Not specified'}

Message:
${leadData.message}

Submitted at: ${new Date().toLocaleString()}
        `
      })

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))

      return { success: true, message: 'Email notification sent' }
    } catch (error) {
      console.error('Error sending email notification:', error)
      // Don't fail the lead submission if email fails
      return { success: false, error: error.message }
    }
  },

  // Send confirmation email to the lead
  sendConfirmationEmail: async (leadData) => {
    try {
      console.log('📧 Confirmation Email (would be sent to lead):', {
        to: leadData.email,
        subject: 'Thank you for contacting Buildlabs!',
        body: `
Hi ${leadData.name},

Thank you for reaching out to Buildlabs! We've received your inquiry and our team will get back to you within 24 hours.

Here's a summary of your inquiry:
- Service: ${leadData.service || 'Not specified'}
- Budget: ${leadData.budget || 'Not specified'}

We look forward to helping you turn your business into profits!

Best regards,
Buildlabs Team
        `
      })

      await new Promise(resolve => setTimeout(resolve, 300))
      return { success: true }
    } catch (error) {
      console.error('Error sending confirmation email:', error)
      return { success: false, error: error.message }
    }
  }
}

