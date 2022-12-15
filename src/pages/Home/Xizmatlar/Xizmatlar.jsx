import React, { useEffect } from 'react';
import { Affix } from 'antd';
import i18next from 'i18next';
import { useTranslation } from "react-i18next"
import { ArrowLeft } from '../../../assets/icons';
import { useInView } from 'react-intersection-observer';

const Xizmatlar = (props) => {
  var til = i18next.language
  var dataTitle = props.data.mainOurServiceText
  var dataCard = props.data.mainSeriveces
  const { t } = useTranslation()
  const { ref: RefXizmatlar, inView: ElementXizmatlar } = useInView();

  const AddStyles = (element) =>{
    var head = document.querySelector("#Head")
    var styleteg = document.createElement("style")
    styleteg.append(element)
    head.append(styleteg)
  }
  useEffect(()=>{
    for (let i = 0; i < dataCard?.length; i++) {
      const element = dataCard[i].icon_style; 
      AddStyles(element)
    }
  },[dataCard])
  return (
    <React.Fragment>
      <div className="xizmatlar container">
        <Affix offsetTop={100}>
          <span ref={RefXizmatlar} className='ref__span'>
            {/* {ElementXizmatlar ? "Yes" : "No"} */}
          </span>
        </Affix>
        <div className="xizmatlar__top">
          <div>
            <h1
              className={
                ElementXizmatlar
                ?"animate__animated animate__flipInX"
                :"animate__animated animate__flipOutX"
              }
            >{dataTitle?.[`title_${til}`]}</h1>
            <h2
              className={
                ElementXizmatlar
                ?"animate__animated animate__flipInX"
                :"animate__animated animate__flipOutX"
              }
            >{dataTitle?.[`text_${til}`]}</h2>
          </div>
        </div>
        <div className="xizmatlar__items">
          {dataCard?.map((item, index)=>{
            return(
              <div 
                key={item.id}
                className={
                  ElementXizmatlar
                  ?"xizmatlar__item animate__animated animate__slideInUp"
                  :"xizmatlar__item animate__animated animate__slideOutDown"
                }
                style={{"animationDelay":`${((index+1)/10)+0.1}s`}}
              >
                <div>
                  <h1>{item[`title_${til}`]}</h1>
                  <span dangerouslySetInnerHTML={{__html:item.icon}}></span>
                </div>
                <p>{item[`text_${til}`]}</p>
                <a href="#Contact">{t("MORE")} <ArrowLeft fill={"#0066FF"}/></a>
              </div>
            )
          })}
        </div>
        <div className="my__colors">
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Xizmatlar;