import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const PhotoList = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPhotoGallery {
        edges {
          node {
            id
            title
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
    }
  `)
  return (
    <div>
      {console.log(data.allContentfulPhotoGallery.edges)}
      {data.allContentfulPhotoGallery.edges.map(({ node }) => (
        <Link>
          <div className="col-4">
            <div className="card album">
              <img
                class="card-img"
                src={node.albumPhoto.sizes.src}
                alt="Card image"
              />
              <div class="card-img-overlay overlay-gradient">
                <h5 class="card-title">{node.title}</h5>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PhotoList
