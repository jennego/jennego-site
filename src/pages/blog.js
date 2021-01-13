import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import moment from "moment"

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
          <div className="d-flex blog-post justify-content-between mx-auto">
            {node.featured_media.source_url ? (
              <img
                src={node.featured_media.source_url}
                className="blog-featured-img"
              />
            ) : (
              <div className="img-placeholder"></div>
            )}
            <div className="blog-title-container mx-auto">
              <h3>
                <span
                  className="blog-title"
                  dangerouslySetInnerHTML={{ __html: `${node.title}` }}
                ></span>
              </h3>
            </div>

            <p
              className="small blog-date"
              dangerouslySetInnerHTML={{
                __html: `${moment(node.date).format("MMMM Do, YYYY")}`,
              }}
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
