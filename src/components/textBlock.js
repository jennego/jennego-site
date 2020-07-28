import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useStaticQuery, graphql } from "gatsby"

const TextBlock = props => {
  const data = useStaticQuery(graphql`
    {
      contentfulPhotoGallery {
        textBlock {
          json
        }
        title
      }
    }
  `)

  let text = data.contentfulPhotoGallery.textBlock.json

  return (
    <li className="text-block-wrap">
      <div className="text-block flex-grow-1">
        <div className="container">
          <h1>{data.contentfulPhotoGallery.title}</h1>
          {documentToReactComponents(text)}
        </div>
      </div>
    </li>
  )
}

export default TextBlock
