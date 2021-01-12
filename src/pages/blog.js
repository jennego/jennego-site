import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressPost(sort: { order: DESC, fields: date }) {
        edges {
          node {
            id
            title
            date
            slug
            excerpt
            wordpress_id
            featured_media {
              caption
              alt_text
              source_url
              title
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="container">
        <h1>Jennego: The Oft-Forgotten Blog</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div className="d-flex blog-post justify-content-between">
            {node.featured_media.source_url ? (
              <img
                src={node.featured_media.source_url}
                className="blog-featured-img"
              />
            ) : (
              <div className="img-placeholder"></div>
            )}
            <h3
              className="blog-title align-self-center"
              dangerouslySetInnerHTML={{ __html: `${node.title}` }}
            />
            <p
              className="small flex-end"
              dangerouslySetInnerHTML={{ __html: `${node.date}` }}
            />
            {/* 
          <p dangerouslySetInnerHTML={{ __html: `${node.excerpt}` }} /> */}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default BlogIndex
