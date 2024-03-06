import propTypes from 'prop-types'
import { Footer, Header } from '@/components/organisms/ui'
import { ScrollToTop } from '@/components/atoms/ui/scroll-to-top/ScrollToTop'
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
Layout.propTypes = {
  children: propTypes.node,
}
