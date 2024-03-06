import styles from './Slider.module.css'

const IMAGES = [
  {
    id: '1',
    src: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Descripción de la imagen 1',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1530580116833-2c4c1ff83c6b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Descripción de la imagen 2',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1533422902779-aff35862e462?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Descripción de la imagen 3',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Descripción de la imagen 4',
  },
]

export const Slider = () => {
  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${styles['button-left']}`}>
        {`>`}
      </button>
      <button className={`${styles.button} ${styles['button-right']}`}>
        {`<`}
      </button>
      <div className={styles.slider}>
        <ul className={styles.images}>
          {IMAGES.map(({ id, src, alt }) => (
            <li key={id}>
              <img src={src} alt={alt} className={styles.image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
