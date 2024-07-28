'use client'
import useFormLogin from '@/hooks/useFormLogin'
import Link from 'next/link'
import {
  Button,
  EmailInput,
  Input,
  InputGroup,
  Label,
} from '@/components/atoms/ui'
import { Alert } from '@/components/molecules/ui'

export const FormLogin = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    //  handleReset,
    isLoading,
    error,
  } = useFormLogin()

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="email">{`Correo electrónico`}</Label>
        <EmailInput
          type="email"
          id="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="password">{`Contraseña`}</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
        />
      </InputGroup>
      {error && <Alert isDanger>{error}</Alert>}
      <div className="flex items-center justify-between">
        <div className="flex items-start ">
          <div className="flex items-center h-5 ">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer"
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300 cursor-pointer"
            >
              {`Recordarme`}
            </label>
          </div>
        </div>
        <Link
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 
                  cursor-not-allowed
                  "
        >
          {`¿Olvidaste tu contraseña?`}
        </Link>
      </div>
      <Button type="submit" isDisabled={isLoading} className="w-full">
        {isLoading ? 'Cargando...' : 'Iniciar sesión'}
      </Button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        {`¿Aún no tienes cuenta?`}
        {` `}
        <Link
          href="/register"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          {`¡Regístrate!`}
        </Link>
      </p>
    </form>
  )
}
