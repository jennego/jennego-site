import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const PhotoItem = props => {
  const lightbox = {
    buttons: { showDownloadButton: false },
    thumbnails: {
      thumbnailsPosition: "left",
    },
  }

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 0,
  })

  return (
    <>
      <div key={props.keyid} tabIndex="0" className="photo-hover">
        <GatsbyImage
          alt="hi"
          imgClassName="photo-img"
          className="gallery-photo-wrapper"
          image={props.imageSrc}
        />
        <div className="photo-overlay"></div>
      </div>
    </>
  )
}

export default PhotoItem
