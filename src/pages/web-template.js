import React from "react"
import Layout from "../components/layout"
import ResponsiveEmbed from "react-responsive-embed"

const WebTemplate = props => {
  return (
    <Layout>
      <div className="row no-gutters">
        <div className="col-3">
          <h1> Name </h1>
          <img
            src="https://source.unsplash.com/random"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col">
          <div className="container-fluid">
            [animated gif]
            <br></br>
            <div className="btn btn-primary btn-lg">Play This</div>
            <p>
              {" "}
              My first game. Programing and level design by me with assets from
              various sources.
            </p>
            <div>
              Tech: Phaser 3, Webpack
              <br />
              Assets from: <br />
              Github Link <br />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WebTemplate
