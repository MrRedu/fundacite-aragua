import styles from './Accordion.module.css'
import { FAQ } from '@/utils/constants'
import { ItemAccordion } from './ItemAccordion'
import { useState } from 'react'
export const Accordion = () => {
  const [isOpenById, setIsOpenById] = useState(false)

  const handleClick = id => {
    setIsOpenById(prev => (prev === id ? false : id))
  }

  return (
    <ul className={styles.container}>
      {FAQ.map(({ id, question, answer }) => (
        <ItemAccordion
          key={id}
          id={id}
          question={question}
          answer={answer}
          isOpen={isOpenById}
          onClick={handleClick}
        />
      ))}
    </ul>
  )
}
