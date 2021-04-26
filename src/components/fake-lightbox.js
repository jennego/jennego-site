import React, { useState, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleRight,
  faAngleLeft,
  faTimesCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { navigate } from "@reach/router"
import "animate.css/animate.min.css"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const MainImage = ({ image }) => {
  return (
    <div>
      {/* <img
        src={props.image.gatsbyImageData.images.fallback.src}
        style={{ height: "100vh", objectFit: "contain" }}
        className="img-fluid"
      /> */}
      <GatsbyImage
        image={image.gatsbyImageData}
        alt="hi"
        id={image.contentful_id}
        objectFit="contain"
        style={{ height: "99vh" }}
        className="animate__animated animate__fadeIn"
      />
    </div>
  )
}

const FakeLightbox = props => {
  let fullImage = props.image

  const [selectedImage, setSelectedImage] = useState(fullImage)
  const [nextImage, setNextImage] = useState()
  const [prevImage, setPrevImage] = useState()

  const [animateCss, setAnimateCss] = useState(
    "animate__animated animate__fadeIn"
  )

  const [galleryRow, setGalleryRow] = useState([])

  // useEffect(() => {
  //   props.gallery.length > 0
  //     ? setGalleryRow(props.gallery[0].fields.gallery)
  //     : setGalleryRow([])
  //   return () => {}
  // }, [props.gallery, galleryRow])

  // console.log("gallery row", galleryRow)

  // const firstRow = props.gallery[0].fields.firstRow.file.url
  // const textRpw = props.gallery[0].fields.textRow.file.url

  const handleUrlChange = () => {
    // window.history.pushState("page2 state", "Useless Title", "/photos")
  }

  console.log("fake lightbox", props)

  // if props are not then use graphql query
  // take current id, affix it to thumbnail, scroll into view on load

  const thumbnailSelectHandler = image => {
    setSelectedImage(image)
    setAnimateCss("animate__animated animate__fadeIn")
  }

  return (
    <div className="fake-lightbox animate__animated animate__zoomIn">
      <div className="row">
        <div className="col-2 d-md-block d-none thumbs">
          {/* {galleryRow.length > 0
            ? galleryRow.map(photo => (
                <LazyLoadImage
                  src={photo.fields.file.url}
                  alt="hi"
                  effect="blur"
                  // id={photo.id}
                  // onClick={() => thumbnailSelectHandler(photo)}
                  tabIndex="0"
                  className="thumb-image img-fluid"
                />
              ))
            : ""} */}
        </div>

        <div
          className="close"
          style={{ position: "absolute", right: "5px", zIndex: "5" }}
          onClick={props.close}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" color="white" />
        </div>
        <div
          className="col-md-10 col-12 main d-flex flex-row justify-content-center"
          style={{ background: "#3f364f" }}
        >
          <div
            className="photo-prev align-self-center "
            style={{ position: "absolute", left: "1rem", zIndex: "5" }}
          >
            <a onClick={handleUrlChange}>
              <FontAwesomeIcon icon={faAngleLeft} size="5x" />
            </a>
          </div>
          {/* feed props to image component which will change.   */}
          <MainImage image={selectedImage} />

          <div
            className="photo-next align-self-center "
            style={{ position: "absolute", right: "1rem", zIndex: "5" }}
          >
            <a onClick={handleUrlChange}>
              <FontAwesomeIcon icon={faAngleRight} size="5x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FakeLightbox
