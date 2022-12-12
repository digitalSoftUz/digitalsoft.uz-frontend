import React from 'react';
import i18next from 'i18next';
import { BaseUrl } from '../../../contans';
import { useTranslation } from "react-i18next";
import { ArrowLeft } from '../../../assets/icons';
// import { dataXizmat } from '../../../data/data';

const Xizmat = (props) => {
  var til = i18next.language
  var data = props.data.industryTitle
  var dataCard = props.data.industry
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <div className="xizmat container">
        <h1 className='h1__title'>{data?.[`title_${til}`]}</h1>
        <h2 className='h2__title'>{data?.[`text_${til}`]}</h2>
        <div className="xizmat__content">
          {dataCard?.map((item, index)=>{
            return(
              <div className="xizmat__item" key={index}>
                <div className='xizmat__item__img'>
                  <img src={BaseUrl+item.icon} alt="" />
                </div>
                <div className="xizmat__item__text">
                  <p>{item[`title_${til}`]}</p>
                  <span>{item[`text_${til}`]}</span>
                </div>
                <a href="/">{t("MORE")} <ArrowLeft fill={"#FFFFFF"}/></a>
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Xizmat;