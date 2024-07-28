import { Section } from '@/components/atoms/ui'

export default function CommunityServicePage() {
  return (
    <Section>
      <h2>{`</CommunityServicePage>`}</h2>
      <p>
        Recuerde verificar los datos antes de enviarlos{' '}
        {`<- Mensaje para el usuario`}
      </p>
      <p>Este formulario lo que hará es:</p>
      <p>Tomar los datos que estén en la base de datos</p>
      <p>En caso de no existir, el formulario estará vacío</p>
      <p>Procedes a llenarlo, y este mismo actualizará los datos en</p>
      <p>La bases de datos UPDATE y enviaría esa información al correo</p>
    </Section>
  )
}
