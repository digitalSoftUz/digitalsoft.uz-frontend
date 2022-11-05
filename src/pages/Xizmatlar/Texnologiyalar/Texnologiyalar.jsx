import React from 'react';
import { dataTech } from '../../../data/data';

const Texnologiyalar = () => {
  return (
    <React.Fragment>
      <div className="b_texnologiyalar container">
        <h1 className='x__title'>
          Texnologiyalar va ramkalar Bizning jamoamiz malakali
        </h1>
        <h2 className='x__subtitle'>
          O’zbekiston dasturiy ta'minot mahsulotlarini ishlab chiqish kompaniyasi sifatida biz eng so'nggi texnologiyalarga ega bo'lgan ishlab chiqish guruhlarini taklif qilamiz
        </h2>
        <div className="tech__items">
          {dataTech?.map((item, index)=>{
            return(
              <div className="b_tech__item tech__item" key={index}>
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