import propTypes from 'prop-types'
export const Label = ({ htmlFor, isRequired, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {children}
      {isRequired && <span className="text-red-500"> * </span>}
    </label>
  )
}

Label.propTypes = {
  children: propTypes.node,
  htmlFor: propTypes.string,
  isRequired: propTypes.bool,
}
