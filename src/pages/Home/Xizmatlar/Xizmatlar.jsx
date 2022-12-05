import React, { useEffect } from 'react';
import { ArrowLeft } from '../../../assets/icons';
import { dataXizmatlar } from '../../../data/data';

const Xizmatlar = () => {
  const AddStyles = (element) =>{
    var head = document.querySelector("#Head")
    var styleteg = document.createElement("style")
    styleteg.append(element)
    head.append(styleteg)
  }
  useEffect(()=>{
    for (let i = 0; i < dataXizmatlar.length; i++) {
      const element = dataXizmatlar[i].styles;
      AddStyles(element)
    }
  },[])
  return (
    <React.Fragment>
      <div className="xizmatlar container">
        <div className="xizmatlar__top">
          <div>
            <h1>Bizning xizmatlar</h1>
            <h2>
              Professional fikrlashimiz bilan biz sizning biznesingiz qulay yechimlarni taklif qilamiz.            </h2>
          </div>
        </div>
        <div className="xizmatlar__items">
          {dataXizmatlar?.map((item, index)=>{
            return(
              <div className="xizmatlar__item" key={index}>
                <div>
                  <h1>{item.title}</h1>
                  {item.img}
                </div>
                <p>{item.description}</p>
                <a href="#Contact">Ko'proq ma'lumot olish <ArrowLeft fill={"#0066FF"}/></a>
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