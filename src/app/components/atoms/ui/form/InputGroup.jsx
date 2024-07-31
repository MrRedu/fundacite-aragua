import propTypes from 'prop-types'
export const InputGroup = ({ children, className }) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>
}
InputGroup.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
}
