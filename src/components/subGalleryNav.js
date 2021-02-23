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

const AlbumPhotoNav = ({ groupList, currentGalleryId, groupSlug }) => {
  const [galleryIndex, setGalleryIndex] = useState(null)
  if (currentGalleryId !== null) {
    groupList.node.photoGalleries.map((g, index) =>
      g.id === currentGalleryId
        ? galleryIndex === null
          ? setGalleryIndex(parseInt(index))
          : galleryIndex
        : null
    )
  }

  // galleryIndex === 0
  let backPath = groupList.node.photoGalleries[galleryIndex - 1]

  // galleryIndex >= groupList.node.photoGalleries.length
  let forwardPath = groupList.node.photoGalleries[galleryIndex + 1]

  console.log("gallery index", galleryIndex)

  // console.log("back", backPath)
  // console.log("next", forwardPath)

  return (
    <div className="mt-4 d-flex align-items-center justify-content-around">
      {galleryIndex && galleryIndex !== 0 ? (
        <AniLink
          cover
          direction="right"
          color="rebeccapurple"
          to={`/photos/${backPath.slug}`}
        >
          <div className="d-flex align-items-center flex-grow-1  photo-nav-item justify-content-start ">
            <FontAwesomeIcon icon={faAngleLeft} size="5x" />
            <p className="mb-0 d-none d-sm-block"> {backPath.title} </p>
          </div>
        </AniLink>
      ) : (
        <div className="photo-nav-item"> </div>
      )}
      <div className="d-flex  justify-content-center  photo-nav-item ">
        <AniLink paintDrip color="rebeccapurple" to={`/photos/${groupSlug}`}>
          <FontAwesomeIcon icon={faHome} size="3x" />
        </AniLink>
      </div>
      {/*    !galleryIndex >= groupList.node.photoGalleries.length */}
      {galleryIndex !== null && forwardPath !== undefined ? (
        <AniLink
          cover
          direction="left"
          color="rebeccapurple"
          to={`/photos/${forwardPath.slug}`}
        >
          <div className="d-flex align-items-center  photo-nav-item justify-content-end">
            <p className="mb-0 d-none d-sm-block"> {forwardPath.title} </p>
            <FontAwesomeIcon icon={faAngleRight} size="5x" />
          </div>
        </AniLink>
      ) : (
        <div className=" photo-nav-item "></div>
      )}
    </div>
  )
}

export default AlbumPhotoNav
