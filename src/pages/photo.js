import React from "react"
import Layout from "../components/layout"
import PhotoItem from "../components/photoItem"
import TextBlock from "../components/textBlock"
import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Photos = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPhotoGallery {
        edges {
          node {
            firstRow {
              id
              description
              title
              file {
                url
              }
              fixed(width: 400) {
                width
                height
                src
                srcSet
                ...GatsbyContentfulFixed
              }
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            textRowPhotos {
              file {
                url
              }
              fixed {
                src
              }
            }
            cloudPhotos {
              internal {
                content
              }
            }
          }
        }
      }
    }
  `)

  const photos = data.allContentfulPhotoGallery.edges
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
            {/* // need to do something about the overlap on smaller screens  */}
            <ul className="text-row">
              {/* <div className="row no-gutters" style={{ width: "100%" }}> */}
              {/* <div className="col-md col-12"> */}
              <TextBlock />
              {/* </div> */}
              {photos[0].node.textRowPhotos.map(p => (
                // <div className="co1">
                <PhotoItem imageSrc={p.fixed.src} full={p.file.url} />
                // </div>
              ))}
              {/* </div> */}
            </ul>

            <ul className="text-row">
              {photos[0].node.firstRow.map(p => (
                <PhotoItem
                  imageSrc={p.fixed.src}
                  full={p.file.url}
                  source={p.fluid}
                />
              ))}
            </ul>

            <ul className="top-row photo-row">
              {photos[0].node.firstRow.map(p => (
                <PhotoItem
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

export default Photos
