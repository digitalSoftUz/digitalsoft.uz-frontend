import React from 'react';
import { Check } from '../../../assets/icons';
import { dataInfo1, dataInfo2, dataHamkorlik } from '../../../data/data';
import img1 from "../../../assets/images/Jamoa/img2.webp"
import img2 from "../../../assets/images/Jamoa/img4.webp"
import Map from "../../../assets/images/map.webp"

const Info = () => {
  return (
    <React.Fragment>
      <div className="info container">
        <div className="info__top">
          <div className="i_t__left">
            <h1 className='x__title'>
              Nima uchun Digital Softni maxsus dasturiy ta'minot mahsulotlarini ishlab chiqish kompaniyasi sifatida tanlaysiz?
            </h1>
            <h2 className='x__subtitle'>
              7 yildan ortiq tajribaga ega ValueCoders autsorsing xizmatlarini ko'rsatadigan dasturiy mahsulotlarni ishlab chiqish bo'yicha etakchi kompaniyalar orasida taniqli nomdir. Bizda ilovani rejalashtiruvchilar, dasturchilar va dizaynerlardan iborat ekspertlar jamoasi mavjud bo'lib, ular sizga arzon narxlarda yuqori sifatli xizmat ko'rsatish bilan birga loyihangiz bilan innovatsion xavfsizlik xususiyatlarini taklif qila oladi.
            </h2>
            <div className='jamoa__info'>
              {dataInfo1?.map((item, index)=>{
                return(
                  <span key={index}>
                    <div><Check/></div>
                    {item.title}
                  </span>
                )
              })}
            </div>
          </div>
          <div className="i_t__right">
            <div className='info__img1'>
              <img src={img1} alt="" />
            </div>
            <div className='info__img2'>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className="info__bot">
          <div className="hamkorlik__right">
            <div className="uzb__map">
              <img src={Map} alt="" />
            </div>
            {dataHamkorlik?.map((item, index)=>{
              return(
                <div className="map__circle" style={{"--i":`${index}`, "--l":`${dataHamkorlik.length}`}} key={index}>
                  <img src={item.img} alt="" />
                </div>
              )
            })}
          </div>
          <div className="i_b__right">
            <h1 className='x__title'>
              Biz <span>O’zbekistondagi</span> eng yaxshi kompaniyalari bilan ishlaymiz
            </h1>
            <h2 className='x__subtitle'>
              Biz dinamik startap va SMB dan Fortune 500 kompaniyalarigacha bo'lgan har bir biznes sohasida jahon darajasidagi biznes uchun ajoyib texnologik yechimlarni taqdim etamiz.
            </h2>
            <div className='jamoa__info'>
              {dataInfo2?.map((item, index)=>{
                return(
                  <span key={index}>
                    <div><Check/></div>
                    {item.title}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Info;