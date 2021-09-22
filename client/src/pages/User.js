import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { GetPhotos, PostPhoto } from '../services/PhotoServices'
import { Button, Form, Navbar, Container } from 'react-bootstrap'
import PictureCard from '../components/PictureCard'

const User = (props) => {
  const [photos, setPhotos] = useState([])
  const [formValues, setFormValues] = useState({ img: '', description: '' })

  const getUserPhotos = async () => {
    const data = await GetPhotos()
    setPhotos(data)
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const addPhotoToUser = (e) => {
    e.preventDefault()
    PostPhoto(props.user.id, formValues)
    getUserPhotos()
  }

  useEffect(() => {
    getUserPhotos()
  }, [])

  return (
    <div className="page">
      <NavLink to="/admin">Admin</NavLink>
      <Navbar className="add-photo-nav" expand={false}>
        <Container fluid>
          <Navbar.Brand>Add a new photo...</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Form
              className="bootstrap-form-contain add-photo"
              onSubmit={addPhotoToUser}
            >
              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Add Photo:</Form.Label>
                <Form.Control
                  type="text"
                  name="img"
                  placeholder="enter photo url"
                  value={formValues.img}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                {formValues.img ? (
                  <Form.Control type="file" disabled />
                ) : (
                  <Form.Control type="file" />
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Add Description:</Form.Label>
                <Form.Control
                  type="name"
                  name="description"
                  placeholder="enter description"
                  value={formValues.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="add-photo-button"
              >
                ADD
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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

export default User
