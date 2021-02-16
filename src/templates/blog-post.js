import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Parallax } from "react-parallax"
import BlogNav from "../components/blogNav"
import moment from "moment"

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
  const prev = pageContext.prev
    ? {
        url: `/blog/${pageContext.prev.slug}`,
        title: pageContext.prev.title,
        image: pageContext.prev.featured_media,
      }
    : ""

  const next = pageContext.next
    ? {
        url: `/blog/${pageContext.next.slug}`,
        title: pageContext.next.title,
        image: pageContext.next.featured_media,
      }
    : ""

  return (
    <Layout>
      {console.log(prev)}
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
          <p
            className="single-blog-date"
            dangerouslySetInnerHTML={{
              __html: `${moment(postData.date).format("MMMM Do, YYYY")}`,
            }}
          />
        </div>
      </div>

      <div className="container pt-3 pb-3">
        <p
          className="blog-single-text"
          dangerouslySetInnerHTML={{ __html: `${postData.content}` }}
        ></p>
      </div>
      <BlogNav
        forwardImg={next.image}
        backImg={prev.image}
        backPath={prev.url}
        backTitle={prev.title}
        forwardPath={next.url}
        forwardTitle={next.title}
      />
    </Layout>
  )
}

export default BlogPost
