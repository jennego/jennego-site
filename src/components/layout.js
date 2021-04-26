/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Footer from "../components/footer"

import Header from "./header"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/styles.scss"
import Nav from "../components/menu"

const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="outer-container">
      <Nav />
      <div id="page-wrap">
        <SEO title={title} />
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
