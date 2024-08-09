import propTypes from 'prop-types'
import { Button } from '@/components/atoms/ui'

export const ImageUserCard = ({ name, lastname }) => {
  return (
    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
        {/* <img
          className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
          src=""
          alt={`Imagen de perfil`}
        /> */}
        <div className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0 flex justify-center items-center bg-blue-600">
          <span className="text-xl font-semibold text-white dark:text-white">
            {name && lastname ? name[0] + lastname[0] : ''}
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
  )
}

export default ImageUserCard

ImageUserCard.propTypes = {
  name: propTypes.string,
  lastname: propTypes.string,
}
