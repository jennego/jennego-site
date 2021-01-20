import React, { useState } from "react"
import Layout from "../components/layout"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"

const VideoPage = props => {
  const data = useStaticQuery(graphql`
    {
      allContentfulVideo(sort: { order: DESC, fields: date }) {
        edges {
          node {
            date
            id
            title
            thumbUrl
            videoUrl
          }
        }
      }
    }
  `)
  const { buttonLabel, className } = props
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <Layout>
      <div className="container-fluid">
        <h1>Videos</h1>
        {console.log(data)}
        <div className="row no-gutters">
          {data.allContentfulVideo.edges.map(({ node }) => (
            <div className="col-4">
              <div className="card video-thumb bg-dark border-0">
                <img className="card-img" src={node.thumbUrl} />
                <div class="d-flex card-img-overlay thumb-overlay justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    size="8x"
                    color="rgba(255, 255, 255, 0.5)"
                    className="play-icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Button color="danger" onClick={toggle}>
            HI
          </Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle} className="text-dark">
              Modal title
            </ModalHeader>
            <ModalBody>
              <p className="text-dark">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Do Something
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </Layout>
  )
}

export default VideoPage
