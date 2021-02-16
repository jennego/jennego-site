import React from "react"
import Layout from "../components/layout"

const WebPage = () => {
  return (
    <Layout>
      <div className="short-content">
        <div className="container-fluid">
          <h1 className="display-1">Web Things</h1>
          <p>Some fun, decidedly non-professional things I've made!</p>
          <p>
            I would like to do more web experiment toys and basic horse-related
            games.
          </p>
          <h2>Hangman</h2>
          <a
            className="btn-primary btn"
            href="http://webthings.jennego.com/hangman/"
            target="_open"
          >
            Play Hangman (horse breeds)
          </a>
          <p>
            {" "}
            Assets were provided. Early project with JQuery. Horse breeds theme!
          </p>
          <br></br>
          <p>
            {" "}
            More coming when I can find them or when I actually make some
            things.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default WebPage
