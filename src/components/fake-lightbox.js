import React, { useState } from "react"
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
  const handleUrlChange = () => {
    window.history.pushState("page2 state", "Useless Title", "/photos")
    console.log("hi")
  }

  return (
    <div className="fake-lightbox">
      <div className="row">
        <div className="col-1 thumbs">
          {" "}
          {/* hide on mobile */}
          Thumbs
        </div>
        <div className="col-1 photo-prev">
          <a onClick={handleUrlChange}>
            <FontAwesomeIcon icon={faAngleLeft} size="5x" />
          </a>
        </div>

        <div className="col main">
          {/* feed props to image component which will change   */}
          <img src="https://source.unsplash.com/random" className="img-fluid" />
        </div>
        <div className="col-1 photo-next">
          <a onClick={handleUrlChange}>
            <FontAwesomeIcon icon={faAngleRight} size="5x" />
          </a>
        </div>

        <AniLink>
          <FontAwesomeIcon icon={faTimes} size="5x" />
        </AniLink>
      </div>
    </div>
  )
}

export default FakeLightbox
