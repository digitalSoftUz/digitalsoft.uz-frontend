import React from 'react';
import i18next from 'i18next';
import { Lazy, Navigation } from "swiper";
import { BaseUrl } from '../../../contans';
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = (props) => {
  var data = props.data
  var til = i18next.language
  return (
    <React.Fragment>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={20}
        navigation={true}
        lazy={true}
        breakpoints={{
          10: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          651: {
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
        modules={[Lazy,Navigation]}
        className="jamoa_Swiper"
      >
        {data?.map((item)=>{
          return(
            <SwiperSlide key={item.id}>
              <img className='team__img swiper-lazy' src={BaseUrl+item.image} alt="" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              <div className='div_name'>
                <p>{item[`name_${til}`]}</p>
                <p>{item[`title_${til}`]}</p>
              </div>
              <div className="team__skills">
                {item.technalogies.map((i, key)=>{
                  var sec = ((key+1)/10)+0.1
                  return(
                    <img src={BaseUrl+i.icon} alt="" key={i.id} style={{"transition": `${sec}s ease`}}/>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </React.Fragment>
  )
}

export default Slider;