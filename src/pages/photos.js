import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
              sizes {
                src
              }
            }
            textRowPhotos {
              id
            }
            firstRow {
              id
              sizes {
                src
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
              sizes {
                src
              }
            }
            photoGalleries {
              title
              albumPhoto {
                sizes {
                  src
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

  let combinedPhotosList = [].concat(
    filteredPhotoGalleries,
    data.allContentfulPhotoGroup.edges
  )

  // order by last updated date
  // THIS MAY NOT WORK. TEST with more data!

  let sortedPhotosByDate = combinedPhotosList.sort(function (a, b) {
    return a.node.updatedAt - b.node.updatedAt
  })

  return (
    <Layout>
      <div className="container-fluid">
        {console.log(data)}
        {console.log(combinedPhotosList)}

        <h1 className="display-2">Photography</h1>
        <div className="row mb-3">
          {sortedPhotosByDate.map(({ node }) => (
            <div className="cold-sm-12 col-md-6 col-lg-4">
              <AniLink paintDrip color="rebeccapurple" to={node.slug}>
                <div className="card album hover-zoom-in">
                  <img
                    className="card-img"
                    src={
                      node.albumPhoto
                        ? node.albumPhoto.sizes.src
                        : node.groupCoverPhoto.sizes.src
                    }
                    alt="Card image"
                  />
                  <div class="card-img-overlay overlay-gradient">
                    <h5 class="card-title text-white photo-list-title">
                      {node.title}
                    </h5>
                  </div>
                </div>
              </AniLink>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default PhotoList
