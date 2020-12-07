import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useStaticQuery, graphql, Link } from "gatsby"

const TextBlock = ({ title, text }) => {
  return (
    <li className="text-block">
      <div className="container">
        <h1>{title}</h1>
        {documentToReactComponents(text)}
        <Link className="btn btn-primary" to="/photos">
          Back to Main Photo Page
        </Link>
      </div>
    </li>
  )
}

export default TextBlock
