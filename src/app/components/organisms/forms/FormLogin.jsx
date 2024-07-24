'use client'
import useFormLogin from '@/hooks/useFormLogin'
import { Input, InputGroup, Label } from '@/components/atoms/ui'

export const FormLogin = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    //  handleReset,
    isLoading,
  } = useFormLogin()

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="password">Contraseña</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />
      </InputGroup>
      <button type="submit" onClick={handleSubmit} disabled={isLoading}>
        Iniciar sesión
      </button>
    </form>
  )
}
