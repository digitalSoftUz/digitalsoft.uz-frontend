import React from 'react';
import { BaseUrl } from '../../../contans';
// import { Check } from '../../../assets/icons';
// import { dataInfo, dataJamoa } from '../../../data/data';
import i18next from 'i18next';

const Jamoa = (props) => {
  var til = i18next.language
  var data = props.data.mainAboutUs
  var dataImg = props.data.mainAboutUsImages
  var dataInfo = props.data.mainAboutUsStatistics
  return (
    <React.Fragment>
      <div className="jamoa">
        <div className="jamoa__container container">
          <div className="jamoa__galery">
            {dataImg?.map((item, index)=>{
              return(
                <div className="jamoa__image" key={index}>
                  <img src={BaseUrl+item.image} alt="" />
                </div>
              )
            })}
          </div>
          <div className="jamoa__info">
            <h1>{data?.[`title_${til}`]}</h1>
            <p>{data?.[`text_${til}`]}</p>
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