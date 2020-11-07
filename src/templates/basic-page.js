import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query pageQuery($id: String!) {
    contentfulPages(id: { eq: $id }) {
      title
      slug
      updatedAt
      id
      pageBody {
        json
      }
    }
  }
`

const BasicPage = props => {
  const { data, errors, pageContext } = props
  const pageData = data.contentfulPages
  return (
    <Layout>
      <div className="container-fluid">
        <SEO title={pageData.title} />
        <h1>{pageData.title}</h1>
        {documentToReactComponents(pageData.pageBody.json)}
      </div>
    </Layout>
  )
}

export default BasicPage
