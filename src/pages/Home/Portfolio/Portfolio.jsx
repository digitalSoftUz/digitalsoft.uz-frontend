import React, { useEffect, useState } from 'react';
import axios from 'axios';
import i18next from 'i18next';
import { BaseUrl } from '../../../contans';
import { useTranslation } from "react-i18next";
import { ArrowLeft } from '../../../assets/icons';
import { ComplexAnimatedModal } from '../../../components/Modal';
import PortfolioModal from '../../Portfolio/PortfolioModal/PortfolioModal';
import SkeletonPortfolio from '../../../components/Skeleton/SkeletonProtfolio';

const Portfolio = () => {
  var til = i18next.language
  const { t } = useTranslation()
  const [dataCategory, setDataCategory] = useState([]);
  const [data, setData] = useState([]);  
  const [load, setLoad] = useState(true);
  const [category, setCategory] = useState(0);
  const CategoryChange = (p) => {
    setLoad(true)
    setCategory(p)
  }

  const [opened, setOpened] = useState(false);
  const [items, setItems] = useState([]);
  const hamdleOpen = (item) => {
    setOpened(true)
    setItems(item)
  }

  useEffect(()=>{
    var til = i18next.language
    axios.get(`${BaseUrl}/api/portifolio-category/${til}/`).then((res)=>{
      setDataCategory(res.data.data)
    })
    axios.get(`${BaseUrl}/api/portifolio/${til}/?category=${category}&count=7&page=1&is_show_main=true`).then((res)=>{
      setTimeout(() => {
        setLoad(false)
      }, 700);
      setData(res.data.data.result)
    })
  },[category])
  return (
    <React.Fragment>
      <div className="portfolio__galery container">
        <div className='portfolio__top'>
          <h1>{t("NAV3")}</h1>
          <div className='filter__btn'>
            <button onClick={()=>CategoryChange(0)}>{t("ALL")}</button>
            {dataCategory?.map((item, index)=>{
              return(
                <button key={index} onClick={()=>CategoryChange(item.id)}>{item[`title_${til}`]}</button>
              )
            })}
          </div>
        </div>
        <div className="portfolio__filter">
          {load 
            ? <SkeletonPortfolio/>
            : <div className="filter__results">
                {data?.map((item, index)=>{
                  return(
                    item.type === 1 
                    ? 
                    <a href={item.link} target={`_blank`} className='filter__item' key={index}>
                      <img src={BaseUrl+item.images[0].image} alt="" />
                      <p className='f_i_arrow'><ArrowLeft/></p>
                      <p className='f_i_title'>{item[`title_${til}`]}</p>
                      <p className='f_i_description'>{item[`description_${til}`]}</p>
                    </a>
                    : 
                    <div className='filter__item' key={index} onClick={()=>hamdleOpen(item)}>
                      <img src={BaseUrl+item.images[0].image} alt="" />
                      <p className='f_i_arrow'><ArrowLeft/></p>
                      <p className='f_i_title'>{item[`title_${til}`]}</p>
                      <p className='f_i_description'>{item[`description_${til}`]}</p>
                    </div>
                  )
                })}
              </div>
            }
          <ComplexAnimatedModal opened={opened} onClose={() => setOpened(false)}>
            <PortfolioModal opened={opened} items={items}/>
          </ComplexAnimatedModal>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Portfolio;