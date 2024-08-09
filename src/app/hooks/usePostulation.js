import { useEffect, useState } from 'react'
import { handleUser } from '@/services/users'
import { toast } from 'sonner'

export function usePostulation({ email }) {
  const [userData, setUserData] = useState()
  const [isLoading, setIsLoading] = useState()

  const sendToCommunityService = async () => {
    if (Object.values(userData).every(value => value !== null)) {
      const formDataObj = new FormData()
      formDataObj.append('email', email)
      formDataObj.append('names', userData.names_user)
      formDataObj.append('lastnames', userData.lastnames_user)
      formDataObj.append('to', 'Servicio comunitario')

      try {
        setIsLoading(true)
        const result = await fetch('/api/send', {
          method: 'POST',
          body: formDataObj,
        })

        if (result.status === 200) {
          return toast.success('Postulación enviada')
        }

        if (result.status === 500) {
          return toast.error('Error al enviar la postulación')
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    toast.error('Todos los datos son obligatorios')
  }

  const sendToInternshipService = async () => {
    if (Object.values(userData).every(value => value !== null)) {
      const formDataObj = new FormData()
      formDataObj.append('email', email)
      formDataObj.append('names', userData.names_user)
      formDataObj.append('lastnames', userData.lastnames_user)
      formDataObj.append('to', 'Pasantía')

      try {
        setIsLoading(true)
        const result = await fetch('/api/send', {
          method: 'POST',
          body: formDataObj,
        })

        if (result.status === 200) {
          return toast.success('Postulación enviada')
        }

        if (result.status === 500) {
          return toast.error('Error al enviar la postulación')
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    toast.error('Todos los datos son obligatorios')
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await handleUser({ email })
        setUserData({ ...data })
      } catch (error) {
        console.error(error)
      }
    }

    if (email) {
      fetchUserData()
    }
  }, [email])

  return {
    userData,
    sendToCommunityService,
    sendToInternshipService,
    isLoading,
  }
}
