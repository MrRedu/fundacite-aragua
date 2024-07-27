'use client'
import useFormPostulation from '@/hooks/useFormPostulation'
import {
  InputGroup,
  Input,
  Label,
  PhoneInput,
  Textarea,
  EmailInput,
} from '@/components/atoms/ui'

export const FormPostulation = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    // handleReset,
    isLoading,
  } = useFormPostulation()

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[600px]">
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
        <EmailInput
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
        <PhoneInput
          id="phone"
          name="phone"
          value={formData.phone}
          placeholder="0414 123 45 67"
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="message">{`Mensaje`}</Label>
        <Textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          placeholder="Mensaje"
          onChange={handleChange}
        />
      </InputGroup>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300"
      >
        {`Enviar`}
      </button>
    </form>
  )
}
