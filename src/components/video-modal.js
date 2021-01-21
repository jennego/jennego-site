import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import ResponsiveEmbed from "react-responsive-embed"

const VideoModal = ({ videoUrl, title }) => {
  return (
    <Modal isOpen={modal} toggle={toggle} className="modal-lg">
      <ModalHeader toggle={toggle}>
        <h2 dangerouslySetInnerHTML={{ __html: `${title}` }}></h2>
      </ModalHeader>
      <ModalBody>
        {/* <ResponsiveEmbed src={videoUrl} allowFullScreen /> */}
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  )
}

export default VideoModal
