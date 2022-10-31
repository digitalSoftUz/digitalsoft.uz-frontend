import React from 'react';
import { dataTech } from '../../../data/data';

const Texnologiyalar = () => {
  return (
    <React.Fragment>
      <div className="texnologiyalat container">
        <h1 className='h1__title'>Texnologiyalar</h1>
        <h2 className='h2__title'>
          DigitalSoftda dasturiy ta'minotni ishlab chiqish va autsorsing ehtiyojlarini qondirish uchun barcha talab qilinadigan texnologiyalar va platformalar bo'yicha tajribamiz bilan qidirayotgan narsangizni oling.
        </h2>
        <div className="tech__items">
          {dataTech?.map((item, index)=>{
            return(
              <div className="tech__item" key={index}>
                <p>{item.title}</p>
                <div className="techs">
                  {item.tech.map((tech, i)=>{
                    return(
                      <div key={i}>
                        <span>
                          <img src={tech.icon} alt="" />
                        </span>
                        {tech.name}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className='contact__link'>
          <a href="/">Biz bilan bog’lanish</a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Texnologiyalar;