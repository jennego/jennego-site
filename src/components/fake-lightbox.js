import React, { useState, useEffect, useRef } from "react"
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
import { LazyLoadImage } from "react-lazy-load-image-component"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

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
  let imageIndex = props.imageIndex
  let targetRef = useRef(null)
  let notTargetRef = useRef()

  const [selectedImage, setSelectedImage] = useState(imageIndex)
  const [nextImage, setNextImage] = useState()
  const [prevImage, setPrevImage] = useState()

  const [animateCss, setAnimateCss] = useState(
    "animate__animated animate__fadeIn"
  )

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

  console.log("ref", targetRef)

  // if props are not then use graphql query
  // take current id, affix it to thumbnail, scroll into view on load

  const thumbnailSelectHandler = image => {
    setSelectedImage(image)
  }

  useEffect(() => {
    targetRef.current.scrollIntoView({
      behavior: "smooth",
    })
    return () => {
      // cleanup
    }
  }, [])

  return (
    <div className="fake-lightbox animate__animated animate__zoomIn">
      <div className="row no-gutters">
        <div className="col-2 d-md-block d-none thumbs">
          {props.gallery.map((photo, index) => (
            <div
              style={{ marginBottom: "-5px" }}
              ref={selectedImage === index ? targetRef : notTargetRef}
            >
              <GatsbyImage
                image={photo.gatsbyImageData}
                alt="hi"
                index={index}
                id={photo.contentful_id}
                onClick={() => setSelectedImage(index)}
                tabIndex="0"
                className={
                  index === selectedImage ? "thumb-selected" : "thumb-image"
                }
              />
            </div>
          ))}
        </div>

        <div
          className="close"
          style={{ position: "absolute", right: "5px", zIndex: "5" }}
          onClick={props.close}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" color="white" />
        </div>
        <div
          className="col-md-10 col-12 main d-flex flex-row justify-content-center mx-auto"
          style={{ background: "#3f364f" }}
        >
          <AwesomeSlider
            bullets={false}
            selected={selectedImage}
            fillParent={true}
          >
            {props.gallery.map((image, index) => (
              <div style={{ width: "100%" }}>
                <GatsbyImage
                  image={image.gatsbyImageData}
                  alt="hi"
                  id={image.contentful_id}
                  objectFit="contain"
                  style={{ height: "99vh" }}
                />
              </div>
            ))}
          </AwesomeSlider>
        </div>
      </div>
    </div>
  )
}

export default FakeLightbox
