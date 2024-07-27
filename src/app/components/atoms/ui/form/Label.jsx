import propTypes from 'prop-types'
export const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {children}
    </label>
  )
}

Label.propTypes = {
  children: propTypes.node,
  htmlFor: propTypes.string,
}
