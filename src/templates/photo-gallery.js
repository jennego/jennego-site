import React, { useState } from "react"
import Layout from "../components/layout"
import PhotoItem from "../components/photoItem"
import TextBlock from "../components/textBlock"
import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"
import { graphql } from "gatsby"
import PhotoNav from "../components/photoNav"
import AlbumPhotoNav from "../components/subGalleryNav"
import { GatsbyImage } from "gatsby-plugin-image"

import OnImagesLoaded from "react-on-images-loaded"

export const query = graphql`
  query galleryQuery($id: String!) {
    contentfulPhotoGallery(id: { eq: $id }) {
      id
      title
      photo_group {
        slug
        id
        title
      }
      textBlock {
        raw
      }
      firstRow {
        id
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO])
        file {
          url
        }
      }
      gallery {
        id
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO])
        file {
          url
        }
      }
      textRowPhotos {
        id
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO])
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
  const [arrIndex, setArrIndex] = useState(null)
  const [groupIndex, setGroupIndex] = useState(null)

  const lightbox = {
    buttons: { showDownloadButton: false },
    thumbnails: {
      thumbnailsPosition: "left",
    },
  }

  const combinedPhotosList = pageContext.combinedPhotosList
  const currentId = pageContext.id

  combinedPhotosList.map(({ node }, index) =>
    node.id === currentId
      ? arrIndex === null
        ? setArrIndex(parseInt(index))
        : arrIndex
      : null
  )

  const photoGroupList = pageContext.photoGroups
  const currentGroupId = photos.photo_group ? photos.photo_group[0].id : null
  const currentGroupSlug = photos.photo_group
    ? photos.photo_group[0].slug
    : null

  if (currentGroupId !== null) {
    photoGroupList.map(({ node }, index) =>
      node.id === currentGroupId
        ? groupIndex === null
          ? setGroupIndex(parseInt(index))
          : groupIndex
        : null
    )
  }

  return (
    <SimpleReactLightbox>
      <Layout>
        {console.log("page context", pageContext)}
        {console.log("data", data)}

        {/* <SRLWrapper options={lightbox}> */}
        <div className="photo-layout">
          <ul className="top-row photo-row flex-nowrap">
            {photos.firstRow.map((p, index) => (
              <PhotoItem
                key={p.id}
                imageSrc={p.gatsbyImageData}
                full={p.file.url}
                index={index}
              />
            ))}
          </ul>
          <ul className="text-row photo-row flex-nowrap">
            <TextBlock title={photos.title} text={photos.textBlock.raw} />
            {photos.textRowPhotos.map((p, index) => (
              <PhotoItem
                key={p.id}
                imageSrc={p.gatsbyImageData}
                full={p.file.url}
                index={photos.firstRow.length + index}
              />
            ))}
          </ul>

          <ul className="gallery photo-row">
            {photos.gallery.map((p, index) => (
              <>
                <PhotoItem
                  key={p.id}
                  imageSrc={p.gatsbyImageData}
                  full={p.file.url}
                  index={
                    photos.textRowPhotos.length + photos.firstRow.length + index
                  }
                />
              </>
            ))}
          </ul>
        </div>
        {/* </SRLWrapper> */}

        {photos.photo_group === null ? (
          <PhotoNav
            backPath={arrIndex !== 0 ? combinedPhotosList[arrIndex - 1] : null}
            backTitle={arrIndex !== 0 ? combinedPhotosList[arrIndex - 1] : null}
            forwardTitle={
              arrIndex >= combinedPhotosList.length
                ? null
                : combinedPhotosList[arrIndex + 1]
            }
            forwardPath={
              arrIndex >= combinedPhotosList.length
                ? null
                : combinedPhotosList[arrIndex + 1]
            }
            homePath={"/photos"}
          />
        ) : (
          <div className="group-photos">
            <AlbumPhotoNav
              groupList={photoGroupList[groupIndex]}
              currentGalleryId={currentId}
              groupSlug={currentGroupSlug}
            ></AlbumPhotoNav>
          </div>
        )}
      </Layout>
    </SimpleReactLightbox>
  )
}

export default PhotoGallery
