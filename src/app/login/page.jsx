'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

import { FormLogin } from '@/components/organisms/forms/FormLogin'

export default function LoginPage() {
  const { data: session } = useSession()

  if (session) {
    redirect('/profile')
  }

  return (
    <>
      <FormLogin />
    </>
  )
}
