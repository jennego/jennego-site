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
      <AniLink
        paintDrip
        color="rebeccapurple"
        to="/"
        getProps={({ isCurrent }) => {
          return isCurrent ? { className: "active-menu-link bm-item" } : null
        }}
      >
        Home
      </AniLink>
      <AniLink
        paintDrip
        color="rebeccapurple"
        to="/photos"
        getProps={({ isPartiallyCurrent }) => {
          return isPartiallyCurrent
            ? { className: "active-menu-link bm-item" }
            : null
        }}
      >
        Photos
      </AniLink>
      <AniLink
        paintDrip
        color="rebeccapurple"
        to="/videos"
        getProps={({ isPartiallyCurrent }) => {
          return isPartiallyCurrent
            ? { className: "active-menu-link bm-item" }
            : null
        }}
      >
        Videos
      </AniLink>
      <AniLink
        paintDrip
        color="rebeccapurple"
        to="/web"
        getProps={({ isPartiallyCurrent }) => {
          return isPartiallyCurrent
            ? { className: "active-menu-link bm-item" }
            : null
        }}
      >
        Web Things
      </AniLink>
      <AniLink
        paintDrip
        color="rebeccapurple"
        to="/blog"
        getProps={({ isPartiallyCurrent }) => {
          return isPartiallyCurrent
            ? { className: "active-menu-link bm-item" }
            : null
        }}
      >
        Blog
      </AniLink>
      <AniLink
        paintDrip
        color="rebeccapurple"
        to="/about"
        getProps={({ isPartiallyCurrent }) => {
          return isPartiallyCurrent
            ? { className: "active-menu-link bm-item" }
            : null
        }}
      >
        About
      </AniLink>
    </Menu>
  )
}

export default Nav
