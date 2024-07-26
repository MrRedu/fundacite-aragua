import propTypes from 'prop-types'

export const Title = ({ isH2, isH4, children }) => {
  if (isH2) {
    return (
      <>
        <h2>{children}</h2>
      </>
    )
  }
  if (isH4) {
    return (
      <>
        <h4>{children}</h4>
      </>
    )
  }

  return (
    <>
      <h3 className="text-3xl font-bold text-[#A5A8AA]">{children}</h3>
    </>
  )
}

Title.propTypes = {
  isH2: propTypes.bool,
  isH4: propTypes.bool,
  children: propTypes.node.isRequired,
}
