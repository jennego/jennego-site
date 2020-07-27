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
        <div className="photo-layout">
          {console.log(data)}
          <SRLWrapper options={lightbox}>
            <ul className="top-row photo-row">
              {photos[0].node.firstRow.map(p => (
                <PhotoItem
                  imageSrc={p.fixed.src}
                  full={p.file.url}
                  source={p.fluid}
                />
              ))}

              {/* {photos.map(({ node }) => console.log(node.firstRow))} */}
              {/* <PhotoItem
                imageSrc={
                  "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                }
              />
              <PhotoItem
                imageSrc={"https://source.unsplash.com/featured/?nature"}
              />
              <PhotoItem
                imageSrc={"https://source.unsplash.com/featured/?animal"}
              /> */}
            </ul>

            <ul className="text-row row no-gutters">
              <div className="col-md col-12">
                <TextBlock />
              </div>
              <div className="col-md-3 col-6"></div>
              <div className="col-md-3 col-6"></div>
            </ul>

            <ul className="gallery photo-row"></ul>
          </SRLWrapper>
        </div>
      </Layout>
    </SimpleReactLightbox>
  )
}

export default Photos
