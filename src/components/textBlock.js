import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const TextBlock = ({ title, text, pageContext }, props) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  console.log(pageContext, "from text")

  return (
    <li className="text-block">
      <div className="container pt-2">
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator={
            <span style={{ margin: "0.5rem" }}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          }
          crumbLabel={title}
        />
        <h1>{title}</h1>
        {documentToReactComponents(JSON.parse(text))}
        <Link className="btn btn-primary" to="/photos">
          Back to Main Photo Page
        </Link>
      </div>
    </li>
  )
}

export default TextBlock
