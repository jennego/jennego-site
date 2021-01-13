import { elastic as Menu } from "react-burger-menu"
import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Nav = () => {
  return (
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      disableAutoFocus
      right
    >
      <AniLink paintDrip color="rebeccapurple" to="/">
        Home
      </AniLink>
      <AniLink paintDrip color="rebeccapurple" to="/photos">
        Photos
      </AniLink>
      <AniLink paintDrip color="rebeccapurple" to="/videos">
        Videos
      </AniLink>
      <AniLink paintDrip color="rebeccapurple" to="/web">
        Web Things
      </AniLink>
      <AniLink paintDrip color="rebeccapurple" to="/blog">
        Blog
      </AniLink>
      <AniLink paintDrip color="rebeccapurple" to="/about">
        About
      </AniLink>
    </Menu>
  )
}

export default Nav
