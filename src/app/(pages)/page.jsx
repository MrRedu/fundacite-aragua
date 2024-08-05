import { ENTES_ADSCRITOS, IMAGES_TO_CAROUSEL, TABS_ABOUT } from '@/utils/const'
import {
  Section,
  Title,
  GoogleMapEmbed,
  BackToTopButton,
} from '@/components/atoms/ui/'
import { About } from '@/components/molecules/ui'
import {
  InfiniteScrollHorizontal,
  Tabs,
  Carousel,
  CallToAction,
  ManagementAxes,
} from '@/components/organisms/ui/'

export default async function HomePage() {
  return (
    <>
      <Section notPadding>
        <Carousel images={IMAGES_TO_CAROUSEL} />
      </Section>
      <Section id={'about'}>
        <Title>{`¿Quiénes somos?`}</Title>
        <About />
        <Tabs items={TABS_ABOUT} />
      </Section>
      <Section id={'programs'}>
        <Title>{`Ejes de gestión`}</Title>
        <ManagementAxes />
      </Section>
      <Section notPadding className="pb-12">
        <Section isDiv>
          <Title>{`Entes adscritos`}</Title>
        </Section>
        <InfiniteScrollHorizontal items={ENTES_ADSCRITOS} />
      </Section>
      <Section id={'postulations'}>
        <CallToAction />
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
