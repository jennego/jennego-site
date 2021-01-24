import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Parallax } from "react-parallax"

export const query = graphql`
  query blogQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      date
      title
      slug
      wordpress_id
      content
      categories {
        name
        slug
      }
      featured_media {
        caption
        source_url
        title
      }
      author {
        name
      }
    }
  }
`

const BlogPost = ({ data, errors, pageContext }) => {
  const postData = data.wordpressPost
  return (
    <Layout>
      <div className="blog-header">
        {postData.featured_media ? (
          <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={postData.featured_media.source_url}
            // bgImageAlt="the cat"
            strength={-200}
          >
            <div className="blog-single-featured" />
          </Parallax>
        ) : (
          // <img
          //   className="blog-featured card-img"
          //   src={postData.featured_media.source_url}
          // ></img>
          <div
            className="blog-single-img-placeholder"
            style={{ background: "purple", height: "400px" }}
          >
            {" "}
          </div>
        )}
        <div className="card-img-overlay header-overlay">
          <h1>
            <span
              className="blog-single-title"
              dangerouslySetInnerHTML={{ __html: `${postData.title}` }}
            ></span>
          </h1>
        </div>

        <div className="card-img-overlay meta-overlay">
          <div className="blog-meta">Date and stuff</div>
          <div className="blog-meta">Date and stuff</div>
          <div className="blog-meta">Date and stuff</div>
        </div>
      </div>

      <div className="container pt-3 pb-3">
        <p
          className="blog-single-text"
          dangerouslySetInnerHTML={{ __html: `${postData.content}` }}
        ></p>
      </div>
      {console.log(data)}
    </Layout>
  )
}

export default BlogPost
