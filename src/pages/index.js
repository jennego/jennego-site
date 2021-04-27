import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { GatsbyImage, Sta } from "gatsby-plugin-image"
import backyardsky from "../images/backyardsky.jpg"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "backyardsky" }) {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO], width: 1200)
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />

      <div className="hero">
        <GatsbyImage
          imgClassName="index-img"
          className="index-image-wrapper"
          alt="starry sky"
          layout="full-width"
          image={data.file.childImageSharp.gatsbyImageData}
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
