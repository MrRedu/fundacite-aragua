import { NextResponse } from 'next/server'
import { connection } from '@/app/libs/mysql'

// Obtener todos los usuarios
export async function GET() {
  try {
    const [result] = await connection.query('SELECT * FROM tbl_users')

    return NextResponse.json({ data: result, message: 'OK' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: error.message,
        manualMessage: 'Error loading users',
      },
      { status: 500 }
    )
  }
}

// Crear un nuevo usuario
export async function POST(req) {
  try {
    const { names, lastnames, email, password } = await req.json()

    const result = await connection.query('INSERT INTO tbl_users SET ?', {
      names_user: names,
      lastnames_user: lastnames,
      email_user: email,
      password_user: password,
    })

    return NextResponse.json(
      {
        message: 'User created successfully',
        funcionario: {
          idUser: result.insertId,
          names,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: error.message,
        manualMessage: 'Error creating user',
      },
      { status: 500 }
    )
  }
}
