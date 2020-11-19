import React from "react"
import SimpleReactLightbox from "simple-react-lightbox"
import Layout from "../components/layout"

const VideoPage = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <h1>Videos</h1>
        <SimpleReactLightbox></SimpleReactLightbox>
      </div>
    </Layout>
  )
}

export default VideoPage
