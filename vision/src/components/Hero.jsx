import React from 'react'
import './hero.css'

import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const Hero = () => {
  return (
    <div className="background-container">
        <div>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 5000 }} 
            modules={[Autoplay]}
            className='' >
                <SwiperSlide className='slide'>
                    <img src={bg1} alt="" />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={bg2} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
        <div className='hero-container'>
            <h1>Vision: The College Newspaper</h1>
            <p>Discover the latest news, insights, and stories from our vibrant college community.</p>
        </div>
        </div>
  )
}

export default Hero