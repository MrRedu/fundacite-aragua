/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { initialValueUseUser } from '@/utils/const'
import { validateCedula } from '@/utils/utils'
import { handleUser, updateApplicationStatus } from '@/services/users'
import { toast } from 'sonner'

const errorsInitialValue = {
  email: {
    message: 'El correo electrónico no es valido',
    isValid: true,
  },
  cedula: {
    message: 'La cédula no es valida',
    isValid: true,
  },
}

export function useUser({ email }) {
  const [profileData, setProfileData] = useState(initialValueUseUser)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingPostulationService, setIsLoadingPostulationService] =
    useState(false)
  const [isLoadingPostulationInternship, setIsLoadingPostulationInternship] =
    useState(false)
  const [error, setError] = useState(null)
  const [errors, setErrors] = useState(errorsInitialValue)

  const handleChange = e => {
    const { name, value } = e.target
    setProfileData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // Validaciones antes de enviar el formulario
    if (
      !profileData.names ||
      !profileData.lastnames ||
      !profileData.cedula ||
      !profileData.birthdate ||
      !profileData.phone ||
      !profileData.email ||
      !profileData.city ||
      !profileData.address ||
      !profileData.university ||
      !profileData.career
    )
      return setError('Todos los campos son obligatorios')

    const isCedulaValid = validateCedula(profileData.cedula)
    if (!isCedulaValid) {
      setErrors(prev => ({
        ...prev,
        cedula: {
          message: 'La cédula no es valida',
          isValid: false,
        },
      }))
    }

    // Si alguno de los error tiene true, hacer return

    try {
      setIsLoading(true)
      const response = await fetch(`http://localhost:3000/api/users/${email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      })

      if (!response.ok) {
        throw new Error('Failed to update user')
      }

      //   !!!
      if (response.ok) toast.success('Usuario actualizado correctamente')
      setError(null)
    } catch (error) {
      console.error('Failed to update user:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const sendToCommunityService = async () => {
    const isDataComplete = Object.values(profileData).every(
      value => value !== null && value !== ''
    )
    if (isDataComplete) {
      const formDataObj = new FormData()
      formDataObj.append('email', profileData.email)
      formDataObj.append('names', profileData.names)
      formDataObj.append('lastnames', profileData.lastnames)
      formDataObj.append('to', 'Servicio comunitario')

      try {
        setIsLoadingPostulationService(true)
        await updateApplicationStatus({
          email,
          profileData,
          applicant: 'communityServiceApplicant',
        })

        const result = await fetch('/api/send', {
          method: 'POST',
          body: formDataObj,
        })

        if (result.status === 200) {
          toast.success('Postulación enviada')
          setProfileData(prev => ({ ...prev, communityServiceApplicant: true }))
          return
        }

        if (result.status === 500) {
          return toast.error('Error al enviar la postulación')
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoadingPostulationService(false)
      }
    }

    return toast.error('Todos los datos son obligatorios')
  }

  const sendToInternshipService = async () => {
    const isDataComplete = Object.values(profileData).every(
      value => value !== null && value !== ''
    )
    if (isDataComplete) {
      const formDataObj = new FormData()
      formDataObj.append('email', profileData.email)
      formDataObj.append('names', profileData.names)
      formDataObj.append('lastnames', profileData.lastnames)
      formDataObj.append('to', 'Pasantía')

      try {
        setIsLoadingPostulationInternship(true)
        await updateApplicationStatus({
          email,
          profileData,
          applicant: 'internshipApplicant',
        })
        const result = await fetch('/api/send', {
          method: 'POST',
          body: formDataObj,
        })
        if (result.status === 200) {
          toast.success('Postulación enviada')
          setProfileData(prev => ({ ...prev, internshipApplicant: true }))
        }
        if (result.status === 500) {
          return toast.error('Error al enviar la postulación')
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoadingPostulationInternship(false)
      }
    }
    return toast.error('Todos los datos son obligatorios')
  }

  useEffect(() => {
    const abortController = new AbortController()
    const fetchProfileData = async () => {
      try {
        setIsLoading(true)
        const {
          data: {
            names_user,
            lastnames_user,
            cedula_user,
            birthdate_user,
            phone_user,
            email_user,
            city_user,
            address_user,
            university_user,
            career_user,
            internship_applicant_user,
            community_service_applicant_user,
          },
        } = await handleUser({ email })
        setProfileData({
          names: names_user || '',
          lastnames: lastnames_user || '',
          cedula: cedula_user || '',
          birthdate: birthdate_user || '',
          phone: phone_user || '',
          email: email_user || '',
          city: city_user || '',
          address: address_user || '',
          university: university_user || '',
          career: career_user || '',
          internshipApplicant: internship_applicant_user || false,
          communityServiceApplicant: community_service_applicant_user || false,
        })
      } catch (error) {
        console.error('Failed to fetch user data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (email) {
      fetchProfileData()
    }
    console.log(profileData)

    return () => abortController.abort()
  }, [email])

  return {
    profileData,
    handleChange,
    handleSubmit,
    isLoading,
    sendToCommunityService,
    sendToInternshipService,
    isLoadingPostulationService,
    isLoadingPostulationInternship,
    error,
    errors,
  }
}
