import { elastic as Menu } from "react-burger-menu"
import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      disableAutoFocus
      right
    >
      <Link to={"/"}> Home </Link>
      <Link to={"/photos"}> Photos </Link>
      <Link to={"/videos"}> Videos </Link>
      <Link to={"/web"}> Web Things </Link>
      <Link to={"/blog"}> Blog </Link>
      <Link to={"/about"}> About </Link>
    </Menu>
  )
}

export default Nav
