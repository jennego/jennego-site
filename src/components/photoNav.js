import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleRight,
  faAngleLeft,
  faHome,
  faImages,
} from "@fortawesome/free-solid-svg-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// lower to 3 props for paths
// pass in photogroup as a prop (may need to duplicate this component)

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
        <AniLink
          cover
          direction="right"
          color="rebeccapurple"
          to={`/photos/${backPath.node.slug}`}
        >
          <div className="d-flex align-items-center  photo-nav-item justify-content-start">
            <FontAwesomeIcon icon={faAngleLeft} size="5x" />
            <p className="mb-0 d-none d-sm-block">{backTitle.node.title}</p>
          </div>
        </AniLink>
      ) : (
        <div className="photo-nav-item"> </div>
      )}
      <div className="photo-nav-item d-flex justify-content-center">
        <AniLink paintDrip color="rebeccapurple" to={homePath}>
          <FontAwesomeIcon icon={faHome} size="3x" />
        </AniLink>
      </div>

      {forwardPath ? (
        <AniLink
          cover
          direction="left"
          color="rebeccapurple"
          to={`/photos/${forwardPath.node.slug}`}
        >
          <div className="d-flex align-items-center photo-nav-item justify-content-end">
            <p className="mb-0 d-none d-sm-block">{forwardTitle.node.title}</p>
            <FontAwesomeIcon icon={faAngleRight} size="5x" />
          </div>
        </AniLink>
      ) : (
        <div className="photo-nav-item"> </div>
      )}
    </div>
  )
}

export default photoNav
