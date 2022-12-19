import React, { useEffect, useState } from 'react';
import axios from 'axios';
import i18next from 'i18next';
import { Pagination } from "antd";
import { BaseUrl } from '../../../contans';
import { useTranslation } from "react-i18next";
import { RotatoWord } from '../../../assets/icons';
import PortfolioModal from '../PortfolioModal/PortfolioModal';
import { ComplexAnimatedModal } from '../../../components/Modal';
import SkeletonPortfolio from '../../../components/Skeleton/SkeletonProtfolio';


const Header = () => {
  var til = i18next.language
  const { t } = useTranslation()
  const [dataCategory, setDataCategory] = useState([]);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(0);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState();
  const [load, setLoad] = useState(true);
  const CategoryChange = (p) => {
    setLoad(true)
    setCategory(p)
    setPage(1)
  }
  
  const [opened, setOpened] = useState(false);
  const [items, setItems] = useState([]);
  const hamdleOpen = (item) => {
    setOpened(true)
    setItems(item)
  }
  
  
  useEffect(()=>{
    var til = i18next.language
    axios.get(`${BaseUrl}/api/portifolio-category/${til}`).then((res)=>{
      setDataCategory(res.data.data)
    })
    axios.get(`${BaseUrl}/api/portifolio/${til}/?category=${category}&count=7&page=${page}&is_show_main=true`).then((res)=>{
      setTimeout(() => {
        setLoad(false)
      }, 500);
      setPagination(res.data.data.pagination)
      setData(res.data.data.result)
    })
  },[category, page])
  return (
    <React.Fragment>
      <div className="portfolio__galery container">
        <h1>{t("NAV3")}</h1>
        <div className="portfolio__filter">
          <div className='filter__btn'>
            <button 
              onClick={()=>CategoryChange(0)}
              id={category === 0 ? "category__active": ""}  
            >
              {t("ALL")}
            </button>
            {dataCategory?.map((item)=>{
              return(
                <button 
                  key={item.id} 
                  onClick={()=>CategoryChange(item.id)}
                  id={category === item.id ? "category__active": ""}
                >
                  {item[`title_${til}`]}
                </button>
              )
            })}
          </div>
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
                    <a href={item.link} target={`_blank`} className='filter__item' key={item.id}>
                      <img src={BaseUrl+item.images[0].image} alt="" />
                      <p className='f_i_arrow'><RotatoWord text={text}/></p>
                      <p className='f_i_title'>{item[`title_${til}`]}</p>
                      <p className='f_i_description'>{item[`description_${til}`]}</p>
                    </a>
                    : 
                    <div className='filter__item' key={item.id} onClick={()=>hamdleOpen(item)}>
                      <img src={BaseUrl+item.images[0].image} alt="" />
                      <p className='f_i_arrow'><RotatoWord  text={text}/></p>
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
          <div className="paginations">
            <Pagination 
              defaultCurrent={page} 
              pageSize={7} 
              total={pagination?.items_count}
              onChange={(e)=>{setPage(e)}}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;