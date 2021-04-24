import React from "react"
import FakeLightbox from "../components/fake-lightbox"

import { useStaticQuery, graphql } from "gatsby"

const SinglePhoto = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPhotoGallery(
        id: { eq: "264e66a5-1d94-5f3d-ba76-1b2e7b093c6f" }
      ) {
        firstRow {
          gatsbyImageData
          id
        }
        textRowPhotos {
          gatsbyImageData
          id
        }
        gallery {
          gatsbyImageData
          id
        }
      }
    }
  `)
  return <FakeLightbox data={data}></FakeLightbox>
}

export default SinglePhoto
