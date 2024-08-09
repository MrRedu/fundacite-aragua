import { useState } from 'react'
import { initialValueFormRegister } from '@/utils/const'
import { validateEmail, validateString } from '@/utils/utils'
import { signIn } from 'next-auth/react'
import { hashPassword } from '@/services/authServices'

async function loadEmail(email) {
  const response = await fetch(`http://localhost:3000/api/users/${email}`)
  if (response.status === 200) {
    return true
  } else if (response.status === 404) {
    return false
  } else {
    throw new Error(`Error: #${response.status}`)
  }
}

export default function useFormRegister() {
  const [formData, setFormData] = useState(initialValueFormRegister)
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

    if (!validateString(formData.names))
      return setError('Los nombres solo pueden contener letras')

    if (!validateString(formData.lastnames))
      return setError('Los apellidos solo pueden contener letras')

    const isValidEmail = validateEmail(formData.email)
    if (!isValidEmail) return setError('El correo electrónico no es valido')

    const isEmailRegistered = await loadEmail(formData.email)
    if (isEmailRegistered)
      return setError('El correo electrónico ya ha sido registrado')

    if (!formData.password) return setError('La contraseña es obligatoria')

    if (formData.password.length < 8)
      return setError('La contraseña debe tener al menos 8 caracteres')

    if (formData.password !== formData.confirmPassword)
      return setError('Las contraseñas no coinciden')

    if (formData.password === formData.confirmPassword) {
      setError(null)
    }

    try {
      setIsLoading(true)
      const hashedPassword = await hashPassword(formData.password)
      const response = await fetch('http://localhost:3000/api/users/', {
        method: 'POST',
        body: JSON.stringify({
          names: formData.names,
          lastnames: formData.lastnames,
          email: formData.email,
          password: hashedPassword,
        }),
      })

      if (!response.ok) {
        throw new Error('Error creating user')
      }

      if (response.status === 201) {
        setFormData(initialValueFormRegister)
        signIn('credentials', {
          email: formData.email,
          password: formData.password,
          redirect: true,
          callbackUrl: '/postulation',
        })
      }

      setError(null)
    } catch (error) {
      setError(error.message)
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
    error,
  }
}
