import React, { useState } from "react"
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

const FakeLightbox = (props, { fullImage }) => {
  const [selectedImage, setSelectedImage] = useState(
    props.data.contentfulPhotoGallery.gallery[1]
  )
  const [nextImage, setNextImage] = useState()
  const [prevImage, setPrevImage] = useState()

  const handleUrlChange = () => {
    // window.history.pushState("page2 state", "Useless Title", "/photos")
  }

  // if props are not then use graphql query
  // take current id, affix it to thumbnail, scroll into view on load

  const thumbnailSelectHandler = image => {
    console.log(image)
    setSelectedImage(image)
  }

  return (
    <div className="fake-lightbox">
      <div className="row">
        <div className="col-2 d-md-block d-none thumbs">
          {props.data.contentfulPhotoGallery.gallery.map(photo => (
            <GatsbyImage
              image={photo.gatsbyImageData}
              alt="hi"
              id={photo.id}
              onClick={() => thumbnailSelectHandler(photo)}
            />
          ))}
        </div>

        <div className="close" style={{ position: "absolute", right: "5px" }}>
          <AniLink>
            <FontAwesomeIcon icon={faTimes} size="lg" color="white" />
          </AniLink>
        </div>
        <div
          className="col-md-9 col-12 main d-flex flex-row justify-content-center"
          style={{ background: "#3f364f" }}
        >
          <div
            className="photo-prev align-self-center "
            style={{ position: "absolute", left: 0, zIndex: "5" }}
          >
            <a onClick={handleUrlChange}>
              <FontAwesomeIcon icon={faAngleLeft} size="5x" />
            </a>
          </div>
          {/* feed props to image component which will change.   */}
          <GatsbyImage
            image={selectedImage.gatsbyImageData}
            alt="hi"
            id={selectedImage.id}
            style={{ height: "100vh", objectFit: "contain" }}
          />

          <div
            className="photo-next align-self-center "
            style={{ position: "absolute", right: 0, zIndex: "5" }}
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
