import React from 'react';
import { Navigation } from "swiper";
import { BaseUrl } from '../../../contans';
import { Swiper, SwiperSlide } from "swiper/react";
import i18next from 'i18next';

const Slider = (props) => {
  var dataTitle = props.data.partnerFeedbackTitle
  var dataCard = props.data.partnerFeedback
  var til = i18next.language
  return (
    <React.Fragment>
      <div className="portfolio__slider">
        <h1 className='h1__title'>{dataTitle?.[`title_${til}`]}</h1>
        <h2 className='h2__title'>{dataTitle?.[`text_${til}`]}</h2>
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
            {dataCard?.map((item, index)=>{
              return(
                <SwiperSlide key={index}>
                  <div className="comment__item">
                    <h3>{item[`feedback_${til}`]}</h3>
                    <div className="user__info">
                      <img src={BaseUrl+item.partner_image} alt="" />
                      <div>
                        <p>{item[`partner_name_${til}`]}</p>
                        <span>{item[`partner_bio_${til}`]}</span>
                        {/* <span>{item.company}</span> */}
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