import nodemailer from 'nodemailer'

export async function POST(req){
  const { name, email, message } = await req.json()
  if(!name || !email || !message) return new Response('Missing fields', { status: 400 })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_PASS
    }
  })

  const mailOptions = {
    from: email,
    to: process.env.CONTACT_EMAIL,
    subject: `World Composting contact from ${name}`,
    text: message
  }

  try {
    await transporter.sendMail(mailOptions)
    return new Response('OK')
  } catch (err) {
    console.error('Mail error', err)
    return new Response('Mail error', { status: 500 })
  }
}
