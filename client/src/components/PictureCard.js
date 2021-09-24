import { React, useState } from 'react'
import { Card, Modal, Image } from 'react-bootstrap'
import PictureModal from './PictureModal'
import { GetComments } from '../services/CommentServices'

function PictureCard(props) {
  const [modalShow, setModalShow] = useState(false)
  const [comments, setComments] = useState([])

  const getPhotoComments = async () => {
    const data = await GetComments(props.pictureId)
    setComments(data)
  }

  const showModal = () => {
    setModalShow(true)
    getPhotoComments()
  }

  const hideModal = () => {
    setModalShow(false)
    setComments([])
  }

  return (
    <div>
      <Image
        src={props.img}
        onClick={showModal}
        alt={props.description}
        className="page-card"
        fluid
      />
      <PictureModal
        publicUserId={props.publicUserId}
        pictureId={props.pictureId}
        userId={props.userId}
        img={props.img}
        getPhotoComments={getPhotoComments}
        comments={comments}
        description={props.description}
        show={modalShow}
        onHide={hideModal}
        showModal={showModal}
        getUserPhotos={props.getUserPhotos}
      />
    </div>
  )
}

export default PictureCard
