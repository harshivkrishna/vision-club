import React from 'react'
import './hero.css'

import bg1 from '../assets/bg1.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const Hero = () => {
  return (
    <>
        <div className="background-container">
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 5000 }} 
            modules={[Autoplay]}
            className='' >
                <SwiperSlide className='slide'>
                    <img src={bg1} alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    </>
  )
}

export default Hero