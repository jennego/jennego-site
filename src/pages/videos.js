import React, { useState } from "react"
import Layout from "../components/layout"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons"
import ResponsiveEmbed from "react-responsive-embed"
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
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <Layout>
      <div className="container-fluid">
        <h1>Videos</h1>
        {console.log(data)}
        <div className="row no-gutters">
          {data.allContentfulVideo.edges.map(({ node }) => (
            <>
              <div className="col-4">
                <div
                  className="card video-thumb bg-dark border-0"
                  onClick={toggle}
                  onKeyDown={toggle}
                >
                  <img className="card-img" src={node.thumbUrl} />
                  <div class="d-flex card-img-overlay thumb-overlay justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      size="8x"
                      color="rgba(45, 139, 247, 0)"
                      className="play-icon"
                    />
                  </div>
                </div>
              </div>

              <Modal isOpen={modal} toggle={toggle} className="modal-lg">
                <ModalHeader toggle={toggle}>
                  <h2
                    dangerouslySetInnerHTML={{ __html: `${node.title}` }}
                  ></h2>
                </ModalHeader>
                <ModalBody>
                  <ResponsiveEmbed src={node.videoUrl} allowFullScreen />
                </ModalBody>
                <ModalFooter></ModalFooter>
              </Modal>
            </>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default VideoPage
