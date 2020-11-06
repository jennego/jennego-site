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
      <Link to={"/page-2"}> Page 2 </Link>
    </Menu>
  )
}

export default Nav
