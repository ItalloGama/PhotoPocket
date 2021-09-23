import React, { useState, useEffect } from 'react'
import { GetPublicPhotos } from '../services/PublicServices'
import PictureCard from '../components/PictureCard'

const Public = (props) => {
  const [photos, setPhotos] = useState([])
  console.log(props)
  const { user_id } = props.match.params

  const getUserPhotos = async (id) => {
    const data = await GetPublicPhotos(id)
    setPhotos(data)
  }

  useEffect(() => {
    getUserPhotos(user_id)
  }, [])

  return (
    <div className="page">
      <div className="photoCard">
        {photos.map((photo, index) => (
          <PictureCard
            pictureId={photo.id}
            userId={photo.userId}
            img={photo.img}
            description={photo.description}
            key={index}
            getUserPhotos={getUserPhotos}
          />
        ))}
      </div>
    </div>
  )
}

export default Public
