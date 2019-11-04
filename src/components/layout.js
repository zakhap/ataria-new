/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import {ParallaxProvider} from "react-scroll-parallax"

const Layout = ({ children }) => {

  return (
    <>
    <ParallaxProvider>
        <Header />
        <div>
            <main>{children}</main>
        </div>
    </ParallaxProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
