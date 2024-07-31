import propTypes from 'prop-types'
export const Input = ({
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
  isRequired = false,
  readOnly = false,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={isRequired}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
        ${readOnly ? 'cursor-not-allowed bg-gray-200 user-select-none' : ''}
        `}
      readOnly={readOnly}
    />
  )
}
Input.propTypes = {
  type: propTypes.string,
  id: propTypes.string,
  name: propTypes.string,
  value: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  isRequired: propTypes.bool,
  readOnly: propTypes.bool,
}
