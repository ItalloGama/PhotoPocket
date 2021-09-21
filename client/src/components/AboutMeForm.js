import React from 'react'
import axios from 'axios'
import { Form } from './bootstrap'

const AboutMeForm = ({ props }) => {
  return (
    <div class="form-floating">
      <textarea
        class="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
        style="height: 100px"
      ></textarea>
      <label for="floatingTextarea2">Comments</label>
      <button onClick={postAboutme}>Post</button>
    </div>
  )
}
export default AboutMeForm
