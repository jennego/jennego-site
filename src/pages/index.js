import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { GatsbyImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`{
  file(name: {eq: "backyardsky"}) {
    name
    childImageSharp {
      gatsbyImageData(quality: 90, layout: FULL_WIDTH)
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="hero">
        <BackgroundImage fluid={data.file.childImageSharp.gatsbyImageData}>
          <div className="overlay">
            <div className="container hero-text">
              <h1 className="display-1">Jennego</h1>
              <h2>Photography. Writing. Web Experiments. And other things!</h2>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </Layout>
  );
}

export default IndexPage
