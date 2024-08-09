import Image from 'next/image'

export const PostulationUserCard = () => {
  return (
    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <div className="flow-root">
        <h3 className="text-xl font-semibold dark:text-white">
          {`Postulaciones`}
        </h3>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src="/graduation.svg"
                  alt="Pasantías"
                  className="w-10 h-10"
                  width={40}
                  height={40}
                />
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
                  Postulado
                </a>
              </div>
            </div>
          </li>

          <li className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src="/hand-holding-heart.svg"
                  alt="Servicio comunitario"
                  className="w-10 h-10"
                  width={40}
                  height={40}
                />
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
  )
}
