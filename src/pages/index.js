import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "backyardsky" }) {
        name
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
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
        <BackgroundImage fluid={data.file.childImageSharp.fluid}>
          <div className="overlay">
            <div className="container hero-text">
              <h1 className="display-1">Jennego</h1>
              <h2>Photography. Writing. Web Experiments. And other things!</h2>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </Layout>
  )
}

export default IndexPage
