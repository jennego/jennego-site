import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ListGroup, ListGroupItem } from "reactstrap"

const WritingPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulWriting {
        edges {
          node {
            title
            date
            publication
            slug
          }
        }
      }
    }
  `)

  let articles = data.allContentfulWriting.edges

  return (
    <Layout>
      <div className="container-fluid">
        <h1 className="display-2">Writing</h1>
        {console.log(articles)}
        <ul className="writing-list">
          {articles.map(({ node }) => (
            <li>
              <Link to={`/writing/${node.slug}`}>{node.title}</Link>
            </li>
          ))}
        </ul>

        {console.log(data)}
      </div>
    </Layout>
  )
}

export default WritingPage
