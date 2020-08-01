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
      Home
      <Link to={"/photo"}> Photos </Link>
      <Link to={"/page-2"}> Page 2 </Link>
      Words About
    </Menu>
  )
}

export default Nav
