import React from 'react';
import i18next from 'i18next';
import Slider from './Slider';
import { useTranslation } from "react-i18next";

const Jamoa = (props) => {
  var data = props.data
  var til = i18next.language
  // console.log(data)
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <div className="jamoa__slider">
        <h1 className='h1__title'>{t("TEAM")}</h1>
        <div className="slider__container">
          {data?.map((item)=>{
            return(
              item.team.length === 0 
              ? <div key={item.id}></div>
              : <div 
                  key={item.id}
                >
                  <h2 className='h2__title'>{item[`title_${til}`]}</h2>
                  <Slider data={item.team}/>
                </div>
              )
            })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Jamoa;