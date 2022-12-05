import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { dataComments } from '../../../data/data';

const Slider = () => {
  return (
    <React.Fragment>
      <div className="portfolio__slider">
        <h1 className='h1__title'>
          Qimmatli mijozlarimiz biz haqimizda nima deyishadi
        </h1>
        <h2 className='h2__title'>
          Biz mijozlarimizning bizga bo'lgan ishonchi uchun minnatdormiz va ularning kutganlaridan ham yuqori sifatli yechimlarni taqdim etishdan faxrlanamiz. Mana, ulardan ba'zilari biz haqimizda nima deydi:
        </h2>
        <div className="slider__container">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={40}
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
                slidesPerView: 1.5,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1600: {
                slidesPerView: 2.5,
                spaceBetween: 35,
              },
            }}
            modules={[Navigation]}
            className="comment_Swiper"
          >
            {dataComments?.map((item, index)=>{
              return(
                <SwiperSlide key={index}>
                  <div className="comment__item">
                    <h3>{item.comment}</h3>
                    <div className="user__info">
                      <img src={item.userimg} alt="" />
                      <div>
                        <p>{item.username}</p>
                        <span>{item.userposition}</span>
                        <span>{item.company}</span>
                      </div>
                    </div>
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

export default Slider;