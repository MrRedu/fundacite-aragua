import propTypes from 'prop-types'
export const Label = ({ htmlFor }) => {
  return <label htmlFor={htmlFor}></label>
}
Label.propTypes = {
  htmlFor: propTypes.string,
}
