import React from 'react'
import './about.css'

const About = () => {
  return (
    <div>
      <div className="about-parent">
      <h1>About Vision</h1>
        <div className="about-container">
            <div className="about-card">
                <h2>Informative</h2>
                <p>Stay up-to-date with campus happenings, student achievements, and faculty research.</p>
            </div>
            <div className="about-card">
                <h2>Inspiring</h2>
                <p>Explore thought-provoking features and profiles that showcase the best of our college community.</p>
            </div>
            <div className="about-card">
                <h2>Interactive</h2>
                <p>Engage with our newspaper through digital content, events, and opportunities to get involved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About
