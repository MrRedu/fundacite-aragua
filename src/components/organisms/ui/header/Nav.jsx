import styles from './Nav.module.css'
const SECTIONS = [
  {
    name: 'Inicio',
    href: '#',
  },
  {
    name: '¿Quiénes somos?',
    href: '#',
  },
]
export const Nav = () => {
  return (
    <nav className={styles.container}>
      {SECTIONS.map(({ name, href }) => (
        <a className={styles.link} key={name} href={href}>
          {name}
        </a>
      ))}
    </nav>
  )
}
