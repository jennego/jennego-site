import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => (
  <footer>
    <div className="container-sm">
      <div className="row footer">
        <div className="col">
          <p className="display-4"> Jennego </p>
        </div>
        <div className="col">
          <ul class="footer-menu">
            <li>
              {" "}
              <AniLink paintDrip color="rebeccapurple" to="/">
                Home
              </AniLink>{" "}
            </li>
            <li>
              {" "}
              <AniLink paintDrip color="rebeccapurple" to="/photos">
                Photos
              </AniLink>{" "}
            </li>
            {/* <AniLink paintDrip color="rebeccapurple" to="/videos">
        Videos
      </AniLink>
      <AniLink paintDrip color="rebeccapurple" to="/web">
        Web Things
      </AniLink>
      <AniLink paintDrip color="rebeccapurple" to="/blog">
        Blog
      </AniLink> */}
            <li>
              {" "}
              <AniLink paintDrip color="rebeccapurple" to="/about">
                About
              </AniLink>{" "}
            </li>
          </ul>
        </div>
        <div className="col">
          <a href="https://www.facebook.com/jennego" target="_open">
            <FontAwesomeIcon icon={faFacebook} size="3x" className="mr-2" />
          </a>
          <a href="https://www.instagram.com/thejennego" target="_open">
            <FontAwesomeIcon icon={faInstagram} size="3x" className="mr-2" />
          </a>
          <a href="https://github.com/jennego" target="_open">
            <FontAwesomeIcon icon={faGithub} size="3x" className="mr-2" />
          </a>
        </div>
      </div>
      <div className="row footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </div>
  </footer>
)

export default Footer
