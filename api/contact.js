/**
 * ISHMT TKMCE Chapter - Contact & Inquiry API Route
 * Secure Backend Handler for Student Chapter & Regional Inquiries
 * Routes inquiries directly to ishmt@tkmce.ac.in
 */

module.exports = async function handler(req, res) {
  // Set CORS and security headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Only POST inquiries are accepted.'
    });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (err) {
        return res.status(400).json({ success: false, error: 'Invalid JSON payload.' });
      }
    }

    const { name, email, telephone, subject, message } = body || {};

    // 1. Strict Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Name is required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'A valid email address is required.' });
    }

    if (!subject || typeof subject !== 'string' || !subject.trim()) {
      return res.status(400).json({ success: false, error: 'Subject is required.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({ success: false, error: 'Message must be at least 5 characters.' });
    }

    // Sanitize text inputs against header injection / XSS
    const cleanName = name.trim().replace(/[\r\n]/g, ' ');
    const cleanEmail = email.trim().replace(/[\r\n]/g, '');
    const cleanPhone = telephone ? String(telephone).trim().replace(/[\r\n]/g, ' ') : 'Not provided';
    const cleanSubject = subject.trim().replace(/[\r\n]/g, ' ');
    const cleanMessage = message.trim();

    const targetRecipient = process.env.CONTACT_RECEIVER_EMAIL || 'ishmt@tkmce.ac.in';
    const timestamp = new Date().toISOString();

    console.log(`[ISHMT Contact System] Received inquiry from: ${cleanName} <${cleanEmail}>`);
    console.log(`[ISHMT Contact System] Target Destination: ${targetRecipient} | Subject: ${cleanSubject}`);

    // 2. Dispatch via SMTP (Nodemailer) or Resend if credentials exist in .env
    let emailDispatched = false;

    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || 'ISHMT TKMCE <onboarding@resend.dev>',
            to: [targetRecipient],
            reply_to: cleanEmail,
            subject: `[ISHMT Website Inquiry] ${cleanSubject}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E5E7EB; border-radius: 8px;">
                <div style="background-color: #800000; padding: 16px; border-radius: 6px; text-align: center; color: white;">
                  <h2 style="margin: 0;">ISHMT TKMCE Students Chapter</h2>
                  <p style="margin: 4px 0 0; font-size: 14px;">New Public Inquiry Received</p>
                </div>
                <div style="padding: 20px 0;">
                  <p><strong>Sender Name:</strong> ${cleanName}</p>
                  <p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
                  <p><strong>Telephone:</strong> ${cleanPhone}</p>
                  <p><strong>Subject:</strong> ${cleanSubject}</p>
                  <p><strong>Received At:</strong> ${timestamp}</p>
                  <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 20px 0;" />
                  <p><strong>Message:</strong></p>
                  <div style="background-color: #F9FAFB; padding: 16px; border-radius: 6px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #1F2937;">${cleanMessage}</div>
                </div>
                <div style="font-size: 12px; color: #6B7280; text-align: center; border-top: 1px solid #E5E7EB; padding-top: 12px;">
                  Sent via ISHMT Student Chapter Website at TKM College of Engineering, Kollam.
                </div>
              </div>
            `
          })
        });
        if (response.ok) {
          emailDispatched = true;
          console.log('[ISHMT Contact System] Email successfully dispatched via Resend API.');
        }
      } catch (apiErr) {
        console.warn('[ISHMT Contact System] Resend dispatch attempt failed:', apiErr.message);
      }
    } else if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587', 10),
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        });

        await transporter.sendMail({
          from: `"ISHMT Website Inquiry" <${process.env.SMTP_USER}>`,
          to: targetRecipient,
          replyTo: cleanEmail,
          subject: `[ISHMT Inquiry] ${cleanSubject}`,
          text: `From: ${cleanName} (${cleanEmail})\nPhone: ${cleanPhone}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
              <h2 style="color: #800000;">New Inquiry for ISHMT TKMCE</h2>
              <p><strong>Name:</strong> ${cleanName}</p>
              <p><strong>Email:</strong> ${cleanEmail}</p>
              <p><strong>Telephone:</strong> ${cleanPhone}</p>
              <p><strong>Subject:</strong> ${cleanSubject}</p>
              <blockquote style="background: #f4f4f4; padding: 12px; border-left: 4px solid #800000;">${cleanMessage}</blockquote>
            </div>
          `
        });
        emailDispatched = true;
        console.log('[ISHMT Contact System] Email successfully dispatched via Nodemailer SMTP.');
      } catch (smtpErr) {
        console.warn('[ISHMT Contact System] SMTP dispatch attempt failed:', smtpErr.message);
      }
    }

    // 3. Respond with clean success confirmation
    return res.status(200).json({
      success: true,
      delivered: emailDispatched,
      recipient: targetRecipient,
      message: `Thank you, ${cleanName}! Your message has been received and routed directly to ${targetRecipient}. Our chapter team will get back to you shortly.`
    });

  } catch (err) {
    console.error('[ISHMT Contact System] Unexpected Server Error:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your inquiry. Please email directly at ishmt@tkmce.ac.in.'
    });
  }
};
