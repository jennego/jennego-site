import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const WritingPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulWriting {
        edges {
          node {
            title
            date
            publication
            slug
          }
        }
      }
    }
  `)

  let articles = data.allContentfulWriting.edges

  return (
    <Layout>
      <div className="container-fluid">
        <h1 className="display-2">Writing</h1>
        {console.log(articles)}
        {articles.map(({ node }) => (
          <li>{node.title}</li>
        ))}

        {console.log(data)}
      </div>
    </Layout>
  )
}

export default WritingPage
