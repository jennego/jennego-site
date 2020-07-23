import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "backyardsky" }) {
        name
        childImageSharp {
          fluid {
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
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <div style={{ maxWidth: "800px" }}>
        <Img className="img-fluid" fluid={data.file.childImageSharp.fluid} />
      </div>
      <h2>Fixed</h2>
      <Img fixed={data.file.childImageSharp.fixed} />
    </Layout>
  )
}

export default SecondPage
