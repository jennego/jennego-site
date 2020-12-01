import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"

const PhotoList = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPhotoGallery {
        edges {
          node {
            id
            title
            slug
            photo_group {
              id
              title
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
            groupCoverPhoto {
              id
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
  return (
    <Layout>
      <div className="container-fluid">
        <h1>Photography</h1>
        {data.allContentfulPhotoGallery.edges.map(({ node }) => (
          <div className="col-4">
            <Link to={node.slug}>
              <div className="card album hover-zoom-in">
                <img
                  className="card-img "
                  src={node.albumPhoto.sizes.src}
                  alt="Card image"
                />
                <div class="card-img-overlay overlay-gradient">
                  <h5 class="card-title text-white">{node.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default PhotoList
