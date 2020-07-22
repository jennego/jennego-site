import React from "react"

const PhotoItem = props => (
  <li className="photo">
    <div class="hovereffect">
      <img src={props.imageSrc} />
      <div class="overlay"></div>
    </div>
  </li>
)

export default PhotoItem
