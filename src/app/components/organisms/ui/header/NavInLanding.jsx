import propTypes from 'prop-types'
import { NAV_ITEMS } from '@/utils/const'
import Link from 'next/link'

export const NavInLanding = ({ isMenuOpen }) => {
  return (
    <div
      className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
      id="mobile-menu-2"
    >
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-1">
        {NAV_ITEMS.map(item => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`font-bold block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:p-0 dark:text-white hover:lg:text-primary-700 hover:underline underline-offset-4 lg:text-gray-800`}
              aria-current="page"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

NavInLanding.propTypes = {
  isMenuOpen: propTypes.bool,
}
