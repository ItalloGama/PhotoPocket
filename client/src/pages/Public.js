import React, { useState, useEffect } from 'react'
import { GetPublicData } from '../services/PublicServices'
import { GetPhotos } from '../services/PhotoServices'
import { Nav } from 'react-bootstrap'
import PictureCard from '../components/PictureCard'
import facebook from '../screenshot/icons8-facebook-64.png'
import instagram from '../screenshot/icons8-instagram-64.png'
import twitter from '../screenshot/icons8-twitter-64.png'

const Public = (props) => {
  const [photos, setPhotos] = useState([])
  const [userData, setUserData] = useState({})
  const { user_id } = props.match.params

  const getUserPhotos = async (id) => {
    const data = await GetPhotos(id)
    setPhotos(data)
  }

  const getUserData = async (id) => {
    const data = await GetPublicData(id)
    setUserData(data[0])
  }

  useEffect(() => {
    getUserPhotos(user_id)
    getUserData(user_id)
  }, [])

  return (
    <div className="page">
      <div className="social-container">
        {userData.facebook && (
          <a href={userData.facebook} target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
        )}
        {userData.instagram && (
          <a href={userData.instagram} target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
        )}
        {userData.twitter && (
          <a href={userData.twitter} target="_blank">
            <img src={twitter} alt="twitter" />
          </a>
        )}
      </div>
      <div className="photoCard">
        {photos.map((photo, index) => (
          <PictureCard
            publicUserId={props.user.id}
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
