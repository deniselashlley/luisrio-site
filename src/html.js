import React, { Component } from "react"
import * as PropTypes from "prop-types"

let stylesStr
const buildDirectory = process.env.GATSBY_BUILD_DIR || `public`
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../styles.css`)
    console.log(stylesStr)
  } catch (e) {
    console.log(e)
  }
}

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
}

class Html extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html op="news" lang="en">
        <head>
          {this.props.headComponents}

          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Luis Rio, jardim, rega, manutenção, piscinas"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

Html.propTypes = propTypes

module.exports = Html
