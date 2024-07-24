import { useState } from 'react'
import { initialValueFormRegister } from '@/utils/const'

export default function useFormRegister() {
  const [formData, setFormData] = useState(initialValueFormRegister)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!formData.email || !formData.password)
      alert('Todos los campos son obligatorios')

    try {
      setIsLoading(true)
      console.log(formData)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
  const handleReset = () => setFormData(initialValueFormRegister)

  return {
    formData,
    handleChange,
    handleSubmit,
    handleReset,
    isLoading,
  }
}
