import React {useState,useEffect} from 'react'
import AboutMeForm from '../components/AboutMeForm'
import axios from 'axios'
import { useEffect } from 'react'



const AboutMe = () => {
const [aboutme, setAboutme] = useState([])
  
const postAboutMe = async () => {
  const res = await axios.post('')
  setAboutMe
}
useEffect(() => {
  getAboutMe()
}, [])

consthandleSubmit = (e) => {
  setFormValues({...formValues,[e.target.value]:e.target.value})
}

return (

    <div>
      Tell us about yourself.
      <div>
    <AboutMeForm
    />
      </div>
    </div>
  )
}

export default AboutMe