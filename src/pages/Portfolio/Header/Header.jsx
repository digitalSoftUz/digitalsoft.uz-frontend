import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from "antd";
import i18next from 'i18next';
import { BaseUrl } from '../../../contans';
import { useTranslation } from "react-i18next";
import SkeletonPortfolio from '../../../components/Skeleton/SkeletonProtfolio';
// import { dataProgects } from "../../../data/data"
import { ComplexAnimatedModal } from '../../../components/Modal';


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
  
  useEffect(()=>{
    var til = i18next.language
    axios.get(`${BaseUrl}/api/portifolio-category/${til}`).then((res)=>{
      setDataCategory(res.data.data)
      // console.log(res.data.data)
    })
    axios.get(`${BaseUrl}/api/portifolio/${til}/?category=${category}&count=7&page=${page}`).then((res)=>{
      console.log(res.data.data.result)
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
            <button onClick={()=>CategoryChange(0)}>{t("ALL")}</button>
            {dataCategory?.map((item, index)=>{
              return(
                <button key={index} onClick={()=>CategoryChange(item.id)}>{item[`title_${til}`]}</button>
              )
            })}
          </div>
            {load 
            ? <SkeletonPortfolio/>
            : <div className="filter__results">
                {data?.map((item, index)=>{
                  return(
                    <div className='filter__item' key={index}>
                      <img src={BaseUrl+item.images[0].image} alt="" />
                    </div>
                  )
                })}
              </div>
            }
          
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