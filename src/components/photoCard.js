import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"

const photoCard = ({ photo, title, slug }) => (
  <div className="cold-sm-12 col-md-6 col-lg-4">
    <AniLink paintDrip color="rebeccapurple" to={`/photos/${slug}`}>
      <div className="card album hover-zoom-in">
        <GatsbyImage
          imgClassName="card-img"
          image={photo}
          alt={title}
          objectFit="cover"
        />
        {console.log(photo)}
        <div className="card-img-overlay overlay-gradient">
          <h5 className="card-title text-white photo-list-title">{title}</h5>
        </div>
      </div>
    </AniLink>
  </div>
)

export default photoCard
