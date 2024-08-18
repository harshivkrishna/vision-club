import React from 'react'
import './talent.css'

import talentImg from '../assets/news/fontpage1.png'

const Talent = () => {
  return (
    <div className="talent">
    <div className='talent-parent'>
        <div className="talent-container-left">
            <h1>CIT Talentinas</h1>
            <p>At Chennai Institute of Technology (CIT), we believe that our students are more than just learners they are innovators, creators, and leaders of tomorrow. Our Talentinas represent the best of CIT's vibrant community, showcasing the exceptional skills, creativity, and dedication that define our student body.</p>
        </div>
        <div className="talent-container-right">
            <img src={talentImg} alt="" />
        </div>
    </div>
    <div className="btn-container">
    <button className='view-btn'>View More</button>
    </div>
    </div>
  )
}

export default Talent