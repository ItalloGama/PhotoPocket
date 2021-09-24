import React from 'react'
import axios from 'axios'
import { form, textarea, button } from 'react-bootstrap'

const AboutMeForm = (props) => {
  return (
    <div class="form-floating">
      <textarea
        class="form-control"
        placeholder="Tell us about yourself"
        id="floatingTextarea2"
        style="height: 100px"
      ></textarea>
      <label for="floatingTextarea2">About Me</label>
      <button onClick={postAboutme}>Post</button>
    </div>
  )
}
//awdawdawdawd
export default AboutMeForm
