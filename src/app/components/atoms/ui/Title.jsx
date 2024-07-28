import propTypes from 'prop-types'

export const Title = ({ isH2, isH4, children }) => {
  if (isH2) {
    return <h2 className="text-3xl font-bold text-gray-500 mb-6">{children}</h2>
  }
  if (isH4) {
    return <h4 className="text-3xl font-bold text-gray-500 mb-6">{children}</h4>
  }

  return <h3 className="text-3xl font-bold text-gray-500 mb-6">{children}</h3>
}

Title.propTypes = {
  isH2: propTypes.bool,
  isH4: propTypes.bool,
  children: propTypes.node.isRequired,
}
