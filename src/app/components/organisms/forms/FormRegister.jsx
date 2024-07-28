'use client'
import useFormRegister from '@/hooks/useFormRegister'
import {
  InputGroup,
  Label,
  Input,
  EmailInput,
  Button,
} from '@/components/atoms/ui'
import { Alert } from '@/components/molecules/ui'

export const FormRegister = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    // handleReset,
    isLoading,
    error,
  } = useFormRegister()

  return (
    <form action="" onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="names" isRequired>{`Nombre completo`}</Label>
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            id="names"
            name="names"
            placeholder="Nombres"
            onChange={handleChange}
            value={formData.names}
            isRequired
          />
          <Input
            type="text"
            id="lastnames"
            name="lastnames"
            placeholder="Apellidos"
            onChange={handleChange}
            value={formData.lastnames}
            isRequired
          />
        </div>
      </InputGroup>
      <InputGroup>
        <Label htmlFor="email" isRequired>{`Correo electrónico`}</Label>
        <EmailInput
          type="email"
          id="email"
          name="email"
          placeholder="tu@correo.com"
          onChange={handleChange}
          value={formData.email}
          isRequired
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="password" isRequired>{`Contraseña`}</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="********"
          onChange={handleChange}
          value={formData.password}
          isRequired
        />
      </InputGroup>
      <InputGroup>
        <Label
          htmlFor="password_confirmation"
          isRequired
        >{`Confirmar contraseña`}</Label>
        <Input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          placeholder="********"
          isRequired
        />
      </InputGroup>
      {error && <Alert isDanger>{error}</Alert>}

      <Button type="submit" isDisabled={isLoading} className="w-full">
        {isLoading ? 'Cargando...' : 'Registrarse'}
      </Button>
    </form>
  )
}
