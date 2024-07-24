'use client'
import useFormPostulation from '@/hooks/useFormPostulation'
import { InputGroup, Input, Label } from '@/components/atoms/ui'

export const FormPostulation = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    // handleReset,
    isLoading,
  } = useFormPostulation()

  return (
    <>
      <h2>{`</FormPostulation>`}</h2>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">{`Nombres`}</Label>
          <Input
            type="text"
            id="names"
            name="names"
            value={formData.names}
            placeholder="Nombres"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="lastnames">{`Apellidos`}</Label>
          <Input
            type="text"
            id="lastnames"
            name="lastnames"
            value={formData.lastnames}
            placeholder="Apellidos"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">{`Correo electrónico`}</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="phone">{`Número de teléfono`}</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            placeholder="Número de teléfono"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="message">{`Mensaje`}</Label>
          <Input
            type="text"
            id="message"
            name="message"
            value={formData.message}
            placeholder="Mensaje"
            onChange={handleChange}
          />
        </InputGroup>
        <button type="submit" onClick={handleSubmit} disabled={isLoading}>
          {`Enviar`}
        </button>
      </form>
    </>
  )
}
