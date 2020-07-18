import { elastic as Menu } from "react-burger-menu"
import React from "react"

const Nav = () => {
  const showSettings = e => {
    e.preventDefault()
  }
  return (
    <Menu
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      disableAutoFocus
      right
    >
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a onClick={showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  )
}

export default Nav
