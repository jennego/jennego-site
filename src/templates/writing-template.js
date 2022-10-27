import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
  const { data, errors, pageContext } = props
  const pageData = data.contentfulWriting
  return (
    <Layout>
      <div className="container">
        <SEO title={pageData.title} />
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
