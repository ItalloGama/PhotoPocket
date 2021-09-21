import { React, useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import PictureModal from './PictureModal'

function PictureCard(props) {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div>
      <Card className="bg-dark text-white" onClick={() => setModalShow(true)}>
        <Card.Img src={props.img} alt={props.description} />
      </Card>
      <PictureModal
        pictureId={props.pictureId}
        userId={props.userId}
        img={props.img}
        description={props.description}
        show={modalShow}
        onHide={() => setModalShow(false)}
        getUserPhotos={props.getUserPhotos}
      />
    </div>
  )
}

export default PictureCard
