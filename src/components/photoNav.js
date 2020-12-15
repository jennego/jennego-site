import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleRight,
  faAngleLeft,
  faHome,
} from "@fortawesome/free-solid-svg-icons"

const photoNav = () => {
  return (
    <div className="d-flex  justify-content-around mt-3 position-sticky">
      <FontAwesomeIcon icon={faAngleLeft} size="5x" />
      <FontAwesomeIcon icon={faHome} size="3x" />
      <FontAwesomeIcon icon={faAngleRight} size="5x" />
    </div>
  )
}

export default photoNav
