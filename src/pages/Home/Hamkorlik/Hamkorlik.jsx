import React from 'react';
import { dataHamkorlik } from '../../../data/data';
import bg from "../../../assets/images/Hamkorlik/bg.png"

const Hamkorlik = () => {
  return (
    <React.Fragment>
      <div className="hamkorlik container">
        <h1 className='h1__title'>hamkorlar</h1>
        <h2 className='h2__title'>Bizga ishonch bildirgan hamkorlar</h2>
        <img src={bg} alt="" className='hamkorlik__bg' />
        <div className="hamkorlar">
          {dataHamkorlik?.map((item, index)=>{
            return(
              <div className='hamkorlar__item' key={index}>
                <img src={item.img} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hamkorlik;