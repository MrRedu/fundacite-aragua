import {
  InputGroup,
  Label,
  Input,
  PhoneInput,
  EmailInput,
} from '@/components/atoms/ui'

export const FormRegister = () => {
  return (
    <form action="">
      <InputGroup>
        <Label htmlFor="name">{`Nombre completo`}</Label>
        <div className="grid grid-cols-2 gap-4">
          <Input type="text" id="name" name="name" placeholder="Nombres" />
          <Input
            type="text"
            id="lastnames"
            name="lastnames"
            placeholder="Apellidos"
          />
        </div>
      </InputGroup>
      <InputGroup>
        <Label htmlFor="email">{`Correo electrónico`}</Label>
        <EmailInput
          type="email"
          id="email"
          name="email"
          placeholder="tu@correo.com"
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="phone">{`Número de teléfono`}</Label>
        <PhoneInput
          type="tel"
          id="phone"
          name="phone"
          placeholder="0414 123 45 67"
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="address">{`Dirección`}</Label>
        <Input
          type="text"
          id="address"
          name="address"
          placeholder="Calle 123, Av. Principal"
        />
      </InputGroup>

      <button type="submit" className="bg-blue-500 text-white">
        Registrar
      </button>
    </form>
  )
}
