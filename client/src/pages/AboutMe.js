import { React, useState } from 'react'
import AboutMeForm from '../components/AboutMeForm'
import axios from 'axios'

const AboutMe = () => {
  const [aboutme, setAboutme] = useState([])

  const postAboutMe = (e) => {
    console.log('Posted')
  }

  const handleSubmit = (e) => {
    setFormValues({ ...formValues, [e.target.value]: e.target.value })
  }

  return (
    <div>
      Tell us about yourself.
      <div>
        <AboutMeForm
          userName={aboutMe.name}
          postContent={aboutMe.content}
          handleSubmit={handleSubmit}
          postAboutMe={postAboutMe}
        />
      </div>
    </div>
  )
}

export default AboutMe
