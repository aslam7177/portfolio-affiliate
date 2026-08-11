const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

const clean = (value) => (typeof value === 'string' ? value.trim() : '');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const name = clean(req.body?.name);
  const email = clean(req.body?.email);
  const message = clean(req.body?.message);

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  if (name.length > MAX_NAME_LENGTH || email.length > MAX_EMAIL_LENGTH || message.length > MAX_MESSAGE_LENGTH || !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: 'Please provide valid contact details.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || 'aslam6bboys@gmail.com';
  if (!apiKey || !from) {
    return res.status(503).json({ error: 'The contact service is being configured. Please email me directly.' });
  }

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Portfolio contact from ${name}`, text: `Name: ${name}\nEmail: ${email}\n\n${message}` }),
    });
    if (!emailResponse.ok) {
      console.error('Contact email provider error:', await emailResponse.text());
      return res.status(502).json({ error: 'Unable to deliver your message. Please try again later.' });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact endpoint error:', error);
    return res.status(500).json({ error: 'Unable to deliver your message. Please try again later.' });
  }
}
