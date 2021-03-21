import React, { useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { GatsbyImage } from "gatsby-plugin-image"
import "react-lazy-load-image-component/src/effects/blur.css"
import "react-lazy-load-image-component/src/effects/opacity.css"
import { Link } from "gatsby"
import { useLightbox } from "simple-react-lightbox"

const PhotoItem = props => {
  const { openLightbox, closeLightbox } = useLightbox()
  let [CurrentIndex, setCurrentIndex] = useState(0)

  return (
    <li
      className={`photo ${props.rowClassName ? props.rowClassName : ""}`}
      onKeyDown={e => (e.key === "Enter" ? setCurrentIndex(props.index) : "")}
      onKeyUp={e => (e.key === "Enter" ? openLightbox(CurrentIndex) : "")}
    >
      <div className="hovereffect" key={props.keyid} tabIndex="0">
        <a href={props.full} data-attribute="SRL">
          <GatsbyImage
            alt="hi"
            imgClassName="photo-img"
            className="gallery-wrapper"
            image={props.imageSrc}
          />
          <div className="hovereffect photo-overlay"></div>
        </a>
      </div>
      {/* <div className="hovereffect" key={props.keyid} tabIndex="0">
        <a href={props.full} data-attribute="SRL">
          {console.log(CurrentIndex)}
          <img
            className="photo-img"
            effect="opacity"
            src={props.full} // use normal <img> attributes as props
          />
          <div className="hovereffect photo-overlay"></div>
        </a>
      </div> */}
      {/* <div className="hovereffect" key={props.keyid} tabIndex="0">
        <a href={props.full} data-attribute="SRL">
          {console.log(CurrentIndex)}
          <LazyLoadImage
            className="photo-img"
            effect="opacity"
            src={props.imageSrc} // use normal <img> attributes as props
          />
          <div className="hovereffect photo-overlay"></div>
        </a>
      </div> */}
    </li>
  )
}

export default PhotoItem
