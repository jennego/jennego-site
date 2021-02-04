import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import "react-lazy-load-image-component/src/effects/opacity.css"
import { Link } from "gatsby"
import { useLightbox } from "simple-react-lightbox"

const PhotoItem = props => {
  const { openLightbox, closeLightbox } = useLightbox()
  return (
    <li
      className="photo"
      onKeyDown={e => (e.key === "Enter" ? openLightbox() : "")}
      onClick={openLightbox}
    >
      <div className="hovereffect" key={props.keyid} tabIndex="0">
        {/* <a href={props.full} data-attribute="SRL"> */}
        <LazyLoadImage
          className="photo-img"
          src={props.imageSrc} // use normal <img> attributes as props
        />
        <div className="overlay"></div>
        {/* </a> */}
      </div>
    </li>
  )
}

export default PhotoItem
