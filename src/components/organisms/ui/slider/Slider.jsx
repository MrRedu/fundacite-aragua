import { useEffect, useRef, useState } from 'react'
import styles from './Slider.module.css'
import { FIVE_SECONDS_IN_MS, IMAGES } from '@/utils/constants'

export const Slider = () => {
  const listRef = useRef()
  const intervalRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleLeftClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(IMAGES.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleRightClick = () => {
    if (currentIndex === IMAGES.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  useEffect(() => {
    listRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
  }, [currentIndex])

  const autoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % IMAGES.length)
    }, FIVE_SECONDS_IN_MS)
  }

  useEffect(() => {
    autoPlay()

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <ul ref={listRef} className={styles.images}>
          {IMAGES.map(({ id, src, alt }) => (
            <li key={id}>
              <img src={src} alt={alt} className={styles.image} />
            </li>
          ))}
        </ul>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {IMAGES.map(({ id }, index) => (
          <button
            key={id}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.dot} ${
              currentIndex === index ? styles['is-active'] : ''
            }`}
          ></button>
        ))}
      </div>

      {/* Buttons left and right (absolute position) */}
      <button
        onClick={handleLeftClick}
        className={`${styles.button} ${styles['button-left']}`}
      >
        {`👈🏻`}
      </button>
      <button
        onClick={handleRightClick}
        className={`${styles.button} ${styles['button-right']}`}
      >
        {`👉🏻`}
      </button>
    </div>
  )
}
