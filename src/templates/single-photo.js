import React, { useState, useEffect } from "react"
import FakeLightbox from "../components/fake-lightbox"
import Layout from "../components/layout"

const SinglePhotoPage = props => {
  const imageContentfulId = props.pageContext.contentful_id
  const [gallery, setGallery] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const contentful = require("contentful")
    const client = contentful.createClient({
      space: "c7t97ojr0qrw",
      // environment: "<environment_id>", // defaults to 'master' if not set
      accessToken: "wi6KVuiWYDkKfeC3P_ywvoQ05_Gd1Oq7NOQ4FH9VaxU",
    })
    client
      .getEntries({
        links_to_asset: imageContentfulId,
      })
      .then(response => setGallery(response.items))
      .catch(console.error)

    return () => {
      // cleanup
    }
  }, [gallery])

  console.log(gallery)
  // /spaces/c7t97ojr0qrw/entries?access_token=wi6KVuiWYDkKfeC3P_ywvoQ05_Gd1Oq7NOQ4FH9VaxU&links_to_asset=80977216-3b46-5d79-aaec-4dfa76ea7917

  return (
    <Layout>
      <div>Hi single image </div>
    </Layout>
  )
}

export default SinglePhotoPage
