'use client'
import propTypes from 'prop-types'
import { SessionProvider } from 'next-auth/react'
export function Providers({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
Providers.propTypes = {
  children: propTypes.node,
  session: propTypes.object,
}
