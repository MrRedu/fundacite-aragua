import { ENTES_ADSCRITOS, IMAGES_TO_CAROUSEL, TABS_ABOUT } from '@/utils/const'
import {
  Section,
  Title,
  GoogleMapEmbed,
  BackToTopButton,
} from '@/components/atoms/ui/'
import {
  InfiniteScrollHorizontal,
  Tabs,
  Carousel,
} from '@/components/organisms/ui/'

export default async function HomePage() {
  return (
    <>
      <Section notPadding>
        <Carousel images={IMAGES_TO_CAROUSEL} />
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
      <BackToTopButton />
    </>
  )
}
