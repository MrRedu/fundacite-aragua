'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export const LoginButton = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <Link href={'/postulation'}>
        <div className="relative w-8 h-8 overflow-hidden bg-blue-600 rounded dark:bg-gray-600">
          <svg
            className="absolute w-10 h-8 text-white -left-2"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </Link>
    )
  }

  return (
    <>
      <Link
        href="/login"
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
      >
        ¡Postúlate!
      </Link>
    </>
  )
}
