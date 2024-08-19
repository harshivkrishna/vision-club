import React from 'react';
import './Aboutpage.css';
import img from '../assets/aboutbg.webp';

const Aboutpage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Vision</h1>
      </div>

      <div className="about-section">
        <div className="about-image">
          <img src={img} alt="Vision Magazine" />
        </div>
        <div className="about-text">
          <p>
            VISION, the esteemed college magazine of Chennai Institute of Technology, stands as a beacon of student journalism and creativity. Managed by a dedicated group of students, VISION is more than just a publication; it is a vibrant platform where news, stories, and ideas converge. These students diligently gather news, craft engaging content, and meticulously edit each edition to ensure it meets the highest standards of quality and relevance. The magazine not only covers the latest happenings within the college but also extends its reach to include significant events and trends outside the campus, providing a comprehensive view of the world to its readers.
          </p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-image-left">
          <img src={img} alt="Vision Magazine" />
        </div>
        <div className="about-text-r">
          <p>
            One of the unique aspects of VISION is its open invitation to all students to contribute their own blogs and articles. This inclusive approach encourages a diverse range of voices and perspectives, fostering a sense of community and collaboration among the student body. Whether it’s a report on a recent college event, an opinion piece on current affairs, or a creative story, VISION welcomes it all, making it a true reflection of the students’ thoughts and experiences.
          </p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-image">
          <img src={img} alt="Vision Magazine" />
        </div>
        <div className="about-text">
          <p>
            As one of the primary sources of news for the students of Chennai Institute of Technology, VISION plays a crucial role in keeping everyone informed and connected. It serves as a reliable resource for updates on academic achievements, extracurricular activities, and other important announcements. Through its engaging content and student-centric approach, VISION not only informs but also inspires, making it an integral part of the college experience.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Aboutpage;
