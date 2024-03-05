import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { Sector } from '@/components/atoms/ui'
import { Accordion, Header, Footer } from '@/components/organisms/ui/'

export const App = () => {
  return (
    <>
      <Header />
      <Sector>
        <Accordion />
      </Sector>
      <Sector>
        <TwitterTimelineEmbed
          sourceType="profile"
          // userId={'143858083'}
          screenName={'FundaciteAragua'}
          options={{ width: '400px', height: '500px' }}
          lang="es"
        />
      </Sector>
      <Footer />
    </>
  )
}
