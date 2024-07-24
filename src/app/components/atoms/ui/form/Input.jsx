import propTypes from 'prop-types'
export const Input = ({ type, id, name, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
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
}
