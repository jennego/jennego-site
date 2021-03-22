import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="hero">
        <StaticImage
          alt="hi"
          src="../images/backyardsky.jpg"
          placeholder="blurred"
          className="index-image-wrapper"
          imgClassName="index-image"
        />
        <div className="overlay">
          <div className="container hero-text">
            <h1 className="display-1">Jennego</h1>
            <h2>Photography. Writing. Web Experiments. And other things!</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
