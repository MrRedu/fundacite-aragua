import propTypes from 'prop-types'
import styles from './Sector.module.css'
export const Sector = ({ children }) => {
  return <section className={styles.container}>{children}</section>
}
Sector.propTypes = {
  children: propTypes.node,
}
