import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const photoCard = ({ photo, title, slug }) => (
  <div className="cold-sm-12 col-md-6 col-lg-4">
    <AniLink paintDrip color="rebeccapurple" to={slug}>
      <div className="card album hover-zoom-in">
        <img className="card-img" src={photo} alt={title} />
        <div class="card-img-overlay overlay-gradient">
          <h5 class="card-title text-white photo-list-title">{title}</h5>
        </div>
      </div>
    </AniLink>
  </div>
)

export default photoCard
