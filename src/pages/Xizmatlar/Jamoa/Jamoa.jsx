import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { dataTeam } from '../../../data/data';

const Jamoa = () => {
  return (
    <React.Fragment>
      <div className="jamoa__slider">
        <h1 className='h1__title'>Team</h1>
        <div className="slider__container">
          <Swiper
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
            className="jamoa_Swiper"
          >
            {dataTeam?.map((item, index)=>{
              return(
                <SwiperSlide key={index}>
                  <img className='team__img' src={item.img} alt="" />
                  <div className='div_name'>
                    <p>{item.name}</p>
                    <p>{item.work}</p>
                  </div>
                  <div className="team__skills">
                    {item.skills.map((i, k)=>{
                      var sec = ((k+1)/10)+0.1
                      return(
                        <>
                          <img src={i.img} alt="" key={k} style={{"transition": `${sec}s ease`}}/>
                        </>
                      )
                    })}
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Jamoa;