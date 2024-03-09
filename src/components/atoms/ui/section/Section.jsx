import propTypes from 'prop-types'
import styles from './Section.module.css'
export const Section = ({ children, isTheFirst }) => {
  return (
    <section
      className={`${styles.container} ${isTheFirst && styles['is-the-first']}`}
    >
      {children}
    </section>
  )
}
Section.propTypes = {
  isTheFirst: propTypes.bool,
  children: propTypes.node,
}
