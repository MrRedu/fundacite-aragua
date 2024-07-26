import { ENTES_ADSCRITOS, TABS_ABOUT } from '@/utils/const'
import { Section, Title, GoogleMapEmbed } from '@/components/atoms/ui/'
import { InfiniteScrollHorizontal, Tabs } from '@/components/organisms/ui/'

export default async function HomePage() {
  return (
    <>
      <Section>
        <Title>{`HeroSection`}</Title>
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
