import Image from 'next/image'

export const About = () => {
  return (
    <>
      <h4 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{`Fundacite siembra de ciencia, tecnología e innovación.`}</h4>
      <div className="flex flex-col xl:flex-row gap-8 mb-6">
        <Image
          src={'/robot.webp'}
          alt={
            'Robot perteneciente al Núcleo de Robótica Educativa “Dr. Clemente Herrera” inaugurado por Fundacite Aragua'
          }
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-lg"
          loading="lazy"
        />
        <div className="w-full flex flex-col justify-center">
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {`La Fundación para el desarrollo de la ciencia y la tecnología (FUNDACITE) Aragua, es una institución pública encargada de planificar, promover y coordinar el sistema de desarrollo científico-tecnológico en el estado Aragua.`}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {`El Ministerio del Poder Popular para Ciencia, Tecnología e Innovación mantiene su presencia en el estado Aragua, a través de su Unidad Territorial representada por la Fundación para el Desarrollo de la Ciencia y la Tecnología en el estado Aragua (Fundacite Aragua).`}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {`De esta manera se propicia la construcción de espacios favorables para
            el encuentro entre el saber del pueblo y la investigación, el
            conocimiento científico – tecnológico a través de acciones articuladas
            con distintos actores, para la apropiación social en las comunidades.
            A través de Fundacite Aragua se desarrollan diversos programas y
            proyectos en toda la entidad, orientados a fortalecer el Sistema
            Nacional de Ciencia, Tecnología e Innovación, con la misión de hacer
            posible un nuevo Modelo Productivo Socialista.`}
          </p>
        </div>
      </div>
    </>
  )
}
