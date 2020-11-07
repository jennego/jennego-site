import React from "react"
import Layout from "../components/layout"
import PhotoItem from "../components/photoItem"
import TextBlock from "../components/textBlock"
import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  query galleryQuery($id: String!) {
    contentfulPhotoGallery(id: { eq: $id }) {
      id
      title
      textBlock {
        json
      }
      firstRow {
        id
        fixed {
          src
        }
        file {
          url
        }
      }
      gallery {
        id
        fixed {
          src
        }
        file {
          url
        }
      }
      textRowPhotos {
        id
        fixed {
          src
        }
        file {
          url
        }
      }
    }
  }
`

const PhotoGallery = props => {
  const { data, errors, pageContext } = props
  const photos = data.contentfulPhotoGallery
  const lightbox = {
    buttons: { showDownloadButton: false },
    thumbnails: {
      thumbnailsPosition: "left",
    },
  }
  return (
    <SimpleReactLightbox>
      <Layout>
        <SRLWrapper options={lightbox}>
          <div className="photo-layout">
            <ul className="text-row gallery">
              <TextBlock />
              {photos.textRowPhotos.map(p => (
                <PhotoItem
                  key={p.id}
                  imageSrc={p.fixed.src}
                  full={p.file.url}
                />
              ))}
            </ul>

            <ul className="top-row photo-row">
              {photos.firstRow.map(p => (
                <PhotoItem
                  key={p.id}
                  imageSrc={p.fixed.src}
                  full={p.file.url}
                  source={p.fluid}
                />
              ))}
            </ul>

            <ul className="gallery photo-row"></ul>
          </div>
        </SRLWrapper>
      </Layout>
    </SimpleReactLightbox>
  )
}

export default PhotoGallery
