import { useState } from 'react'
import { initialValueFormLogin } from '@/utils/const'
import { validateEmail } from '@/utils/utils'
import { signIn } from 'next-auth/react'

export default function useFormLogin() {
  const [formData, setFormData] = useState(initialValueFormLogin)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // Validaciones antes de enviar el formulario
    const isValidEmail = validateEmail(formData.email)
    if (!formData.email || !formData.password)
      return setError('Todos los campos son obligatorios')
    if (!isValidEmail) return setError('El correo electrónico no es valido')

    try {
      setIsLoading(true)

      const response = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      })

      if (response.status === 401) return setError('Credenciales incorrectas')
    } catch (error) {
      setError(error)
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
    error,
  }
}
