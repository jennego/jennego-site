import React, { useState, useEffect, useCallback } from "react"
import Layout from "../components/layout"
import PhotoItem from "../components/photoItem"
import TextBlock from "../components/textBlock"
import { graphql, Link } from "gatsby"
import PhotoNav from "../components/photoNav"
import AlbumPhotoNav from "../components/subGalleryNav"
import FakeLightbox from "../components/fake-lightbox"

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
        contentful_id
        id
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO])
        file {
          url
        }
      }
      gallery {
        contentful_id
        id
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO]
          resizingBehavior: FILL
        )
        file {
          url
        }
      }
      textRowPhotos {
        contentful_id
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
  const { data, errors, pageContext, location } = props
  const photos = data.contentfulPhotoGallery
  const [arrIndex, setArrIndex] = useState(null)
  const [groupIndex, setGroupIndex] = useState(null)
  const [CurrentIndex, setCurrentIndex] = useState(0)

  const [singleView, setSingleView] = useState(false)
  const [singleImage, setSingleImage] = useState({})

  const [animateCss, setAnimateCss] = useState(
    "animate__animated animate__zoomIn"
  )

  const {
    breadcrumb: { crumbs },
  } = pageContext

  const lightboxPhotoListCombine = [
    ...photos.firstRow,
    ...photos.textRowPhotos,
    ...photos.gallery,
  ]

  const galleryPhotoList = lightboxPhotoListCombine.map((p, index) => ({
    gatsbyImageData: p.gatsbyImageData,
    contentful_id: p.contentful_id,
    index: p.index,
  }))

  const openImageHandler = (image, index) => {
    setSingleImage(image)
    setSingleView(true)
    setCurrentIndex(index)
    setAnimateCss("animate__animated animate__zoomIn")
  }

  const closeSingleView = () => {
    setAnimateCss("animate__animated animate__fadeOut")
    setTimeout(() => {
      setSingleView(false)
    }, 500)
  }

  const escFunction = useCallback(event => {
    if (event.key === "Escape") {
      closeSingleView()
    }
    if (event.key === "Esc") {
      closeSingleView()
    }
  })

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false)

    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  }, [])

  const combinedGalleryList = pageContext.combinedPhotosList
  const currentId = pageContext.id

  combinedGalleryList.map(({ node }, index) =>
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
    <div>
      {singleView ? (
        <FakeLightbox
          imageIndex={CurrentIndex}
          image={singleImage}
          close={() => closeSingleView()}
          gallery={galleryPhotoList}
          animate={animateCss}
        />
      ) : (
        <Layout>
          <div className="photo-layout animate__animated animate__fadeIn">
            <ul className="top-row photo-row flex-md-nowrap flex-lg-nowrap flex-xl-nowrap">
              {photos.firstRow.map((p, index) => (
                <li
                  onClick={() => openImageHandler(p, index)}
                  onKeyPress={e =>
                    e.key === "Enter" ? openImageHandler(p, index) : ""
                  }
                >
                  <PhotoItem
                    key={p.id}
                    imageSrc={p.gatsbyImageData}
                    full={p.file.url}
                    index={index}
                  />
                </li>
              ))}
            </ul>

            <ul className="text-row photo-row flex-md-nowrap flex-lg-nowrap flex-xl-nowrap">
              <TextBlock
                title={photos.title}
                text={photos.textBlock.raw}
                pageContext={pageContext}
              />
              {photos.textRowPhotos.map((p, index) => (
                <li
                  onClick={() =>
                    openImageHandler(p, photos.firstRow.length + index)
                  }
                  onKeyPress={e =>
                    e.key === "Enter"
                      ? openImageHandler(p, photos.firstRow.length + index)
                      : ""
                  }
                >
                  <PhotoItem
                    key={p.id}
                    imageSrc={p.gatsbyImageData}
                    full={p.file.url}
                    index={photos.firstRow.length + index}
                  />
                </li>
              ))}
            </ul>

            <ul className="gallery gallery-photo-wrapper">
              {photos.gallery.map((p, index) => (
                <li
                  onClick={() =>
                    openImageHandler(
                      p,
                      photos.firstRow.length +
                        photos.textRowPhotos.length +
                        index
                    )
                  }
                  onKeyPress={e =>
                    e.key === "Enter"
                      ? openImageHandler(
                          p,
                          photos.firstRow.length +
                            photos.textRowPhotos.length +
                            index
                        )
                      : ""
                  }
                >
                  <PhotoItem
                    key={p.id}
                    imageSrc={p.gatsbyImageData}
                    full={p.file.url}
                    index={
                      photos.firstRow.length +
                      photos.textRowPhotos.length +
                      index
                    }
                  />
                </li>
              ))}
            </ul>
          </div>

          {photos.photo_group === null ? (
            <PhotoNav
              backPath={
                arrIndex !== 0 ? combinedGalleryList[arrIndex - 1] : null
              }
              backTitle={
                arrIndex !== 0 ? combinedGalleryList[arrIndex - 1] : null
              }
              forwardTitle={
                arrIndex >= combinedGalleryList.length
                  ? null
                  : combinedGalleryList[arrIndex + 1]
              }
              forwardPath={
                arrIndex >= combinedGalleryList.length
                  ? null
                  : combinedGalleryList[arrIndex + 1]
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
      )}
    </div>
  )
}

export default PhotoGallery
