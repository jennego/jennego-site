import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="jumbotron jumbotron-fluid hero">
      <div className="container">
        <h1 className="display-4">Jennego</h1>
        <p> This is my hobby site. Eventually full screen video overlay? </p>
      </div>
    </div>
    <div className="container">
      <p> Hi this is my hobby site! </p>
      <p> Need a pull out sidebar or toggle menu button</p>
      <p> Dark dark purple theme </p>
      <p> Prismic for CMS? </p>
      <p> WP for blog?</p>
      <p> Use Sass? </p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </div>
  </Layout>
)

export default IndexPage
