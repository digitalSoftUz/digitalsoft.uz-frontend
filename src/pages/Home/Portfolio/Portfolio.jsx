import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Affix } from 'antd';
import i18next from 'i18next';
import { BaseUrl } from '../../../contans';
import { useTranslation } from "react-i18next";
import { RotatoWord } from '../../../assets/icons';
import { useInView } from 'react-intersection-observer';
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
  const { ref: RefPHome, inView: ElementPHome } = useInView();

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
        <Affix offsetTop={100}>
          <span ref={RefPHome} className='ref__span'>
            {/* {ElementPHome ? "Yes" : "No"} */}
          </span>
        </Affix>
        <div className='portfolio__top'>
          <h1
            className={
              ElementPHome
              ?"animate__animated animate__slideInLeft"
              :"animate__animated animate__slideOutLeft"
            }
          >{t("NAV3")}</h1>
          <div className='filter__btn'>
            <button 
              onClick={()=>CategoryChange(0)}
              className={
                ElementPHome
                ?"animate__animated animate__fadeInUp"
                :"animate__animated animate__fadeOutDown"
              }
              id={category === 0 ? "category__active": ""}
            >
              {t("ALL")}
            </button>
            {dataCategory?.map((item, index)=>{
              return(
                <button 
                  key={item.id} onClick={()=>CategoryChange(item.id)}
                  className={
                    ElementPHome
                    ?"animate__animated animate__fadeInUp"
                    :"animate__animated animate__fadeOutDown"
                  }
                  id={category === item.id ? "category__active": ""}
                  style={{"animationDelay":`${((index+1)/10)+0.1}s`}}
                >
                  {item[`title_${til}`]}
                </button>
              )
            })}
          </div>
        </div>
        <div className="portfolio__filter">
          {load 
            ? <SkeletonPortfolio/>
            : <div className="filter__results">
                {data?.map((item)=>{
                  var text = 
                    item.type === 1 ? "Veb Sayt"
                  : item.type === 2 ? "video"
                  : "Galery"
                  return(
                    item.type === 1 
                    ? 
                    <a 
                      href={item.link} target={`_blank`} key={item.id} 
                      className={
                        ElementPHome
                        ?"filter__item animate__animated animate__fadeInUp"
                        :"filter__item animate__animated animate__fadeOutDown"
                      }  
                    >
                      <img src={BaseUrl+item.images[0].image} alt="" />
                      <p className='f_i_arrow'><RotatoWord text={text}/></p>
                      <p className='f_i_title'>{item[`title_${til}`]}</p>
                      <p className='f_i_description'>{item[`description_${til}`]}</p>
                    </a>
                    : 
                    <div
                      key={item.id} onClick={()=>hamdleOpen(item)}
                      className={
                        ElementPHome
                        ?"filter__item animate__animated animate__fadeInUp"
                        :"filter__item animate__animated animate__fadeOutDown"
                      }   
                    >
                      <img src={BaseUrl+item.images[0].image} alt="" />
                      <p className='f_i_arrow'><RotatoWord text={text}/></p>
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