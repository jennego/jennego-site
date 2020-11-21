import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

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
      <h1>Jennego: The Oft-Forgotten Blog</h1>
      Need to Design This Still
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: `${node.title}` }} />
          <p
            className="small"
            dangerouslySetInnerHTML={{ __html: `${node.date}` }}
          />
          <p dangerouslySetInnerHTML={{ __html: `${node.excerpt}` }} />
        </div>
      ))}
    </Layout>
  )
}

export default BlogIndex
