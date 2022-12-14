import React from 'react';
import { Affix } from 'antd';
import i18next from 'i18next';
import { BaseUrl } from '../../../contans';
import { useTranslation } from "react-i18next";
import { useInView } from 'react-intersection-observer';

const Texnologiyalar = (props) => {
  var til = i18next.language
  var dataCard = props.data.mainTechnologyCard
  const { t } = useTranslation()
  const { ref: RefTech, inView: ElementTech } = useInView();
  return (
    <React.Fragment>
      <div className="texnologiyalar container">
        <Affix>
          <span ref={RefTech} className='ref__span'>
            {/* {ElementTech ? "Yes" : "No"} */}
          </span>
        </Affix>
        <h1 
          className={
            ElementTech
            ?"h1__title animate__animated animate__flipInX"
            :"h1__title animate__animated animate__flipOutX"
          }
        >{t("TECH")}</h1>
        <h2
          className={
            ElementTech
            ?"h2__title animate__animated animate__flipInX"
            :"h2__title animate__animated animate__flipOutX"
          }
        >{t("TECH_TITLE")}</h2>
        <div className="tech__items">
          {dataCard?.map((item, index)=>{
            return(
              <div 
                key={item.id}
                className={
                  ElementTech
                  ?"tech__item animate__animated animate__slideInUp"
                  :"tech__item animate__animated animate__slideOutDown"
                }
                style={{"animationDelay":`${((index+1)/10)+0.1}s`}}
              >
                <p>{item[`title_${til}`]}</p>
                <div className="techs">
                  {item.technologies.map((tech, i)=>{
                    return(
                      <div
                        className={
                          ElementTech
                          ?"animate__animated animate__bounceInUp"
                          :"animate__animated animate__bounceOutDown"
                        } 
                        key={i}
                        style={{"animationDelay":`${((i+1)/10)+0.1}s`}}
                      >
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
          <a 
            href="#Contact"
            className={
              ElementTech
              ?"btn__animation animate__animated animate__zoomIn"
              :"btn__animation animate__animated animate__zoomOut"
            }
            style={{"animationDelay":`1s`}}
          >
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