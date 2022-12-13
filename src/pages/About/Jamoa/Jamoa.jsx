import React from 'react';
import i18next from 'i18next';
import { Grid, Navigation } from "swiper";
import { BaseUrl } from '../../../contans';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

const Jamoa = (props) => {
  var data = props.data
  var til = i18next.language
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <div className="jamoa__slider">
        <h1 className='h1__title'>{t("TEAM")}</h1>
        <div className="slider__container">
          <Swiper
            slidesPerView={3.5}
            grid={{
              rows: 2,
            }}
            spaceBetween={20}
            navigation={true}
            breakpoints={{
              10: {
                slidesPerView: 1,
                spaceBetween: 10,
                grid:{
                  rows: 1
                }
              },
              651: {
                slidesPerView: 1,
                spaceBetween: 10,
                grid:{
                  rows: 2
                }
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
            modules={[Grid, Navigation]}
            className="jamoa_Swiper"
          >
            {data?.map((item, index)=>{
              return(
                <SwiperSlide key={index}>
                  <img className='team__img' src={BaseUrl+item.image} alt="" />
                  <div className='div_name'>
                    <p>{item[`name_${til}`]}</p>
                    <p>{item[`title_${til}`]}</p>
                  </div>
                  <div className="team__skills">
                    {item.technalogies.map((i, key)=>{
                      var sec = ((key+1)/10)+0.1
                      return(
                        <img src={BaseUrl+i.icon} alt="" key={key} style={{"transition": `${sec}s ease`}}/>
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