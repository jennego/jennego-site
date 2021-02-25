import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

const SocialMedia = props => {
  return (
    <>
      <div className="social-media-block">
        <h3 className="display-5 social-title">Around the Web</h3>
        <div className="social-media-container d-flex justify-content-center">
          <div className="social-media">
            <a href="https://www.facebook.com/jennego" target="_open">
              <FontAwesomeIcon icon={faFacebookF} size="5x" className="mr-2" />
            </a>
            <a href="https://www.instagram.com/thejennego" target="_open">
              <FontAwesomeIcon icon={faInstagram} size="5x" className="mr-2" />
            </a>
            <a href="https://github.com/jennego" target="_open">
              <FontAwesomeIcon icon={faGithubAlt} size="5x" className="mr-2" />
            </a>
            <a href="https://linkedin.com/in/jennego" target="_open">
              <FontAwesomeIcon icon={faLinkedinIn} size="5x" className="mr-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <p>You can also sometimes find me on these games</p>
        <ul>
          <li> Star Stable Online (Cupcake Valley, Mira Purplewater) </li>
          <li> Howrse (International, Jennego) </li>
          <li> Topps' Disney Collect (JENNEGO) </li>
          <li> NeonMob (Jennego)</li>
        </ul>
      </div>
    </>
  )
}

export default SocialMedia
