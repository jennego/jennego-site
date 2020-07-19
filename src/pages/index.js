import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Nav from "../components/menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero">
      <div className="overlay">
        <div className="container">
          <h1 className="display-4">Jennego</h1>
          <p> This is my hobby site. Eventually full screen video overlay? </p>
          <br></br>
          <p> Need a pull out sidebar or toggle menu button</p>
          <p> Dark dark purple theme </p>
          <p> WP for blog?</p>
          <p> Use Sass </p>
          <p> Contentful </p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
