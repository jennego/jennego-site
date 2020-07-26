import React from "react"
import Img from "gatsby-image"

const PhotoItem = props => (
  <li className="photo">
    <div class="hovereffect">
      <a href={props.imageSrc} data-attribute="SRL">
        <img className="photo-img" src={props.imageSrc} alt="hi" />
        <div class="overlay"></div>
      </a>
    </div>
  </li>
)

export default PhotoItem
