import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleRight,
  faAngleLeft,
  faHome,
  faImages,
} from "@fortawesome/free-solid-svg-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const photoNav = ({
  backPath,
  backTitle,
  forwardPath,
  forwardTitle,
  homePath,
}) => {
  return (
    <div className="d-flex  justify-content-around  align-items-center mt-4">
      {backPath ? (
        <AniLink paintDrip color="rebeccapurple" to={backPath}>
          <FontAwesomeIcon icon={faAngleLeft} size="5x" />
          <p>{backTitle}</p>
        </AniLink>
      ) : (
        "that is it"
      )}

      <AniLink paintDrip color="rebeccapurple" to={homePath}>
        <FontAwesomeIcon icon={faHome} size="3x" />
      </AniLink>

      {forwardPath ? (
        <AniLink paintDrip color="rebeccapurple" to={forwardPath}>
          <FontAwesomeIcon icon={faAngleRight} size="5x" />
        </AniLink>
      ) : (
        "that is it "
      )}
    </div>
  )
}

export default photoNav
