import React from "react"

const PhotoItem = props => (
  <li className="photo">
    <div class="hovereffect">
      <a href={props.imageSrc} data-attribute="SRL">
        <img src={props.imageSrc} alt="hi" />
        <div class="overlay"></div>
      </a>
    </div>
  </li>
)

export default PhotoItem
