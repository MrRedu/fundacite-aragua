'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Section } from '@/components/atoms/ui'
import { Card } from '@/components/molecules/ui/'
import Image from 'next/image'
import { BENEFITS_LIST_PASANTIA, BENEFITS_LIST_SERVICIO } from '@/utils/const'

export default function PostulationPage() {
  const { data: session } = useSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <Section>
      <Image
        src="/fundacite-logotipo.webp"
        alt="Logotipo de Fundacite"
        width={360}
        height={300}
        className="w-auto h-auto mb-6"
        priority
        quality={100}
      />
      <div className="mb-8 flex flex-col gap-2">
        <p>
          {`Fundacite Aragua ofrece oportunidades para que estudiantes y graduandos realicen pasantías o servicio comunitario en el área de la tecnología. Esta entidad se dedica a la capacitación en el uso de tecnologías libres, promoviendo el desarrollo de competencias técnicas y el fortalecimiento del talento humano. A través de sus programas, Fundacite busca consolidar la generación de conocimiento y fomentar la creatividad e innovación en las comunidades. Además, proporciona espacios de integración donde se llevan a cabo actividades científicas y tecnológicas, lo que permite a los participantes aplicar sus conocimientos en un entorno práctico y contribuir al desarrollo productivo de la región.`}
        </p>
        <p>{`Esta oportunidad es ideal para aquellos interesados en adquirir experiencia en el campo tecnológico y en participar activamente en proyectos que benefician a la comunidad.`}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <Card
          title="Pasantías"
          buttonText="¡Postularme!"
          isLink
          href="/postulation/internship"
        >
          <div className="mb-6">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {`Las pasantías están diseñadas para proporcionar a los estudiantes experiencia práctica en su campo de estudio, permitiéndoles aplicar los conocimientos adquiridos en un entorno profesional real.`}
            </p>
            <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {`Beneficios de hacer pasantía en FUNDACITE`}
            </h6>
            <ul className="list-disc list-inside">
              {BENEFITS_LIST_PASANTIA.map(benefit => (
                <li
                  key={benefit}
                  className="mb-1 font-normal text-gray-700 dark:text-gray-400"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </Card>
        <Card
          title="Servicio comunitario"
          buttonText="¡Postularme!"
          isLink
          href="/postulation/community-service"
        >
          <div className="mb-6">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {`El servicio comunitario está orientado a contribuir al bienestar de la comunidad. Los estudiantes aplican sus conocimientos en proyectos que benefician a grupos o comunidades vulnerables.`}
            </p>
            <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {`Beneficios de hacer servicio comunitario en FUNDACITE`}
            </h6>
            <ul className="list-disc list-inside">
              {BENEFITS_LIST_SERVICIO.map(benefit => (
                <li
                  key={benefit}
                  className="mb-1 font-normal text-gray-700 dark:text-gray-400"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </Section>
  )
}
