import React, { useState, useEffect } from 'react'
import { Modal, Button, Card } from 'react-bootstrap'
import { DeletePhoto } from '../services/PhotoServices'

const PictureModal = (props) => {
  const deletePhoto = async () => {
    await DeletePhoto(props.pictureId)
    props.onHide()
    props.getUserPhotos()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <p>{props.description}</p>
      </Modal.Header>
      <Modal.Body>
        <Card className="bg-dark text-white">
          <Card.Img src={props.img} alt={props.description} fluid />
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={deletePhoto}>DELETE</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PictureModal
