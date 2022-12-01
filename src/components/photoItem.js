import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useLightbox } from "simple-react-lightbox"
// import FsLightbox from "fslightbox-react"

const PhotoItem = props => {
  const { openLightbox, closeLightbox } = useLightbox()
  let [CurrentIndex, setCurrentIndex] = useState(0)

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

  const openLightboxAt = number => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    })
    console.log(lightboxController)
  }

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
