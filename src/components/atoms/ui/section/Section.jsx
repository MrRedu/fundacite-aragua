import propTypes from 'prop-types'
import styles from './Section.module.css'
export const Section = ({ children }) => {
  return <section className={styles.container}>{children}</section>
}
Section.propTypes = {
  children: propTypes.node,
}
