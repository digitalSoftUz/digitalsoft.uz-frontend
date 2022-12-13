import React, { useEffect } from 'react';
import i18next from 'i18next';
import { useTranslation } from "react-i18next"
import { ArrowLeft } from '../../../assets/icons';

const Xizmatlar = (props) => {
  var til = i18next.language
  var dataTitle = props.data.mainOurServiceText
  var dataCard = props.data.mainSeriveces
  const { t } = useTranslation()

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
        <div className="xizmatlar__top">
          <div>
            <h1>{dataTitle?.[`title_${til}`]}</h1>
            <h2>{dataTitle?.[`text_${til}`]}</h2>
          </div>
        </div>
        <div className="xizmatlar__items">
          {dataCard?.map((item, index)=>{
            return(
              <div className="xizmatlar__item" key={index}>
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