import { Section } from '@/components/atoms/ui/Section'

export default function HomePage() {
  return (
    <>
      <Section>
        <p>BANNER</p>
      </Section>
      <Section id={'about'}>
        <p>¿Quiénes somos?</p>
      </Section>
      <Section id={'programs'}>
        <p>Programas</p>
      </Section>
      <Section>
        <p>Entes adscritas</p>
      </Section>
      <Section id={'postulations'}>
        <p>Postulaciones</p>
      </Section>
      <Section notPadding id={'contact'}>
        <Section isDiv>
          <p>Contactos</p>
        </Section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.097771814699!2d-67.59807548993697!3d10.253698068576766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e803c9fe37f2a07%3A0x9f48fe709c9ff836!2sFundacite%20Aragua!5e0!3m2!1ses!2sve!4v1721854489811!5m2!1ses!2sve"
          width="800"
          height="600"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-96"
        ></iframe>
      </Section>
    </>
  )
}
