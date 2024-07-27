import { useState } from 'react'
import { initialValueFormRegister } from '@/utils/const'
import { validateEmail } from '@/utils/utils'

async function loadEmail(email) {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${email}`)
    if (response.status === 200) {
      return true
    } else if (response.status === 404) {
      return false
    } else {
      throw new Error(`Error: #${response.status}`)
    }
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export default function useFormRegister() {
  const [formData, setFormData] = useState(initialValueFormRegister)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const isValidEmail = validateEmail(formData.email)
    if (!isValidEmail) return alert('El correo electrónico no es valido')

    const isEmailRegistered = await loadEmail(formData.email)
    if (isEmailRegistered)
      return alert('El correo electrónico ya ha sido registrado')

    try {
      setIsLoading(true)

      const response = await fetch('http://localhost:3000/api/users/', {
        method: 'POST',
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Error creating user')
      }

      const data = await response.json()
      console.log(data)
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
