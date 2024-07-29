'use client'
import { useSession } from 'next-auth/react'
import { Button, Input, InputGroup, Label } from '../../atoms/ui'

export const ProfileSettings = () => {
  const { data: session } = useSession()

  return (
    <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
      {/* Título */}
      <div className="mb-4 col-span-full xl:mb-2">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
          {`Información de perfil`}
        </h2>
      </div>
      {/* <!-- Imagen de perfil --> */}
      <div className="col-span-full xl:col-auto">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
            {/* <img
                className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                src=""
                alt={`Imagen de perfil`}
              /> */}
            <div className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0 flex justify-center items-center bg-blue-600">
              <span className="text-xl font-semibold text-white dark:text-white">
                {session && session.user.names[0] + session.user.lastnames[0]}
              </span>
            </div>
            <div>
              <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                {`Imagen de perfil`}
              </h3>
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                {`JPG, GIF o PNG. Tamaño máximo de 800K`}
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  type="button"
                  className="inline-flex items-center"
                  isDisabled
                >
                  <svg
                    className="w-4 h-4 mr-2 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                  </svg>
                  <span>{`Actualizar imagen`}</span>
                </Button>
                <Button type="button" isDisabled isSecondary>
                  {`Eliminar`}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="flow-root">
            <h3 className="text-xl font-semibold dark:text-white">
              {`Postulaciones`}
            </h3>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 dark:text-white"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-base font-semibold text-gray-900 truncate dark:text-white">
                      {`Pasantía`}
                    </span>
                    <span className="block text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      {`Postulado`}
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <a
                      href="#"
                      className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Disconnect
                    </a>
                  </div>
                </div>
              </li>

              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 dark:text-white"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="github"
                      role="img"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-base font-semibold text-gray-900 truncate dark:text-white">
                      {`Servicio comunitario`}
                    </span>
                    <span className="block text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                      {`Sin postular`}
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <a
                      href="#"
                      className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      {`Postularme`}
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Información general */}
      <div className="col-span-2">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <h3 className="mb-4 text-xl font-semibold dark:text-white">
            {`Información general`}
          </h3>
          <form>
            <div className="grid grid-cols-6 gap-6">
              <InputGroup className="col-span-6 sm:col-span-3">
                <Label htmlFor="names" isRequired>
                  {`Nombres`}
                </Label>
                <Input
                  type="text"
                  name="names"
                  id="names"
                  placeholder="ACOMODAR"
                  isRequired
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
                  placeholder="ACOMODAR"
                  isRequired
                />
              </InputGroup>
              <InputGroup className="col-span-6 sm:col-span-3">
                <Label htmlFor="state">{`Estado`}</Label>
                <Input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Aragua"
                />
              </InputGroup>
              <InputGroup className="col-span-6 sm:col-span-3">
                <Label htmlFor="city">{`Ciudad`}</Label>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Maracay"
                />
              </InputGroup>
              <InputGroup className="col-span-6 sm:col-span-3">
                <Label htmlFor="address">{`Dirección`}</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Calle #5, Urb. Los Caballeros, 2101"
                />
              </InputGroup>
              <InputGroup className="col-span-6 sm:col-span-3">
                <Label htmlFor="email">{`Correo electrónico`}</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="tu@correo.com"
                  required
                />
              </InputGroup>
              <InputGroup className="col-span-6 sm:col-span-3">
                <Label htmlFor="phone">{`Número de teléfono`}</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="0414 123 45 67"
                  required
                />
              </InputGroup>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="birthday"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span className="text-red-600">Birthday</span>
                </label>
                <input
                  type="number"
                  name="birthday"
                  id="birthday"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="15/08/1990"
                  required
                />
              </div>
              <InputGroup className="col-span-6 sm:col-span-3">
                <Label htmlFor="institution">{`Institución`}</Label>
                <Input
                  type="text"
                  name="institution"
                  id="institution"
                  placeholder="Universidad Principal de Venezuela"
                />
              </InputGroup>
              <InputGroup className="col-span-6 sm:col-span-3">
                <Label htmlFor="career">{`Carrera universitaria`}</Label>
                <Input
                  type="text"
                  name="career"
                  id="career"
                  placeholder="Ingeniería de Software"
                  required
                />
              </InputGroup>
              {/* <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="department"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Development"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="zip-code"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Zip/postal code
                </label>
                <input
                  type="number"
                  name="zip-code"
                  id="zip-code"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="123456"
                  required
                />
              </div> */}
              <div className="col-span-6 sm:col-full">
                <Button type="submit" isDisabled>{`Actualizar`}</Button>
              </div>
            </div>
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
                  Confirm password
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
