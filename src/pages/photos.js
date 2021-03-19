import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PhotoCard from "../components/photoCard"

const PhotoList = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPhotoGallery {
        edges {
          node {
            id
            title
            slug
            updatedAt
            photo_group {
              id
              title
              slug
            }
            albumPhoto {
              file {
                url
              }
            }
            textRowPhotos {
              id
            }
            firstRow {
              id
              file {
                url
              }
            }
          }
        }
      }
      allContentfulPhotoGroup {
        edges {
          node {
            title
            slug
            id
            updatedAt
            groupCoverPhoto {
              id
              file {
                url
              }
            }
            photoGalleries {
              title
              albumPhoto {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  // filter out photo galleries with photo group if !== null

  let filteredPhotoGalleries = data.allContentfulPhotoGallery.edges.filter(
    ({ node }) => node.photo_group == null
  )
  // combine photo groups and photo galleries into a single array

  let combinedPhotosList = []
    .concat(filteredPhotoGalleries, data.allContentfulPhotoGroup.edges)
    .sort(function (a, b) {
      return a.node.date - b.node.date
    })

  // order by last updated date
  // THIS MAY NOT WORK. TEST with more data!

  return (
    <Layout>
      <div className="container-fluid">
        {console.log("combined photos list", combinedPhotosList)}

        <h1 className="display-2">Photography</h1>
        <div className="row mb-3">
          {combinedPhotosList.map(({ node }) => (
            <PhotoCard
              photo={
                node.albumPhoto
                  ? node.albumPhoto.file.url
                  : node.groupCoverPhoto.file.url
              }
              slug={node.slug}
              title={node.title}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default PhotoList
