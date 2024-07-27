import propTypes from 'prop-types'
import { Footer, Header } from '@/components/organisms/ui'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: propTypes.node,
}
