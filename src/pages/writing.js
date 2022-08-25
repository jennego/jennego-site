import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const WritingPage = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulAboutPage {
        id
        title
        singleImage {
          gatsbyImageData
        }
        singleImage2 {
          gatsbyImageData
        }
        body {
          raw
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="container-fluid">
        <h1 className="display-2">Writing</h1>
      </div>
    </Layout>
  )
}

export default WritingPage
