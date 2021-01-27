import React from "react"
import Layout from "../components/layout"
import PhotoItem from "../components/photoItem"
import TextBlock from "../components/textBlock"
import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PhotoNav from "../components/photoNav"
import OnImagesLoaded from "react-on-images-loaded"

// needs to rewrite to use state to determine if images are loaded

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
        fixed(width: 800) {
          src
        }
        file {
          url
        }
      }
      gallery {
        id
        fixed(width: 900) {
          src
        }
        fluid {
          src
        }
        file {
          url
        }
      }
      textRowPhotos {
        id
        fixed(width: 800) {
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

  //  Needs tweaking to allow for photo galleries, keep same nav in photo album view. Galleries within album should have prev/next to other galleries in album view, home to main album

  const prev = pageContext.prev
    ? {
        url: `/photos/${pageContext.prev.slug}`,
        title: pageContext.prev.title,
      }
    : ""

  const next = pageContext.next
    ? {
        url: `/photos/${pageContext.next.slug}`,
        title: pageContext.next.title,
      }
    : ""

  return (
    <SimpleReactLightbox>
      <Layout>
        {console.log(pageContext)}
        {/* <OnImagesLoaded
          onLoaded={this.runAfterImagesLoaded}
          onTimeout={this.runTimeoutFunction}
          timeout={7000}
        > */}
        <SRLWrapper options={lightbox}>
          <div className="photo-layout">
            <ul className="text-row gallery">
              <TextBlock title={photos.title} text={photos.textBlock.json} />
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
                />
              ))}
            </ul>

            <ul className="gallery photo-row">
              {photos.gallery.map(p => (
                <PhotoItem
                  key={p.id}
                  imageSrc={p.fluid.src}
                  full={p.file.url}
                />
              ))}
            </ul>
          </div>
        </SRLWrapper>
        {/* </OnImagesLoaded> */}

        <PhotoNav
          backTitle={prev.title}
          backPath={prev.url}
          forwardTitle={next.title}
          forwardPath={next.url}
          homePath={"/photos"}
        />
      </Layout>
    </SimpleReactLightbox>
  )
}

export default PhotoGallery
