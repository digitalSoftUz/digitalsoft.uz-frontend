import React, { useEffect } from 'react';
import { Affix } from 'antd';
import i18next from 'i18next';
import { Navigation } from "swiper";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from 'react-intersection-observer';

const XizmatlarSlider = (props) => {
  var til = i18next.language
  var dataCard = props.data
  const { ref: RefXizmatlar, inView: ElementXizmatlar } = useInView();
  const { t } = useTranslation()
  const AddStyles = (element) =>{
    var head = document.querySelector("#Head")
    var styleteg = document.createElement("style")
    styleteg.append(element)
    head.append(styleteg)
  }
  useEffect(()=>{
    for (let i = 0; i < dataCard?.length; i++) {
      const element = dataCard[i].icon_style; 
      AddStyles(element)
    }
  },[dataCard])
  return (
    <React.Fragment>
      <div className="xizmatlar__slider">
        <Affix>
          <span ref={RefXizmatlar} className='ref__span'>
            {/* {ElementXizmatlar ? "Yes" : "No"} */}
          </span>
        </Affix>
        <h1
          className={
            ElementXizmatlar
            ?"h1__title animate__animated animate__flipInX"
            :"h1__title animate__animated animate__flipOutX"
          }
        >{t("NAV2")}</h1>
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
            {dataCard?.map((item, index)=>{
              return(
                <SwiperSlide 
                  key={item.id}
                  className={
                    ElementXizmatlar
                    ?"xizmatlar__item animate__animated animate__slideInUp"
                    :"xizmatlar__item animate__animated animate__slideOutDown"
                  }  
                  style={{"animationDelay":`${((index+1)/10)+0.1}s`}}
                >
                  <div>
                    <h1>{item[`title_${til}`]}</h1>
                    <div className="slider__image">
                      {/* <img src={item.img} alt="" /> */}
                      <span dangerouslySetInnerHTML={{__html:item.icon}}></span>
                    </div>
                  </div>
                  <p>{item[`text_${til}`]}</p>
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