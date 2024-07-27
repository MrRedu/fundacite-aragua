import propTypes from 'prop-types'
export const InputGroup = ({ children }) => {
  return <div className="mb-6 flex flex-col">{children}</div>
}
InputGroup.propTypes = {
  children: propTypes.node,
}
