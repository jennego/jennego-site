import React, { useState } from "react"
import Layout from "../components/layout"
import PhotoItem from "../components/photoItem"
import TextBlock from "../components/textBlock"
import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"
import { graphql, Link } from "gatsby"
import PhotoNav from "../components/photoNav"
import AlbumPhotoNav from "../components/subGalleryNav"
import FakeLightbox from "../components/fake-lightbox"
// import FsLightbox from "fslightbox-react"

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
        resize(width: 1000) {
          src
        }
      }
      gallery {
        contentful_id
        id
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO])
        file {
          url
        }
        resize(width: 1000) {
          src
        }
      }
      textRowPhotos {
        contentful_id
        id
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO])
        file {
          url
        }
        resize(width: 1000) {
          src
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
  const [CurrentIndex, setCurrentIndex] = useState(0)

  const [singleView, setSingleView] = useState(false)
  const [singleImage, setSingleImage] = useState({})

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 0,
  })

  const lightboxPhotoListCombine = [
    ...photos.firstRow,
    ...photos.textRowPhotos,
    ...photos.gallery,
  ]

  const lightboxPhotoList = lightboxPhotoListCombine.map((p, index) => {
    return p.resize.src
  })
  console.log(lightboxPhotoList)

  const openLightboxAt = number => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    })
    console.log("getting sent to lightbox", lightboxController)
  }

  const openImageHandler = (image, index) => {
    setSingleImage(image)
    setSingleView(true)
    setCurrentIndex(index)
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
    <div>
      {singleView ? (
        <FakeLightbox
          imageIndex={CurrentIndex}
          image={singleImage}
          close={() => setSingleView(false)}
          gallery={combinedPhotosList}
        />
      ) : (
        <Layout>
          <div className="photo-layout">
            <ul className="top-row photo-row flex-md-nowrap flex-lg-nowrap flex-xl-nowrap">
              {photos.firstRow.map((p, index) => (
                <li onClick={() => openImageHandler(p, index)}>
                  {/* <a
                  onMouseDown={e => setCurrentIndex(index)}
                  onMouseUp={e => openLightboxAt(CurrentIndex)}
                > */}
                  {/* <Link to={`/photos/${p.contentful_id}`}> */}
                  <PhotoItem
                    key={p.id}
                    imageSrc={p.gatsbyImageData}
                    full={p.file.url}
                    index={index}
                  />
                  {/* </Link> */}
                  {/* </a> */}
                </li>
              ))}
            </ul>

            <ul className="text-row photo-row flex-md-nowrap flex-lg-nowrap flex-xl-nowrap">
              <TextBlock title={photos.title} text={photos.textBlock.raw} />
              {photos.textRowPhotos.map((p, index) => (
                <li>
                  <a
                    onMouseDown={e =>
                      setCurrentIndex(photos.firstRow.length + index)
                    }
                    onMouseUp={e => openLightboxAt(CurrentIndex)}
                  >
                    <PhotoItem
                      key={p.id}
                      imageSrc={p.gatsbyImageData}
                      full={p.file.url}
                      index={index}
                    />
                  </a>
                </li>
              ))}
            </ul>

            <ul className="gallery photo-row">
              {photos.gallery.map((p, index) => (
                <li>
                  <a
                    onMouseDown={e =>
                      setCurrentIndex(
                        photos.textRowPhotos.length +
                          photos.firstRow.length +
                          index
                      )
                    }
                    onMouseUp={e => openLightboxAt(CurrentIndex)}
                  >
                    <PhotoItem
                      key={p.id}
                      imageSrc={p.gatsbyImageData}
                      full={p.file.url}
                      index={index}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {photos.photo_group === null ? (
            <PhotoNav
              backPath={
                arrIndex !== 0 ? combinedPhotosList[arrIndex - 1] : null
              }
              backTitle={
                arrIndex !== 0 ? combinedPhotosList[arrIndex - 1] : null
              }
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
          {/* <FsLightbox
          toggler={lightboxController.toggler}
          sourceIndex={lightboxController.slide}
          sources={lightboxPhotoList}
        /> */}
          }
        </Layout>
      )}
    </div>
  )
}

export default PhotoGallery
