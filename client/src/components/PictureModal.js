import React, { useState, useEffect } from 'react'
import { Modal, Button, Card, Form, Image } from 'react-bootstrap'
import { DeletePhoto } from '../services/PhotoServices'
import { PostComment } from '../services/CommentServices'
import CommentCard from './CommentCard'

const PictureModal = (props) => {
  const [formValues, setFormValues] = useState('')

  const deletePhoto = async () => {
    await DeletePhoto(props.pictureId)
    props.onHide()
    props.getUserPhotos(props.userId)
  }

  const handleChange = (e) => {
    setFormValues(e.target.value)
  }

  const addCommentToPhoto = async (e) => {
    e.preventDefault()
    await PostComment(props.publicUserId, props.pictureId, formValues)
    props.getPhotoComments()
    setFormValues('')
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
        <Image src={props.img} alt={props.description} fluid />
      </Modal.Body>
      <Modal.Body>
        {props.comments.map((comment, index) => (
          <CommentCard
            commentId={comment.id}
            comment={comment.comment}
            name={comment.User.name}
            getPhotoComments={props.getPhotoComments}
            showModal={props.showModal}
          />
        ))}
      </Modal.Body>
      <Modal.Body>
        <Form className="bootstrap-form-contain" onSubmit={addCommentToPhoto}>
          <Form.Control
            className="field-decoration-modal"
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
        {props.publicUserId === props.userId ? (
          <Button onClick={deletePhoto}>DELETE</Button>
        ) : undefined}
      </Modal.Footer>
    </Modal>
  )
}

export default PictureModal
