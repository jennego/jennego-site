import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BasicPage = props => {
  const { data, errors, pageContext } = props
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
    </Layout>
  )
}

export default BasicPage
