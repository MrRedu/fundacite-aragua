import propTypes from 'prop-types'
import { Inter } from 'next/font/google'

import '#/node_modules/minireset.css/minireset.min.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fundacite Aragua',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: propTypes.node.isRequired,
}