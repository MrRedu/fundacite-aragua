import { Section } from '@/components/atoms/ui'
import { Accordion, Header, Footer } from '@/components/organisms/ui/'
import { GoogleMapEmbed } from '@/components/atoms/ui/embed/GoogleMapEmbed'

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Accordion />
      </Section>
      <Section>
        <GoogleMapEmbed />
      </Section>
      <Footer />
    </>
  )
}
