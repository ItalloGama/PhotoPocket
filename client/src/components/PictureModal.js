import React, { useState, useEffect } from 'react'
import { Modal, Button, Card, Form } from 'react-bootstrap'
import { DeletePhoto } from '../services/PhotoServices'
import { PostComment } from '../services/CommentServices'

const PictureModal = (props) => {
  const [formValues, setFormValues] = useState('')

  const deletePhoto = async () => {
    await DeletePhoto(props.pictureId)
    props.onHide()
    props.getUserPhotos()
  }

  const handleChange = (e) => {
    setFormValues(e.target.value)
  }

  const addCommentToPhoto = (e) => {
    e.preventDefault()
    PostComment(props.userId, props.pictureId, formValues)
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
      {/* <Modal.Body>
        {
          props.comments.map((comment, index) => (

          ))
        }
      </Modal.Body> */}
      <Modal.Body>
        <Form className="bootstrap-form-contain" onSubmit={addCommentToPhoto}>
          <Form.Control
            type="text"
            name="comment"
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '150px' }}
            value={formValues}
            onChange={handleChange}
          />
          <Button
            variant="primary"
            type="submit"
            className="add-comment-button"
          >
            COMMENT
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={deletePhoto}>DELETE</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PictureModal
