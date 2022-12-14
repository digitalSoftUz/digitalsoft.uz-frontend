import React from 'react';
import { BaseUrl } from '../../../contans';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

import "swiper/css/effect-fade";
import "swiper/css/pagination";

const PortfolioModal = (props) => {
  var data = props.items
  return (
    <React.Fragment>
      {data?.type === 2 
      ? <div className="modal__video">
          <video 
            src={BaseUrl+data.video} 
            poster={BaseUrl+data?.images[0].image}
            controls
          ></video>
        </div>
      : <div className="modal__slider">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper__modal"
          >
            {data.images.map((item, index)=>{
              return(
              <SwiperSlide key={item.id}>
                <img src={BaseUrl+item.image} alt=""/>
              </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      }
    </React.Fragment>
  )
}

export default PortfolioModal;