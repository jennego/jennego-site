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
            updatedAt
            photoGroup {
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
        {console.log(data)}
        <h1 className="display-2">Photography</h1>
        <div className="row">
          {data.allContentfulPhotoGallery.edges.map(({ node }) => (
            <div className="cold-sm-12 col-md-6 col-lg-4">
              <Link to={node.slug}>
                <div className="card album hover-zoom-in">
                  <img
                    className="card-img "
                    src={node.albumPhoto.sizes.src}
                    alt="Card image"
                  />
                  <div class="card-img-overlay overlay-gradient">
                    <h5 class="card-title text-white photo-list-title">
                      {node.title}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default PhotoList
