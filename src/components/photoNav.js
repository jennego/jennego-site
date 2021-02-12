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
  // if (groupIndex !== null) {
  //   photoGroupList.photoGalleries[1].map(({ node }, index) =>
  //     node.id === currentId
  //       ? arrIndex === null
  //         ? setArrIndex(parseInt(index))
  //         : arrIndex
  //       : null
  //   )
  // }

  return (
    <div className="d-flex  justify-content-around  align-items-center mt-4">
      {backPath ? (
        <AniLink
          paintDrip
          color="rebeccapurple"
          to={`/photos/${backPath.node.slug}`}
        >
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faAngleLeft} size="5x" />
            <p className="mb-0">{backTitle.node.title}</p>
          </div>
        </AniLink>
      ) : (
        <div> </div>
      )}

      <AniLink paintDrip color="rebeccapurple" to={homePath}>
        <FontAwesomeIcon icon={faHome} size="3x" />
      </AniLink>

      {forwardPath ? (
        <AniLink
          paintDrip
          color="rebeccapurple"
          to={`/photos/${forwardPath.node.slug}`}
        >
          <div className="d-flex align-items-center">
            <p className="mb-0">{forwardTitle.node.title}</p>
            <FontAwesomeIcon icon={faAngleRight} size="5x" />
          </div>
        </AniLink>
      ) : (
        <div> </div>
      )}
    </div>
  )
}

export default photoNav
