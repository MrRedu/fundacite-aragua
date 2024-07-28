import propTypes from 'prop-types'
export const Alert = ({ isInfo, isDanger, isSuccess, isWarning, children }) => {
  return (
    <div
      className={`flex items-center p-4 mb-4 text-sm rounded-lg 
            ${isInfo && 'text-blue-800  bg-blue-50 dark:bg-gray-800 dark:text-blue-400'}
            ${isDanger && 'text-red-800  bg-red-50 dark:bg-gray-800 dark:text-red-400'}
            ${isSuccess && 'text-green-800  bg-green-50 dark:bg-gray-800 dark:text-green-400'}
            ${isWarning && 'text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300'}
            `}
      role="alert"
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>{children}</div>
    </div>
  )
}

Alert.propTypes = {
  isInfo: propTypes.bool,
  isDanger: propTypes.bool,
  isSuccess: propTypes.bool,
  isWarning: propTypes.bool,
  children: propTypes.node,
}
