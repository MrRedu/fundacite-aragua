import { Section, GoogleMapEmbed } from '@/components/atoms/ui'
import { Accordion } from '@/components/organisms/ui/'
import { Layout } from './layout'

export const App = () => {
  return (
    <Layout>
      <Section>
        <Accordion />
      </Section>
      <Section>
        <GoogleMapEmbed />
      </Section>
    </Layout>
  )
}
