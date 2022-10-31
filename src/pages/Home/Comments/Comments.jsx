import React from 'react';
import { dataComment } from '../../../data/data';
import { Play } from '../../../assets/icons';

const Comments = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="coomments__container">
          <h1 className='h1__title'>
            Qimmatli mijozlarimiz biz haqimizda nima deyishadi
          </h1>
          <h2 className='h2__title'>
            Biz mijozlarimizning bizga bo'lgan ishonchi uchun minnatdormiz va ularning kutganlaridan ham yuqori sifatli yechimlarni taqdim etishdan faxrlanamiz. Mana, ulardan ba'zilari biz haqimizda nima deydi:
          </h2>
          <div className="comments">
            <div className="comment__center">
              <img src={dataComment[0].img} alt="" />
              <Play/>
            </div>
            {dataComment?.map((item, index)=>{
              return(
                <div className="cimment__circle" style={{"--i":`${index}`}} key={index}>
                  <img src={item.img} alt="" />
                  <Play/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Comments;