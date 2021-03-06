import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image";
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
import { Parallax, Background } from "react-parallax"

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
        <h1 className="display-3">Jennego: The Oft-Forgotten Blog</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <Link className="blog-title-link" to={node.slug}>
            <div className="d-flex blog-post justify-content-between mx-auto">
              {node.featured_media ? (
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
                  {/* <p className="read-more btn btn-outline-light btn-sm">
                    Read More <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </p> */}
                </h3>
              </div>

              <p
                className="small blog-date"
                dangerouslySetInnerHTML={{
                  __html: `${moment(node.date).format("MMMM Do, YYYY")}`,
                }}
              />
              <div className="blog-tags">
                {/* <Link to="/tag">
                <p className="blog-tag-badge badge badge-primary mr-1">Tech</p>
                </Link>
                <Link to="/meh">
                <p className="blog-tag-badge badge badge-primary mr-1">Games</p>
                </Link>
                <Link to="/life">
                <p className="blog-tag-badge badge badge-primary mr-1">Life</p>
              </Link> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default BlogIndex
