import React from 'react';
import { Affix } from 'antd';
import i18next from 'i18next';
import Img from "react-cool-img";
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
        <Affix offsetTop={100}>
          <span ref={RefJamoa} className='ref__span'>
            {/* {ElementJamoa ? "Yes" : "No"} */}
          </span>
        </Affix>
        <div className="jamoa__container container">
          <div className="jamoa__galery">
            {dataImg?.map((item, index)=>{
              return(
                <div 
                  key={index}
                  className="jamoa__image"
                >
                    {/* <img
                      // className={
                      //   ElementJamoa
                      //   ?"animate__animated animate__slideInLeft"
                      //   :"animate__animated animate__slideOutLeft"
                      // }
                      src={BaseUrl+item.image} alt="" /> */}
                  <Img
                    // placeholder={}
                    className={
                      ElementJamoa
                      ?"animate__animated animate__slideInUp"
                      :"animate__animated animate__slideOutDown"
                    }
                    src={BaseUrl+item.image}
                    debounce={1500} // Default is 300 (ms)
                    alt="REACT COOL IMG"
                  />
                  {/* <LazyLoadImage 
                    src={BaseUrl+item.image}
                    alt="Image Alt"
                    // className={
                    //   ElementJamoa
                    //   ?"image__fadeIN"
                    //   :"image__fadeOUT"
                    // }
                  /> */}
                </div>
              )
            })}
          </div>
          <div className="jamoa__info">
            <h1 
              className={
                ElementJamoa
                ?"animate__animated animate__slideInUp"
                :"animate__animated animate__slideOutDown"
              }
            >
              {data?.[`title_${til}`]}
            </h1>
            <p
              className={
                ElementJamoa
                ?"animate__animated animate__slideInUp"
                :"animate__animated animate__slideOutDown"
              }
            >{data?.[`text_${til}`]}</p>
            <div className="info__content">
              {dataInfo?.map((item, index)=>{
                return(
                  <div 
                    key={index}
                    className={
                      ElementJamoa
                      ?"info__item animate__animated animate__fadeIn"
                      :"info__item animate__animated animate__fadeOut"
                    }
                    // className="info__item"
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