import React from "react"

const PhotoItem = props => (
  <li className={props.order}>
    <img class="galley-img" src={props.imageSrc} />
  </li>
)

export default PhotoItem
