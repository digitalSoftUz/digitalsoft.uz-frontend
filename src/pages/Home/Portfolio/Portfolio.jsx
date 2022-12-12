import React, { useEffect, useState } from 'react';
import axios from 'axios';
import i18next from 'i18next';
import { BaseUrl } from '../../../contans';
import { useTranslation } from "react-i18next";
// import { dataProgects } from "../../../data/data"

const Portfolio = () => {
  var til = i18next.language
  const { t } = useTranslation()
  const [dataCategory, setDataCategory] = useState([]);
  const [data, setData] = useState([]);
  useEffect(()=>{
    var til = i18next.language
    axios.get(`${BaseUrl}/api/portifolio-category/${til}/`).then((res)=>{
      // console.log(res.data.data)
      setDataCategory(res.data.data)
    })
    axios.get(`${BaseUrl}/api/portifolio/${til}/?category=0&count=7&page=1&is_show_main=true`).then((res)=>{
      console.log(res.data.data)
      setData(res.data.data.result)
    })
  },[])
  return (
    <React.Fragment>
      <div className="portfolio__galery container">
        <div className='portfolio__top'>
          <h1>{t("NAV3")}</h1>
          <div className='filter__btn'>
            <button>{t("ALL")}</button>
            {dataCategory?.map((item, index)=>{
              return(
                <button key={index}>{item[`title_${til}`]}</button>
              )
            })}
          </div>
        </div>
        <div className="portfolio__filter">
          <div className="filter__results">
            {data?.map((item, index)=>{
              return(
                <div className='filter__item' key={index}>
                  <img src={BaseUrl+item.images[0].image} alt="" />
                  {/* <div className="item__info">
                    <p>{item.title}</p>
                  </div> */}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Portfolio;