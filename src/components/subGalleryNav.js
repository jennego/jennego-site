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

const AlbumPhotoNav = ({ groupList, currentGalleryId }) => {
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
    <div className="d-flex  justify-content-around  align-items-center mt-4">
      {galleryIndex && galleryIndex !== 0 ? (
        <AniLink
          paintDrip
          color="rebeccapurple"
          to={`/photos/${backPath.slug}`}
        >
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faAngleLeft} size="5x" />
            <p className="mb-0"> {backPath.title} </p>
          </div>
        </AniLink>
      ) : (
        <div> </div>
      )}
      <AniLink paintDrip color="rebeccapurple" to={"/photos"}>
        <FontAwesomeIcon icon={faHome} size="3x" />
      </AniLink>
      {/*    !galleryIndex >= groupList.node.photoGalleries.length */}
      {galleryIndex ? (
        console.log("forward", forwardPath)
      ) : (
        //   <AniLink
        //     paintDrip
        //     color="rebeccapurple"
        //     to={`/photos/${forwardPath.slug}`}
        //   >
        //     <div className="d-flex align-items-center">
        //       <FontAwesomeIcon icon={faAngleRight} size="5x" />
        //       <p className="mb-0"> {forwardPath.title} </p>
        //     </div>
        //   </AniLink>
        <div> </div>
      )}
    </div>
  )
}

export default AlbumPhotoNav
