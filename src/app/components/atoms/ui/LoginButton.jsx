'use client'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

export const LoginButton = () => {
  const { data: session } = useSession()
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  if (session) {
    return (
      <div className="relative">
        <button
          id="dropdownAvatarNameButton"
          data-dropdown-toggle="dropdownAvatarName"
          className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
          type="button"
          onClick={toggleMenu}
        >
          <span className="sr-only">{`Abrir menú del usuario`}</span>
          <svg
            className="w-8 h-8 text-blue-600 mr-2"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{`${session.user.names.split(' ')[0]} ${session.user.lastnames.split(' ')[0]}`}</span>
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* <!-- Dropdown menu --> */}
        <div
          className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${isOpenMenu ? 'absolute right-0' : 'hidden'}`}
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="truncate">{session.user.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Perfil
              </Link>
            </li>
            <li>
              <Link
                href="/postulation"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Postulación
              </Link>
            </li>
          </ul>
          <div className="py-2">
            <button
              onClick={signOut}
              className="block w-full px-4 py-2 text-sm text-start text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              {`Cerrar sesión`}
            </button>
          </div>
        </div>
      </div>
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
