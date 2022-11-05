import React from 'react';
import { dataBXizmatlar } from '../../../data/data';

const BizningXizmatlar = () => {
  return (
    <React.Fragment>
      <div className="b_xizmatlar container">
        <h1 className='x__title'>Bizning xizmatlar</h1>
        <h2 className='x__subtitle'>
          Biz mijozlar talablari va bozorga chiqishning noyob maqsadlari va bosqichlariga mos keladigan optimal mahsulotni ishlab chiqish uchun biznes jarayonlari, maqsadlari va cheklovlarini tushunish uchun mijozlar bilan ishlaymiz.
        </h2>
        <div className="xizmatlar__items">
          {dataBXizmatlar?.map((item, index)=>{
            return(
              <div className="xizmatlar__item b_xizmatlar__item" key={index}>
                <div>
                  <h1>{item.title}</h1>
                  <h2>{index+1}</h2>
                </div>
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default BizningXizmatlar;