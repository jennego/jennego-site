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
  backImg,
  forwardImg,
  homePath,
}) => {
  return (
    <div className="d-flex row blog-nav  justify-content-between">
      {backPath ? (
        <AniLink cover direction="right" color="rebeccapurple" to={backPath}>
          <div className="card blog-nav-card">
            {backImg ? (
              <img class="card-img" src={backImg.source_url} alt="Card image" />
            ) : (
              " "
            )}
            <div class="card-img-overlay d-flex align-items-center">
              <h5 className="ml-2">
                <span class="card-title blog-nav-title align">
                  {" "}
                  {backTitle}{" "}
                </span>
              </h5>
            </div>
          </div>
        </AniLink>
      ) : (
        <div className="card blog-nav-card blog-nav-placeholder"> </div>
      )}

      <AniLink paintDrip color="rebeccapurple" to={homePath}>
        <FontAwesomeIcon icon={faHome} size="3x" />
      </AniLink>

      {forwardPath ? (
        <AniLink cover color="rebeccapurple" direction="left" to={forwardPath}>
          <div className="card blog-nav-card">
            {forwardImg ? (
              <img
                class="card-img"
                src={forwardImg.source_url}
                alt="Card image"
              />
            ) : (
              ""
            )}
            <div class="card-img-overlay d-flex align-items-center justify-content-end">
              <h5 className="text-right mr-2">
                <span class="card-title blog-nav-title">{forwardTitle}</span>
              </h5>
            </div>
          </div>
        </AniLink>
      ) : (
        <div className="card blog-nav-card blog-nav-placeholder"> </div>
      )}
    </div>
  )
}

export default BlogNav
