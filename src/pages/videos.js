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
      allContentfulVideo(sort: { date: DESC }) {
        edges {
          node {
            date
            id
            title
            thumbUrl
            videoUrl
            thumbFile {
              id
              url
            }
          }
        }
      }
    }
  `)
  const [modal, setModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(0)

  const toggle = item => {
    setSelectedItem(item)
    setModal(!modal)
    console.log(selectedItem)
  }

  const toggleOnly = () => {
    setModal(!modal)
  }

  const closeBtn = (
    <button
      className="close btn-close btn-close-white"
      onClick={toggle}
      type="button"
    ></button>
  )
  return (
    <Layout>
      <div className="container-fluid">
        <h1 className="display-2">Videos</h1>
        {/* {console.log(data)} */}
        <div className="row no-gutters mb-3">
          {data.allContentfulVideo.edges.map(({ node }, number) => (
            <>
              <div className="col-xl-4 col-lg-6 col-md-6 col-xs-12 ">
                <a href="#" onClick={() => toggle(number)}>
                  <div
                    className="card vid-card video-thumb border-0"
                    style={{ background: "rgb(49, 9, 87)" }}
                  >
                    <div className="card-img-top">
                      <img
                        className="card-img video-thumb-img"
                        src={node.thumbUrl ? node.thumbUrl : node.thumbFile.url}
                      />
                      <div className="d-flex card-img-overlay thumb-overlay justify-content-center align-items-center">
                        <FontAwesomeIcon
                          icon={faPlayCircle}
                          size="8x"
                          color="rgba(45, 139, 247, 0)"
                          className="play-icon"
                        />
                      </div>
                    </div>
                    {/* <h2 className="video-title card-title">{node.title}</h2> */}
                  </div>
                </a>
              </div>
            </>
          ))}
          <Modal isOpen={modal} toggle={toggleOnly} className="modal-lg">
            <ModalHeader toggle={toggleOnly} close={closeBtn}>
              <h2
                dangerouslySetInnerHTML={{
                  __html: `${data.allContentfulVideo.edges[selectedItem].node.title}`,
                }}
              ></h2>
            </ModalHeader>
            <ModalBody>
              <ResponsiveEmbed
                src={data.allContentfulVideo.edges[selectedItem].node.videoUrl}
                allowFullScreen
              />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </Modal>
        </div>
      </div>
    </Layout>
  )
}

export default VideoPage
