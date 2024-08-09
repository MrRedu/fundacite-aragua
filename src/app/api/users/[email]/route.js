import { connection } from '@/app/libs/mysql'
import { NextResponse } from 'next/server'

// Obtener un usuario por email
export async function GET(req, { params }) {
  try {
    const [result] = await connection.query(
      'SELECT * FROM tbl_users WHERE email_user = ?',
      [params.email]
    )

    if (result.length === 0) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({ data: result[0] }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: error.message,
        manualMessage: 'Error loading user',
      },
      { status: 500 }
    )
  }
}

// Actualizar un usuario por email
export async function PUT(req, { params }) {
  try {
    const {
      names,
      lastnames,
      cedula,
      birthdate,
      phone,
      email,
      city,
      address,
      university,
      career,
      internshipApplicant,
      communityServiceApplicant,
    } = await req.json()

    const [result] = await connection.query(
      'UPDATE tbl_users SET names_user = ?, lastnames_user = ?, cedula_user = ?, birthdate_user = ?, phone_user = ?, email_user = ?, city_user = ?, address_user = ?, university_user = ?, career_user = ?, internship_applicant_user = ?, community_service_applicant_user = ? WHERE email_user = ?',
      [
        names,
        lastnames,
        cedula,
        birthdate,
        phone,
        email,
        city,
        address,
        university,
        career,
        internshipApplicant,
        communityServiceApplicant,
        params.email,
      ]
    )

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(
      { message: 'User updated successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: error.message,
        manualMessage: 'Error updating user',
      },
      { status: 500 }
    )
  }
}
