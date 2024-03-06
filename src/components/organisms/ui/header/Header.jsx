import styles from './Header.module.css'
import { Nav } from './Nav'
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>FUNDACITE</h1>

        <Nav />
      </div>
    </header>
  )
}
