import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

export const query = graphql`
  query pageQuery($id: String!) {
    contentfulWriting(id: { eq: $id }) {
      title
      publication
      date(formatString: "MMMM DD, YYYY")
      printVersion {
        file {
          url
          fileName
        }
        title
      }
      body {
        raw
      }
    }
  }
`

const WritingPage = props => {
  const { data, errors, pageContext, location } = props
  const pageData = data.contentfulWriting
  const {
    breadcrumb: { crumbs },
  } = pageContext

  // Example of dynamically using location prop as a crumbLabel
  // NOTE: this code will not work for every use case, and is only an example

  console.log(pageContext)

  return (
    <Layout>
      <SEO title={pageData.title} />
      <div className="container">
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator={
            <span style={{ margin: "0 0.5rem" }}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          }
          crumbLabel={pageData.title}
        />
        <h1>{pageData.title}</h1>
        <div className="infobox">
          Published Date: {pageData.date} <br />
          Publication: {pageData.publication}
          {!pageData.printVersion ? (
            ""
          ) : (
            <div>
              Print Version:{" "}
              <a
                href={pageData.printVersion.file.url}
                target="_blank"
                rel="noreferrer"
              >
                {pageData.printVersion.file.fileName}
              </a>
            </div>
          )}
        </div>
        {documentToReactComponents(JSON.parse(pageData.body.raw))}
        {console.log(pageData.body)}
      </div>
    </Layout>
  )
}

export default WritingPage
