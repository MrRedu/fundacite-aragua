import Image from 'next/image'
import Link from 'next/link'

export const CallToAction = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-8 items-center mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 ">
        <Image
          className="w-full"
          src="/students-image-cta-image.webp"
          alt="Pasantes de Fundacite reunidos"
          width={500}
          height={500}
          loading="lazy"
        />
        <div className="mt-4 md:mt-0">
          <h4 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{`Transforma tu futuro: Únete a nuestras pasantías y marca la diferencia`}</h4>
          <p className="font-light text-gray-500 md:text-lg dark:text-gray-400">
            {`En Fundacite Aragua, te invitamos a postularte para nuestras pasantías y programas de servicio comunitario. `}
          </p>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{`Esta es tu oportunidad para adquirir experiencia práctica, aprender de expertos y contribuir al desarrollo de nuestra comunidad.`}</p>
          <Link
            href="/postulation"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            {`¡Postularme!`}
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
