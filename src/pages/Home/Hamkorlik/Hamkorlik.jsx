import React from 'react';
import { Affix } from 'antd';
import { BaseUrl } from '../../../contans';
import { useTranslation } from "react-i18next";
import { useInView } from 'react-intersection-observer';
import bg from "../../../assets/images/bg.webp";

const Hamkorlik = (props) => {
  var dataCard = props.data.partners
  const { t } = useTranslation()
  const { ref: RefHamkor, inView: ElementHamkor } = useInView();
  return (
    <React.Fragment>
      <div className="hamkorlik container">
        <Affix>
          <span ref={RefHamkor} className='ref__span'>
            {/* {ElementHamkor ? "Yes" : "No"} */}
          </span>
        </Affix>
        <h1
          className={
            ElementHamkor
            ?"h1__title animate__animated animate__flipInX"
            :"h1__title animate__animated animate__flipOutX"
          }
        >{t("HAMKORLAR")}</h1>
        <h2
          className={
            ElementHamkor
            ?"h2__title animate__animated animate__flipInX"
            :"h2__title animate__animated animate__flipOutX"
          }
        >{t("HAMKORLAR2")}</h2>
        <img src={bg} alt="" className='hamkorlik__bg' />
        <div className="hamkorlar">
          {dataCard?.map((item, index)=>{
            return(
              <a 
                href={item.website} key={item.id}
                className={
                  ElementHamkor
                  ?"hamkorlar__item animate__animated animate__zoomIn"
                  :"hamkorlar__item animate__animated animate__zoomOut"
                }
                style={{"animationDelay":`${((index+1)/10)+0.1}s`}}
              >
                <img src={BaseUrl+item.logo} alt="" />
              </a>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hamkorlik;