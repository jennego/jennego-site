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
      <Link to={"/"}> Home </Link>
      <AniLink paintDrip to="/">
        Go Home
      </AniLink>

      <Link to={"/photos"}> Photos </Link>
      <Link to={"/videos"}> Videos </Link>
      <Link to={"/web"}> Web Things </Link>
      <Link to={"/blog"}> Blog </Link>
      <Link to={"/about"}> About </Link>
    </Menu>
  )
}

export default Nav
