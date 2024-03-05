import { Section } from '@/components/atoms/ui'
import { Accordion, Header, Footer } from '@/components/organisms/ui/'
// import { XTimelineEmbed } from '@/components/atoms/ui/embed/XTimelineEmbed'
import { GoogleMapEmbed } from '@/components/atoms/ui/embed/GoogleMapEmbed'

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Accordion />
      </Section>
      {/* <Section>
        <XTimelineEmbed userId={'143858083'} />
      </Section> */}
      <Section>
        <GoogleMapEmbed />
      </Section>
      <Footer />
    </>
  )
}
