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
    <div>
      <h3 className="display-4">Creep Me Around The Web</h3>
      <p>Not that I am that interesting enough...</p>
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

      <div>
        <p>You can also sometimes find me on these games</p>
        <ul>
          <li> Star Stable Online (Cupcake Valley, Mira Purplewater) </li>
          <li> Howrse (International, Jennego) </li>
          <li> Topps' Disney Collect (JENNEGO) </li>
          <li> NeonMob (Jennego)</li>
        </ul>
      </div>
    </div>
  )
}

export default SocialMedia
