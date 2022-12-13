import React from 'react';
import { BaseUrl } from '../../../contans';
import { useTranslation } from "react-i18next";
import bg from "../../../assets/images/Hamkorlik/bg.png"

const Hamkorlik = (props) => {
  var dataCard = props.data.partners
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <div className="hamkorlik container">
        <h1 className='h1__title'>{t("HAMKORLAR")}</h1>
        <h2 className='h2__title'>{t("HAMKORLAR2")}</h2>
        <img src={bg} alt="" className='hamkorlik__bg' />
        <div className="hamkorlar">
          {dataCard?.map((item, index)=>{
            return(
              <a href={item.website} className='hamkorlar__item' key={index}>
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