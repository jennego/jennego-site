import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleRight,
  faAngleLeft,
  faHome,
  faImages,
} from "@fortawesome/free-solid-svg-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const photoNav = ({ backPath, forwardPath, homePath }) => {
  return (
    <div className="d-flex  justify-content-around  align-items-center mt-4">
      <AniLink paintDrip color="rebeccapurple" to={backPath}>
        <FontAwesomeIcon icon={faAngleLeft} size="5x" />
      </AniLink>
      <AniLink paintDrip color="rebeccapurple" to={homePath}>
        <FontAwesomeIcon icon={faHome} size="3x" />
      </AniLink>
      <AniLink paintDrip color="rebeccapurple" to={forwardPath}>
        <FontAwesomeIcon icon={faAngleRight} size="5x" />
      </AniLink>
    </div>
  )
}

export default photoNav
