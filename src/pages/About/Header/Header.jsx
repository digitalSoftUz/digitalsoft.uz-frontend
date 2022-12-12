import React from 'react';
import i18next from 'i18next';
import { BaseUrl } from '../../../contans';
// import { dataInfo } from '../../../data/data';
// import Video from "../../../assets/video/video.mp4"

const Header = (props) => {
  var til = i18next.language
  var data = props.data.aboutUs
  var dataCard = props.data.aboutUsStatistics
  return (
    <React.Fragment>
      <div className="header__xizmatlar container">
        <div className="header__left">
          <h1>{data?.[`title_${til}`]}</h1>
          <p>{data?.[`text_${til}`]}</p>
        </div>
        <div className="header__right">
          <div className="header__video">
            <video 
              src={BaseUrl+data?.video} 
              height="auto"
              width={"100%"}
              autoPlay
              loop
              playsInline
              muted
              // controls
            ></video>
          </div>
        </div>
      </div>
        <div className="info__content container">
          {dataCard?.map((item, index)=>{
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
    </React.Fragment>
  )
}

export default Header;