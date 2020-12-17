import React from "react"

const Footer = () => (
  <footer>
    <div className="container-sm">
      <div className="row footer">
        <div className="col">
          <p> Jennego </p>
        </div>
        <div className="col">
          <ul class="footer-menu">
            <li> About </li>
            <li> Photos </li>
            <li> Videos </li>
            <li> Web Things </li>
          </ul>
        </div>
        <div className="col">Social Media </div>
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
