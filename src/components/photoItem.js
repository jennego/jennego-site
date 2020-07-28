import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import "react-lazy-load-image-component/src/effects/opacity.css"

const PhotoItem = props => (
  <li className="photo">
    <div class="hovereffect">
      <a href={props.full} data-attribute="SRL">
        <LazyLoadImage
          className="photo-img"
          src={props.imageSrc} // use normal <img> attributes as props
        />
        <div class="overlay"></div>
      </a>
    </div>
  </li>
)

export default PhotoItem
