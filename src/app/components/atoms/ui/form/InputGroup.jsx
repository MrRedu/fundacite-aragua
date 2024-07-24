import propTypes from 'prop-types'
export const InputGroup = ({ children }) => {
  return <div>{children}</div>
}
InputGroup.propTypes = {
  children: propTypes.node,
}
