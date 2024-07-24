import { useState } from 'react'
import { initialValueFormPostulation } from '@/utils/const'

export default function useFormPostulation() {
  const [formData, setFormData] = useState(initialValueFormPostulation)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!formData.names || !formData.lastnames || !formData.email)
      return alert('Todos los campos son obligatorios')

    try {
      setIsLoading(true)

      const formDataObj = new FormData()
      for (const [key, value] of Object.entries(formData)) {
        formDataObj.append(key, value)
      }

      await fetch('/api/send', {
        method: 'POST',
        body: formDataObj,
      })

      alert('¡Postulación enviada!')

      setFormData(initialValueFormPostulation)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
  const handleReset = () => setFormData(initialValueFormPostulation)

  return {
    formData,
    handleChange,
    handleSubmit,
    handleReset,
    isLoading,
  }
}
