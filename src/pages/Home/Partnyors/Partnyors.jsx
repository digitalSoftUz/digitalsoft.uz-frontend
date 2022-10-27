import React from 'react';
import { dataPartnyors } from '../../../data/data';

const Partnyors = () => {
  return (
    <React.Fragment>
      <div className="partnyors__container">
        <div className="partnyors container">
          <div className="brand-wheel">
            <div className="brand-slide">
              {dataPartnyors?.map((item, index) => {
                return (
                  <a href={item.link} key={index}>
                    <img src={item.img} alt="" />
                  </a>
                );
              })}
            </div>
            <div className="brand-slide delay">
            {dataPartnyors?.map((item, index) => {
                return (
                  <a href={item.link} key={index}>
                    <img src={item.img} alt="" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  )
}

export default Partnyors;