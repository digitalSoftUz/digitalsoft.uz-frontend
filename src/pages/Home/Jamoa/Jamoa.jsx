import React from 'react';
import { Affix } from 'antd';
import i18next from 'i18next';
import { BaseUrl } from '../../../contans';
import { useInView } from 'react-intersection-observer';

const Jamoa = (props) => {
  var til = i18next.language
  var data = props.data.mainAboutUs
  var dataImg = props.data.mainAboutUsImages
  var dataInfo = props.data.mainAboutUsStatistics
  const { ref: myRef, inView: Element } = useInView();
  return (
    <React.Fragment>
      <div className="jamoa">
        <Affix><span className='ref__span'>{Element ? "Yes" : "No"}</span></Affix>
        
        <div className="jamoa__container container" ref={myRef}>
          <div className="jamoa__galery">
            {dataImg?.map((item, index)=>{
              return(
                <div 
                  key={index}
                  className={
                    Element
                    ?"jamoa__image animate__animated animate__jackInTheBox"
                    :"jamoa__image"
                  }
                >
                  <img src={BaseUrl+item.image} alt="" />
                </div>
              )
            })}
          </div>
          <div className="jamoa__info">
            <h1 
              className={
                Element
                ?"animate__animated animate__lightSpeedInRight"
                :""
              }
            >
              {data?.[`title_${til}`]}
            </h1>
            <p
              className={
                Element
                ?"animate__animated animate__lightSpeedInRight"
                :""
              }
            >{data?.[`text_${til}`]}</p>
            <div className="info__content">
              {dataInfo?.map((item, index)=>{
                return(
                  <div className="info__item" key={index}>
                    <div className="info__img">
                      <img src={BaseUrl+item.icon} alt="" />
                    </div>
                    <p>{item[`subtitle_${til}`]}</p>
                    <span>{item[`title_${til}`]}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Jamoa;