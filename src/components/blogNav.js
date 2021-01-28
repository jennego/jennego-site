import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleRight,
  faAngleLeft,
  faHome,
  faImages,
} from "@fortawesome/free-solid-svg-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogNav = ({
  backPath,
  backTitle,
  forwardPath,
  forwardTitle,
  homePath,
}) => {
  return (
    <div className="d-flex row blog-nav  justify-content-between">
      {backPath ? (
        <AniLink paintDrip color="rebeccapurple" to={backPath}>
          <div className="card blog-nav-card">
            {/* <img class="card-img" src={} alt="Card image" /> */}
            <div class="card-img-overlay d-flex align-items-center">
              <h5>
                <span class="card-title blog-nav-title align">Card title </span>
              </h5>
            </div>
          </div>
        </AniLink>
      ) : (
        <div> </div>
      )}

      <AniLink paintDrip color="rebeccapurple" to={homePath}>
        <FontAwesomeIcon icon={faHome} size="3x" />
      </AniLink>

      {forwardPath ? (
        <AniLink paintDrip color="rebeccapurple" to={forwardPath}>
          <div className="card blog-nav-card">
            {/* <img class="card-img" src={} alt="Card image" /> */}
            <div class="card-img-overlay d-flex align-items-center justify-content-end">
              <h5>
                <span class="card-title blog-nav-title text-left">
                  Card title
                </span>
              </h5>
            </div>
          </div>
        </AniLink>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default BlogNav
