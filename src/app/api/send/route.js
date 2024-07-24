import { Resend } from 'resend'
import { EmailTemplate } from '@/components/organisms/resend/email-template/EmailTemplate'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req, res) {
  try {
    const formData = await req.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    // const companyName = formData.get('companyName')
    // const services = formData.getAll('services')
    // const message = formData.get('message')

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.PERSONAL_EMAIL],
      subject: 'Postulación',
      react: EmailTemplate({
        name,
        email,
        // companyName,
        // services,
        // message,
      }),
    })

    return NextResponse.json(
      { message: 'Correo electrónico enviado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Error al enviar el correo electrónico' },
      { status: 500 }
    )
  }
}