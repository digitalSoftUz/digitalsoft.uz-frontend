import React from 'react';
import { ArrowLeft } from '../../../assets/icons';
import { dataXizmat } from '../../../data/data';

const Xizmat = () => {
  return (
    <React.Fragment>
      <div className="xizmat container">
        <h1 className='h1__title'>Biz turli xil sanoat vertikallariga xizmat qilamiz</h1>
        <h2 className='h2__title'>
          Biz butun dunyo bo'ylab turli sohalarga dasturiy ta'minotni autsorsing xizmatlarini taklif qilamiz. Bizning hamkorlikdagi va professional yondashuvimiz mijozlarimizning dasturiy ta'minotni autsorsing muvaffaqiyatini ta'minlash uchun optimallashtirish va kengaytirishga qaratilgan.
        </h2>
        <div className="xizmat__content">
          {dataXizmat?.map((item, index)=>{
            return(
              <div className="xizmat__item" key={index}>
                <div className='xizmat__item__img'>
                  <img src={item.img} alt="" />
                </div>
                <div className="xizmat__item__text">
                  <p>{item.title}</p>
                  <span>{item.description}</span>
                </div>
                <a href="/">Ko'proq ma'lumot olish <ArrowLeft fill={"#FFFFFF"}/></a>
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Xizmat;