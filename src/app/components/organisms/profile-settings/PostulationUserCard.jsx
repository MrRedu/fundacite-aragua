import propTypes from 'prop-types'
import Image from 'next/image'
import { Button } from '@/components/atoms/ui'

export const PostulationUserCard = ({
  sendToCommunityService,
  sendToInternshipService,
  isLoadingPostulationService,
  isLoadingPostulationInternship,
  internshipApplicant,
  communityServiceApplicant,
}) => {
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
                {internshipApplicant ? (
                  <Button isDisabled isSecondary>
                    {`Postulado`}
                  </Button>
                ) : (
                  <Button
                    isLoading={isLoadingPostulationInternship}
                    isDisabled={isLoadingPostulationInternship}
                    onClick={sendToInternshipService}
                  >
                    {isLoadingPostulationInternship
                      ? `Cargando...`
                      : `Postularme`}
                  </Button>
                )}
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
                {communityServiceApplicant ? (
                  <Button isDisabled isSecondary>
                    {`Postulado`}
                  </Button>
                ) : (
                  <Button
                    isLoading={isLoadingPostulationService}
                    isDisabled={isLoadingPostulationService}
                    onClick={sendToCommunityService}
                  >
                    {isLoadingPostulationService ? `Cargando...` : `Postularme`}
                  </Button>
                )}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

PostulationUserCard.propTypes = {
  sendToCommunityService: propTypes.func,
  sendToInternshipService: propTypes.func,
  internshipApplicant: propTypes.bool,
  communityServiceApplicant: propTypes.bool,
  isLoadingPostulationService: propTypes.bool,
  isLoadingPostulationInternship: propTypes.bool,
}
