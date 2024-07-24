import propTypes from 'prop-types'
export const Label = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>
}
Label.propTypes = {
  children: propTypes.node,
  htmlFor: propTypes.string,
}
