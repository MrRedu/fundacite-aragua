'use client'

import { useSession, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { FormPostulation } from '@/components/organisms/forms/FormPostulation'

export default function ProfilePage() {
  const { data: session } = useSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <>
      <h2>{`</Postulación>`}</h2>
      <FormPostulation />

      <button type="button" className="bg-red-500 text-white" onClick={signOut}>
        {`CERRAR SESIÓN`}
      </button>
    </>
  )
}
