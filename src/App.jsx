import { Section, GoogleMapEmbed } from '@/components/atoms/ui'
import { Accordion, Slider } from '@/components/organisms/ui/'
import { Layout } from './layout'

export const App = () => {
  return (
    <Layout>
      <Slider />
      <Section>
        <Accordion />
      </Section>
      <Section>
        <GoogleMapEmbed />
      </Section>
    </Layout>
  )
}
