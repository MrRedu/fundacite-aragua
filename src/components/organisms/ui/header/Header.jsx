import styles from './Header.module.css'
export const Header = () => {
  return (
    <header id='inicio' className={styles.header}>

      <a href="#inicio" className={styles['logo-link']}>
        <img src="/fundacite-logo.jpg" alt="Fundacite Maracay Logo" className={styles.logo} />
      </a>

      <nav className={styles['nav-bar']}>
        <ul className={styles['nav-list']}>
          <li className={styles['item-list']}><a href="">¿Quiénes somos?</a></li>
          <li className={styles['item-list']}><a href="">Proyectos</a></li>
          <li className={styles['item-list']}><a href="">Inicio</a></li>
        </ul>
        <a href="#postular">Postular</a>
      </nav>
      
    </header>
  )
}
