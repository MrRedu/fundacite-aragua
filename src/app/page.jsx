import { ENTES_ADSCRITOS, TABS_ABOUT } from '@/utils/const'
import { Section, Title, GoogleMapEmbed } from '@/components/atoms/ui/'
import {
  InfiniteScrollHorizontal,
  Tabs,
  Carousel,
} from '@/components/organisms/ui/'

const images = [
  '/fundacite-logotipo.webp',
  '/fundacite-logotipo.webp',
  '/fundacite-logotipo.webp',
  '/fundacite-logotipo.webp',
]

export default async function HomePage() {
  return (
    <>
      <Section notPadding>
        {/* <Section isDiv>
          <Title>{`HeroSection`}</Title>
        </Section> */}
        <Carousel images={images} />
      </Section>

      <Section id={'about'}>
        <Title>{`¿Quiénes somos?`}</Title>
        <Tabs items={TABS_ABOUT} />
      </Section>
      <Section id={'programs'}>
        <Title>{`Ejes de gestión`}</Title>
      </Section>
      <Section>
        <Title>{`Entes adscritas`}</Title>
        <InfiniteScrollHorizontal items={ENTES_ADSCRITOS} />
      </Section>
      <Section id={'postulations'}>
        <Title>{`Postulaciones`}</Title>
      </Section>
      <Section notPadding id={'contact'}>
        <Section isDiv>
          <Title>{`Contactos`}</Title>
        </Section>
        <GoogleMapEmbed />
      </Section>
    </>
  )
}
