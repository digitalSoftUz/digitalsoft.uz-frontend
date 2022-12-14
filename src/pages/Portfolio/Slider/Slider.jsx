import React from 'react';
import { Affix } from 'antd';
import i18next from 'i18next';
import { Navigation } from "swiper";
import { BaseUrl } from '../../../contans';
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from 'react-intersection-observer';

const Slider = (props) => {
  var dataTitle = props.data.partnerFeedbackTitle
  var dataCard = props.data.partnerFeedback
  var til = i18next.language
  const { ref: RefSlider, inView: ElementSlider } = useInView();
  return (
    <React.Fragment>
      <div className="portfolio__slider">
        <Affix>
          <span ref={RefSlider} className='ref__span'>
            {/* {ElementSlider ? "Yes" : "No"} */}
          </span>
        </Affix>
        <h1
          className={
            ElementSlider
            ?"h1__title animate__animated animate__flipInX"
            :"h1__title animate__animated animate__flipOutX"
          }
        >{dataTitle?.[`title_${til}`]}</h1>
        <h2
          className={
            ElementSlider
            ?"h2__title animate__animated animate__flipInX"
            :"h2__title animate__animated animate__flipOutX"
          }
        >{dataTitle?.[`text_${til}`]}</h2>
        <div
          className={
            ElementSlider
            ?"slider__container animate__animated animate__fadeIn"
            :"slider__container animate__animated animate__fadeOut"
          }
          style={{"animationDelay":`1s`}}
        >
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
            {dataCard?.map((item)=>{
              return(
                <SwiperSlide key={item.id}>
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