import React from "react"
import Layout from "../components/layout"
import PhotoItem from "../components/photoItem"
import TextBlock from "../components/textBlock"

const Photos = () => (
  <Layout>
    <div className="photo-layout">
      <ul className="top-row">
        <PhotoItem
          imageSrc={
            "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
          }
        />
        <PhotoItem imageSrc={"https://source.unsplash.com/featured/?nature"} />
        <PhotoItem imageSrc={"https://source.unsplash.com/featured/?animal"} />
      </ul>

      <ul className="text-row">
        <TextBlock />
        <PhotoItem
          imageSrc={"https://source.unsplash.com/featured/?landscape"}
        />
        <PhotoItem imageSrc={"https://source.unsplash.com/random"} />
      </ul>
    </div>
    <ul className="gallery">
      <PhotoItem imageSrc={"https://source.unsplash.com/featured/?nature"} />
      <PhotoItem imageSrc={"https://source.unsplash.com/featured/?animal"} />
      <PhotoItem imageSrc={"https://source.unsplash.com/featured/?nature"} />
      <PhotoItem imageSrc={"https://source.unsplash.com/featured/?mountain"} />
      <PhotoItem imageSrc={"https://source.unsplash.com/featured/?bear"} />
      <PhotoItem imageSrc={"https://source.unsplash.com/featured/?whale"} />
    </ul>
  </Layout>
)

export default Photos
