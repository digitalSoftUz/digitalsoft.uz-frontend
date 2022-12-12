import React from 'react';
import { BaseUrl } from '../../../contans';
import { useTranslation } from "react-i18next";
// import { dataTech } from '../../../data/data';

const Texnologiyalar = (props) => {
  var dataCard = props.data.mainTechnologyCard
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <div className="texnologiyalar container">
        <h1 className='h1__title'>{t("TECH")}</h1>
        <h2 className='h2__title'>{t("TECH_TITLE")}</h2>
        <div className="tech__items">
          {dataCard?.map((item, index)=>{
            return(
              <div className="tech__item" key={index}>
                <p>{item.title}</p>
                <div className="techs">
                  {item.technologies.map((tech, i)=>{
                    return(
                      <div key={i}>
                        <span>
                          <img src={BaseUrl+tech.icon} alt="" />
                        </span>
                        {tech.title}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className='contact__link'>
          <a href="#Contact"  className="btn__animation">
            {t("BOGLANING")}
            <span className='span__anima1'></span>
            <span className='span__anima2'></span>
            <span className='span__anima3'></span>
            <span className='span__anima4'></span> 
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Texnologiyalar;