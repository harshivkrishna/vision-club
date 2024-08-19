import React from 'react'
import './news.css'

import HeadNews from '../assets/news/fontpage1.png'
import News1 from '../assets/news/news1.jpg'
import {Link} from 'react-router-dom'

const News = () => {
  return (
    <div className='news-parent'>
      <h1 className='news-title'>Latest News</h1>
        <div className="news-container">
          <div className="text-container">
            <div className='news-content'>
              <div className="newsHeading">
                <h2>Russia's Youngest-ever Astronauts Blast Off to Space Station</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil temporibus earum blanditiis suscipit, voluptatem nam repellat, quae corporis eius veritatis numquam molestias, dolore dicta cupiditate minus libero doloremque enim.</p>
              </div>
              <div className="newsCategory">
                <p>News category | Author | Date</p>
              </div>
              </div>
              <div className="newsImageContainer">
              <img src={HeadNews} alt="" />
              </div>
          </div>
          <div className="news-aside">
          <div className="news-card">
            <div className="news-card-img">
            <img src={News1} alt="" />
            </div>
            <div className="news-card-descp">
              <h4>News Title</h4>
              <p>News category | Author | Date</p>
            </div>
          </div>

          <div className="news-card">
            <div className="news-card-img">
            <img src={News1} alt="" />
            </div>
            <div className="news-card-descp">
              <h4>News Title</h4>
              <p>News category | Author | Date</p>
            </div>
          </div>
          <button className='view-more-btn'><Link to="/display">View More</Link></button>
        </div>
        </div>
    </div>
  )
}

export default News