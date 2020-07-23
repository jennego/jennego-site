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
              <h1 className="display-4">Jennego</h1>
              {console.log(process.env.accessToken)}
              <p>
                {" "}
                This is my hobby site. Eventually full screen video overlay?{" "}
              </p>
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
        </BackgroundImage>
      </div>
    </Layout>
  )
}

export default IndexPage
