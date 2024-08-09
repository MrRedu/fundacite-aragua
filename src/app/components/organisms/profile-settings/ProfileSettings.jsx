'use client'
import propTypes from 'prop-types'
import { Button, Input, InputGroup, Label } from '@/components/atoms/ui'
import { Alert } from '@/components/molecules/ui'
import { ImageUserCard } from './ImageUserCard'
import { PostulationUserCard } from './PostulationUserCard'

export const ProfileSettings = ({
  session,
  profileData,
  handleChange,
  handleSubmit,
  isLoading,
  error,
}) => {
  return (
    <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
      {/* Título */}
      <div className="mb-4 col-span-full xl:mb-2">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
          {`Información de perfil`}
        </h2>
      </div>
      {/* <!-- Imagen and postulation cards --> */}
      <div className="col-span-full xl:col-auto">
        <ImageUserCard
          name={session?.user?.names}
          lastname={session?.user?.lastnames}
        />
        <PostulationUserCard />
      </div>
      {/* Información general */}
      <div className="col-span-2">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <h3 className="mb-4 text-xl font-semibold dark:text-white">
            {`Información general`}
          </h3>
          <form className="grid grid-cols-6 gap-6">
            <InputGroup className="col-span-6 sm:col-span-3">
              <Label htmlFor="names" isRequired>
                {`Nombres`}
              </Label>
              <Input
                type="text"
                name="names"
                id="names"
                placeholder="Ambos nombres"
                isRequired
                onChange={handleChange}
                value={profileData.names}
              />
            </InputGroup>
            <InputGroup className="col-span-6 sm:col-span-3">
              <Label htmlFor="lastnames" isRequired>
                {`Apellidos`}
              </Label>
              <Input
                type="text"
                name="lastnames"
                id="lastnames"
                placeholder="Ambos apellidos"
                isRequired
                onChange={handleChange}
                value={profileData.lastnames}
              />
            </InputGroup>
            <InputGroup className="col-span-6 sm:col-span-3">
              <Label htmlFor="cedula" isRequired>{`Cédula de identidad`}</Label>
              <Input
                type="number"
                name="cedula"
                id="cedula"
                placeholder="V-12.345.678"
                onChange={handleChange}
                value={profileData.cedula}
                isRequired
              />
            </InputGroup>
            <InputGroup className="col-span-6 sm:col-span-3">
              <Label
                htmlFor="birthdate"
                isRequired
              >{`Fecha de nacimiento`}</Label>
              <Input
                type="date"
                name="birthdate"
                id="birthdate"
                onChange={handleChange}
                value={profileData.birthdate}
                isRequired
              />
            </InputGroup>

            <InputGroup className="col-span-6 sm:col-span-3">
              <Label htmlFor="phone" isRequired>{`Número de teléfono`}</Label>
              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder="0414 123 45 67"
                onChange={handleChange}
                value={profileData.phone}
                isRequired
              />
            </InputGroup>
            <InputGroup className="col-span-6 sm:col-span-3">
              <Label htmlFor="email" isRequired>{`Correo electrónico`}</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="tu@correo.com"
                value={profileData.email}
                readOnly
              />
            </InputGroup>
            <InputGroup className="col-span-6 sm:col-span-3">
              <Label htmlFor="city" isRequired>{`Ciudad`}</Label>
              <Input
                type="text"
                name="city"
                id="city"
                placeholder="Maracay"
                onChange={handleChange}
                value={profileData.city}
                isRequired
              />
            </InputGroup>
            <InputGroup className="col-span-6 sm:col-span-3">
              <Label htmlFor="address" isRequired>{`Dirección`}</Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="Calle #5, Urb. Los Caballeros, 2101"
                onChange={handleChange}
                value={profileData.address}
                isRequired
              />
            </InputGroup>
            <InputGroup className="col-span-6 sm:col-span-3">
              <Label htmlFor="university" isRequired>{`Universidad`}</Label>
              <Input
                type="text"
                name="university"
                id="university"
                placeholder="Universidad Principal de Venezuela"
                onChange={handleChange}
                value={profileData.university}
                isRequired
              />
            </InputGroup>
            <InputGroup className="col-span-6 sm:col-span-3">
              <Label
                htmlFor="career"
                isRequired
              >{`Carrera universitaria`}</Label>
              <Input
                type="text"
                name="career"
                id="career"
                placeholder="Ingeniería de Software"
                onChange={handleChange}
                value={profileData.career}
                isRequired
              />
            </InputGroup>
            <div className="col-span-6 sm:col-full">
              <Button
                type="submit"
                onClick={handleSubmit}
                isDisabled={isLoading}
                isLoading={isLoading}
              >
                {isLoading ? 'Cargando...' : 'Actualizar'}
              </Button>
            </div>
            {error && (
              <div className="col-span-6 sm:col-full">
                <Alert isDanger>{error}</Alert>
              </div>
            )}
          </form>
        </div>
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <h3 className="mb-4 text-xl font-semibold dark:text-white">
            {`Actualizar contraseña`}
          </h3>
          <form>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="current-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {`Contraseña actual`}
                </label>
                <input
                  type="text"
                  name="current-password"
                  id="current-password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {`Nueva contraseña`}
                </label>
                <input
                  data-popover-target="popover-password"
                  data-popover-placement="bottom"
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
                <div
                  data-popover
                  id="popover-password"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                >
                  <div className="p-3 space-y-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Must have at least 6 characters
                    </h3>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                      <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                      <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                      <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                    </div>
                    <p>It’s better to have:</p>
                    <ul>
                      <li className="flex items-center mb-1">
                        <svg
                          className="w-4 h-4 mr-2 text-green-400 dark:text-green-500"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Upper & lower case letters
                      </li>
                      <li className="flex items-center mb-1">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        A symbol (#$&)
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        A longer password (min. 12 chars.)
                      </li>
                    </ul>
                  </div>
                  <div data-popper-arrow></div>
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {`Confirmar contraseña`}
                </label>
                <input
                  type="text"
                  name="confirm-password"
                  id="confirm-password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-full">
                <button
                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="submit"
                >
                  Save all
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

ProfileSettings.propTypes = {
  session: propTypes.object,
  profileData: propTypes.object,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  handleReset: propTypes.func,
  isLoading: propTypes.bool,
  error: propTypes.string,
}
