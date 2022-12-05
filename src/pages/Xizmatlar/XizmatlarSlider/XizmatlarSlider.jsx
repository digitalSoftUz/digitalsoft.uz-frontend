import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { dataXizmatlar } from '../../../data/data';

const XizmatlarSlider = () => {
  return (
    <React.Fragment>
      <div className="xizmatlar__slider">
        <h1 className='h1__title'>Xizmatlar</h1>
        <div className="slider__container">
          <Swiper
            dir="rtl"
            slidesPerView={3.5}
            spaceBetween={20}
            navigation={true}
            breakpoints={{
              10: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 15,
              },
              1440: {
                slidesPerView: 3.2,
                spaceBetween: 15,
              },
              1600: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation]}
            className="xizmatlar_Swiper"
          >
            {dataXizmatlar?.map((item, index)=>{
              return(
                <SwiperSlide key={index}>
                  <div>
                    <h1>{item.title}</h1>
                    <div className="slider__image">
                      {/* <img src={item.img} alt="" /> */}
                      {item.img}
                    </div>
                  </div>
                  <p>{item.description}</p>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  )
}

export default XizmatlarSlider;