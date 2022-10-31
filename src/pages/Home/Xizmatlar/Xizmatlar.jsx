import React from 'react';
import Gif from "../../../assets/gifs/main1.gif"
import { ArrowLeft } from '../../../assets/icons';
import { dataXizmatlar } from '../../../data/data';

const Xizmatlar = () => {
  return (
    <React.Fragment>
      <div className="xizmatlar container">
        <div className="xizmatlar__top">
          <div className='x__video'>
            <video src={Gif} autoPlay loop muted></video>
          </div>
          <div>
            <h1>Dasturiy ta'minotni ishlab chiqish xizmatlarimiz</h1>
            <h2>
              Bizning dasturiy ta'minot ishlab chiqish kompaniyamiz texnologiyalar va ulardan foydalanadigan  bozorlar haqidagi chuqur tushuncha asosida korporativ va iste'molchi ilovalarini taqdim etadi. Professional fikrlashimiz bilan biz sizning biznesingiz qulay yechimlarni taklif qilamiz.
            </h2>
          </div>
        </div>
        <div className="xizmatlar__items">
          {dataXizmatlar?.map((item, index)=>{
            return(
              <div className="xizmatlar__item" key={index}>
                <div>
                  <h1>{item.title}</h1>
                  <img src={item.img} alt="" />
                </div>
                <p>{item.description}</p>
                <a href="/">Ko'proq ma'lumot olish <ArrowLeft fill={"#0066FF"}/></a>
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Xizmatlar;