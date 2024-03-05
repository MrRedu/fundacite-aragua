import { Sector } from '@/components/atoms/ui'
import { Accordion, Header, Footer } from '@/components/organisms/ui/'

export const App = () => {
  return (
    <>
      <Header />
      <Sector>
        <Accordion />
      </Sector>
      <Footer />
    </>
  )
}
