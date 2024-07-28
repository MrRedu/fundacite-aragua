import propTypes from 'prop-types'
export const Section = ({ children, notPadding, isDiv, id, ...props }) => {
  if (isDiv) {
    return (
      <div
        id={id}
        className={`w-full ${notPadding ? '' : 'py-12 px-8 md:px-16'}`}
        {...props}
      >
        {children}
      </div>
    )
  }

  return (
    <section
      id={id}
      className={`w-full ${notPadding ? '' : 'py-12 px-8 md:px-16'}`}
      {...props}
    >
      {children}
    </section>
  )
}
Section.propTypes = {
  id: propTypes.string,
  notPadding: propTypes.bool,
  children: propTypes.node.isRequired,
  isDiv: propTypes.bool,
}
