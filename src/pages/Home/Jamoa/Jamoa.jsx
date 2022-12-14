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
  const { ref: RefJamoa, inView: ElementJamoa } = useInView();
  return (
    <React.Fragment>
      <div className="jamoa">
        <Affix>
          <span ref={RefJamoa} className='ref__span'>
            {/* {ElementJamoa ? "Yes" : "No"} */}
          </span>
        </Affix>
        <div className="jamoa__container container">
          <div className="jamoa__galery">
            {dataImg?.map((item)=>{
              return(
                <div 
                  key={item.id}
                  className={
                    ElementJamoa
                    ?"jamoa__image animate__animated animate__fadeInUp"
                    :"jamoa__image animate__animated animate__fadeOutDown"
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
                ElementJamoa
                ?"animate__animated animate__zoomIn"
                :"animate__animated animate__zoomOut"
              }
            >
              {data?.[`title_${til}`]}
            </h1>
            <p
              className={
                ElementJamoa
                ?"animate__animated animate__zoomIn"
                :"animate__animated animate__zoomOut"
              }
            >{data?.[`text_${til}`]}</p>
            <div className="info__content">
              {dataInfo?.map((item, index)=>{
                return(
                  <div 
                    key={item.id}
                    className={
                      ElementJamoa
                      ?"info__item animate__animated animate__backInUp"
                      :"info__item animate__animated animate__backOutDown"
                    }
                    style={{"animationDelay":`${((index+1)/10)+0.1}s`}}
                  >
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