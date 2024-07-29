'use client'
import { useSession } from 'next-auth/react'

export const User = () => {
  const { data: session, status } = useSession()
  return (
    <>
      <h2>{`</User>`}</h2>
      {session && <p>{`Session: ${JSON.stringify(session)}`}</p>}
      <p>{`Status: ${status}`}</p>
    </>
  )
}
