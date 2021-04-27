import React from "react"
import FakeLightbox from "../components/fake-lightbox"

import { useStaticQuery, graphql } from "gatsby"

const contentful = require("contentful")

const client = contentful.createClient({
  space: "c7t97ojr0qrw",
  // environment: "<environment_id>", // defaults to 'master' if not set
  accessToken: "wi6KVuiWYDkKfeC3P_ywvoQ05_Gd1Oq7NOQ4FH9VaxU",
})

// /spaces/c7t97ojr0qrw/entries?access_token=wi6KVuiWYDkKfeC3P_ywvoQ05_Gd1Oq7NOQ4FH9VaxU&links_to_asset=80977216-3b46-5d79-aaec-4dfa76ea7917

// needs contentful ID

client
  .getEntries({
    links_to_asset: "6drhlZyZDLo9siUg4GHOr6",
  })
  .then(response => console.log("links to asset", response.items))
  .catch(console.error)

const SinglePhoto = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPhotoGallery(
        id: { eq: "264e66a5-1d94-5f3d-ba76-1b2e7b093c6f" }
      ) {
        firstRow {
          contentful_id
          gatsbyImageData
          id
        }
        textRowPhotos {
          contentful_id
          gatsbyImageData
          id
        }
        gallery {
          contentful_id
          gatsbyImageData
          id
        }
      }
    }
  `)
  return <FakeLightbox data={data}></FakeLightbox>
}

export default SinglePhoto
