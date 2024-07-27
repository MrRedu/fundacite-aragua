'use client'
import { useSession, signOut } from 'next-auth/react'

export default function RegisterPage() {
  const { data: session } = useSession()

  return (
    <>
      <h2>{`</Page>`}</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <button type="button" className="bg-red-500 text-white" onClick={signOut}>
        Sign out
      </button>
    </>
  )
}
