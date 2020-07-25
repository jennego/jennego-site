import React from "react"
import Layout from "../components/layout"
import PhotoItem from "../components/photoItem"
import TextBlock from "../components/textBlock"
import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"

const Photos = () => {
  const options = {
    settings: {},
    caption: {},
    buttons: {},
    thumbnails: { showThumbnails: false },
    progressBar: {},
  }
  return (
    <SimpleReactLightbox options={options}>
      <Layout>
        <div className="photo-layout">
          <SRLWrapper>
            <ul className="top-row photo-row">
              <PhotoItem
                imageSrc={
                  "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                }
              />
              <PhotoItem
                imageSrc={"https://source.unsplash.com/featured/?nature"}
              />
              <PhotoItem
                imageSrc={"https://source.unsplash.com/featured/?animal"}
              />
            </ul>

            <ul className="text-row row no-gutters">
              <div className="col">
                <TextBlock />
              </div>
              <div className="col-3">
                <PhotoItem
                  imageSrc={"https://source.unsplash.com/featured/?landscape"}
                />
              </div>
              <div className="col-3">
                <PhotoItem imageSrc={"https://source.unsplash.com/random"} />
              </div>
            </ul>

            <ul className="gallery photo-row">
              <PhotoItem
                imageSrc={"https://source.unsplash.com/featured/?nature"}
              />
              <PhotoItem
                imageSrc={"https://source.unsplash.com/featured/?animal"}
              />
              <PhotoItem
                imageSrc={"https://source.unsplash.com/featured/?nature"}
              />
              <PhotoItem
                imageSrc={"https://source.unsplash.com/featured/?mountain"}
              />
              <PhotoItem
                imageSrc={"https://source.unsplash.com/featured/?bear"}
              />
              <PhotoItem
                imageSrc={"https://source.unsplash.com/featured/?whale"}
              />
            </ul>
          </SRLWrapper>
        </div>
      </Layout>
    </SimpleReactLightbox>
  )
}

export default Photos
