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
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO])
          fluid {
            src
          }
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
      <div className="container-fluid">
        <h1> {data.contentfulPhotoGroup.title} </h1>
        {console.log(pageContext)}

        {/* <OnImagesLoaded
          onLoaded={this.runAfterImagesLoaded}
          onTimeout={this.runTimeoutFunction}
          timeout={7000}
        > */}
        <div className="row">
          {console.log(data)}
          {data.contentfulPhotoGroup.photoGalleries.map(node => (
            <PhotoCard
              photo={node.albumPhoto.gatsbyImageData}
              slug={node.slug}
              title={node.title}
            />
          ))}
        </div>
        {/* </OnImagesLoaded> */}
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
