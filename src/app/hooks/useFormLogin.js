import { useState } from 'react'
import { initialValueFormLogin } from '@/utils/const'
import { validateEmail } from '@/utils/utils'

export default function useFormLogin() {
  const [formData, setFormData] = useState(initialValueFormLogin)
  const [isLoading, setIsLoading] = useState(false)
  // const [errors, setErrors] = useState()

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const isValidEmail = validateEmail(formData.email)

    if (!formData.email || !formData.password)
      return alert('Todos los campos son obligatorios')

    if (!isValidEmail) return alert('El correo electrónico no es valido')

    try {
      setIsLoading(true)
      console.log(formData)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
  const handleReset = () => setFormData(initialValueFormLogin)

  return {
    formData,
    handleChange,
    handleSubmit,
    handleReset,
    isLoading,
  }
}
