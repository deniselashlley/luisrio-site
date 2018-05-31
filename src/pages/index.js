import React from 'react'

const Index = () => (
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

export default Index
