import React, { useState, useEffect } from "react"
const [arrIndex, setArrIndex] = useState(0)

photoNavData = (currentId, combinedPhotoList) => {
  console.log(pageContext.combinedPhotoList, currentId)

  pageContext.combinedPhotoList
    ? pageContext.combinedPhotoList.map(({ node }, index) =>
        node.id === currentId ? setArrIndex(index) : null
      )
    : ""

  // const next =
  //   arrIndex < pageContext.combinedPhotoList.length
  //     ? {
  //         title: pageContext.combinedPhotoList[arrIndex + 1].title,
  //         url: pageContext.combinedPhotoList[arrIndex + 1].slug,
  //       }
  //     : null

  return console.log(next)
}

export default photoNavData
