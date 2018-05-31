import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header';
import Footer from '../components/footer';
import Contact from '../components/contact';
import '../sass/style.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Luis Rio - nature specialist' },
        { name: 'keywords', content: 'Luis Rio, jardim, rega, manutenção, piscinas' },
      ]}
      link = {[{ rel: 'shortcut icon', type: 'image/x-icon', href:'/favicon.ico' },
    {
        rel: "stylesheet",
        href: "./public/styles.css"
    }]}
    />
    <main role="main">
      <Header />
      <Contact />
      <Footer />
    </main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
