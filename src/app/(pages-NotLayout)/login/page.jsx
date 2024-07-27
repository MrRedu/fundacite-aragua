'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { FormLogin } from '@/components/organisms/forms/FormLogin'

export default function LoginPage() {
  const { data: session } = useSession()

  if (session) {
    redirect('/profile')
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center mx-auto h-screen lg:py-0">
        <Link
          href="/"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex items-center mb-6"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rotate-180"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span>{`Volver a la página principal`}</span>
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {`Iniciar sesión`}
            </h2>
            <FormLogin />
          </div>
        </div>
      </div>
    </section>
  )
}
