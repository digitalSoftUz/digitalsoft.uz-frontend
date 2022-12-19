import React from 'react';
import { Affix } from 'antd';
import i18next from 'i18next';
import { BaseUrl } from '../../../contans';
import { useTranslation } from "react-i18next";
import { ArrowLeft } from '../../../assets/icons';
import { useInView } from 'react-intersection-observer';

const Xizmat = (props) => {
  var til = i18next.language
  var data = props.data.industryTitle
  var dataCard = props.data.industry
  const { t } = useTranslation()
  const { ref: RefXizmat, inView: ElementXizmat } = useInView();
  return (
    <React.Fragment>
      <div className="xizmat container">
        <Affix offsetTop={100}>
          <span ref={RefXizmat} className='ref__span'>
            {/* {ElementXizmat ? "Yes" : "No"} */}
          </span>
        </Affix>
        <h1
          className={
            ElementXizmat
            ?"h1__title animate__animated animate__flipInX"
            :"h1__title animate__animated animate__flipOutX"
          }
        >{data?.[`title_${til}`]}</h1>
        <h2 
          className={
            ElementXizmat
            ?"h2__title animate__animated animate__flipInX"
            :"h2__title animate__animated animate__flipOutX"
          }
        >{data?.[`text_${til}`]}</h2>
        <div className="xizmat__content">
          {dataCard?.map((item, index)=>{
            return(
              <div
                className={
                  ElementXizmat
                  ?"xizmat__item animate__animated animate__slideInUp"
                  :"xizmat__item animate__animated animate__slideOutDown"
                }
                key={item.id}
                style={{"animationDelay":`${((index+1)/10)+0.1}s`}}
              >
                <div className='xizmat__item__img'>
                  <img src={BaseUrl+item.icon} alt="" />
                </div>
                <div className="xizmat__item__text">
                  <p>{item[`title_${til}`]}</p>
                  <span>{item[`text_${til}`]}</span>
                </div>
                <a href="#Contact">{t("MORE")} <ArrowLeft fill={"#FFFFFF"}/></a>
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Xizmat;