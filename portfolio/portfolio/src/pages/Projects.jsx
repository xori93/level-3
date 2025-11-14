import React from 'react'
import moodDiary from "../assets/mood-diary.png"
import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <div>
      <div className='flex'>
        <Link to="https://xori-mood-diary.netlify.app/" target="_blank"><img src={moodDiary} alt="" /></Link>

      </div>

    </div>
  )
}

export default Projects