import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PhotoNav from "../components/photoNav"
import OnImagesLoaded from "react-on-images-loaded"

export const query = graphql`
  query photoGroupQuery($id: String!) {
    contentfulPhotoGroup(id: { eq: $id }) {
      id
      slug
      title
      textBlock {
        json
      }
      photoGalleries {
        slug
        title
        id
        albumPhoto {
          fluid {
            src
          }
        }
      }
    }
  }
`

const PhotoList = props => {
  const { data, errors, pageContext } = props

  return (
    <Layout>
      <div className="container-fluid">
        <h1> {data.contentfulPhotoGroup.title} </h1>

        {/* <OnImagesLoaded
          onLoaded={this.runAfterImagesLoaded}
          onTimeout={this.runTimeoutFunction}
          timeout={7000}
        > */}
        <div className="row">
          {console.log(data)}
          {data.contentfulPhotoGroup.photoGalleries.map(node => (
            <div className="cold-sm-12 col-md-6 col-lg-4">
              <AniLink
                paintDrip
                color="rebeccapurple"
                to={`/photos/` + node.slug}
              >
                <div className="card album hover-zoom-in">
                  <img
                    className="card-img"
                    src={node.albumPhoto.fluid.src}
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
        {/* </OnImagesLoaded> */}
        <PhotoNav></PhotoNav>
      </div>
    </Layout>
  )
}

export default PhotoList
