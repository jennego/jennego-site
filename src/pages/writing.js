import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const WritingPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulWriting {
        edges {
          node {
            title
            date(formatString: "MMMM DD, YYYY")
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
      <div className="container-fluid" style={{ minHeight: "78vh" }}>
        <h1 className="display-2">Writing</h1>
        {console.log(articles)}
        <ul className="writing-list">
          {articles.map(({ node }) => (
            <li>
              <div>
                <Link to={`/writing/${node.slug}`}>
                  {node.title}
                  <div className="small-text">
                    {node.date}{" "}
                    {node.publication ? `/ ${node.publication}` : ""}
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default WritingPage
