import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SocialMedia from "../components/socialmedia"

const AboutPage = () => {
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
        <h1 className="display-2">{data.contentfulAboutPage.title}</h1>
        <div className="image-float-right">
          <GatsbyImage
            image={data.contentfulAboutPage.singleImage.gatsbyImageData}
          />
        </div>
        <div className="image-float-right">
          <GatsbyImage
            image={data.contentfulAboutPage.singleImage2.gatsbyImageData}
          />
        </div>
        {documentToReactComponents(
          JSON.parse(data.contentfulAboutPage.body.raw)
        )}
      </div>
      <SocialMedia></SocialMedia>
    </Layout>
  )
}

export default AboutPage
