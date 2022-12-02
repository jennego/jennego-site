import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PhotoNav from "../components/photoNav"
import OnImagesLoaded from "react-on-images-loaded"
import PhotoCard from "../components/photoCard"

export const query = graphql`
  query photoGroupQuery($id: String!) {
    contentfulPhotoGroup(id: { eq: $id }) {
      id
      slug
      title
      textBlock {
        raw
      }
      photoGalleries {
        slug
        title
        id
        albumPhoto {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO]
            aspectRatio: 1.3333333333
          )
        }
      }
    }
  }
`

const PhotoList = props => {
  const { data, errors, pageContext } = props
  const [arrIndex, setArrIndex] = useState(null)

  const combinedPhotosList = pageContext.combinedPhotosList
  const currentId = pageContext.id

  combinedPhotosList.map(({ node }, index) =>
    node.id === currentId
      ? arrIndex === null
        ? setArrIndex(parseInt(index))
        : arrIndex
      : null
  )

  return (
    <Layout>
      <div className="container-fluid" style={{ minHeight: "79vh" }}>
        <h1> {data.contentfulPhotoGroup.title} </h1>

        <div className="row">
          {data.contentfulPhotoGroup.photoGalleries.map(node => (
            <PhotoCard
              photo={node.albumPhoto.gatsbyImageData}
              slug={node.slug}
              title={node.title}
            />
          ))}
        </div>
        <PhotoNav
          backPath={arrIndex !== 0 ? combinedPhotosList[arrIndex - 1] : null}
          backTitle={arrIndex !== 0 ? combinedPhotosList[arrIndex - 1] : null}
          forwardTitle={
            arrIndex >= combinedPhotosList.length
              ? null
              : combinedPhotosList[arrIndex + 1]
          }
          forwardPath={
            arrIndex >= combinedPhotosList.length
              ? null
              : combinedPhotosList[arrIndex + 1]
          }
          homePath={"/photos"}
        />
      </div>
    </Layout>
  )
}

export default PhotoList
