import React, { useState, useEffect, useRef, useCallback } from "react"
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
import "animate.css/animate.min.css"
import Styles from "react-awesome-slider/dist/styles.css"

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

  console.log("ref", targetRef)

  // if props are not then use graphql query
  // take current id, affix it to thumbnail, scroll into view on load

  const thumbnailSelectHandler = image => {
    setSelectedImage(image)
  }

  useEffect(() => {
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
    return () => {
      // cleanup
    }
  }, [])

  const arrowsFunction = useCallback(event => {
    let index = selectedImage
    if (event.key === "ArrowLeft") {
      setSelectedImage((index -= 1))
    } else if (event.key === "ArrowRight") {
      setSelectedImage((index += 1))
    }
    // switch (event.key) {
    //   case "Left": // IE/Edge specific value
    //   case "ArrowLeft":
    //     return selectedImage === 0 ? "" : setSelectedImage((index -= 1))

    //     // Do something for "left arrow" key press.
    //     break
    //   case "Right": // IE/Edge specific value
    //   case "ArrowRight":
    //     console.log("go right!")
    //     // Do something for "right arrow" key press.
    //     break
    // }
  })

  useEffect(() => {
    document.addEventListener("keydown", arrowsFunction, false)

    return () => {
      document.removeEventListener("keydown", arrowsFunction, false)
    }
  }, [selectedImage])

  return (
    <div
      className={`fake-lightbox animate__animated ${props.animate}`}
      onKeyPress={e => console.log(e.key)}
    >
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

        <div className="single-image-close" onClick={props.close}>
          <FontAwesomeIcon icon={faTimes} size="3x" color="white" />
        </div>
        <div
          className="col-12 col-md-10 main d-flex flex-row justify-content-center mx-auto"
          style={{ height: "100vh" }}
        >
          <h1> Slider</h1>
          <AwesomeSlider
            bullets={false}
            selected={selectedImage}
            fillParent={true}
            cssModule={Styles}
          >
            {props.gallery.map((image, index) => (
              <div style={{ width: "100%" }}>
                <GatsbyImage
                  image={image.gatsbyImageData}
                  alt="hi"
                  id={image.contentful_id}
                  objectFit="contain"
                  style={{ height: "100vh" }}
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
