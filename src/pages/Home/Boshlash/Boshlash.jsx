import React from 'react';
import { dataInfo } from '../../../data/data';

const Boshlash = () => {
  return (
    <React.Fragment>
      <div className="info__block">
        <div className="info__container container">
          <h1>Boshlashga tayyormisiz?</h1>
          <h2>
            O’zbekiston bo'ylab ko’plab mijozlar bilan 2+ yildan ortiq isbotlangan muvaffaqiyati bilan O’zbekistonning eng yaxshi dasturiy ta'minot ishlab chiqaruvchi kompaniyalaridan biri sifatida doimiy ravishda tan olingan. Siz bizga dasturiy ta'minotni ishlab chiqish va autsorsing ehtiyojlarini ishonib topshirishingiz mumkin.
          </h2>
          <div className="info__content">
            {dataInfo?.map((item, index)=>{
              return(
                <div className="info__item" key={index}>
                  <div className="info__img">
                    <img src={item.img} alt="" />
                  </div>
                  <p>{item.number}</p>
                  <span>{item.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Boshlash;