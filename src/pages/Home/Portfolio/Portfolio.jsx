import React from 'react';
import { dataProgects } from "../../../data/data"

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="portfolio__galery container">
        <div className='portfolio__top'>
          <h1>Portfolio</h1>
          <div className='filter__btn'>
            <button>Barchasi</button>
            <button>Veb-saytlar</button>
            <button>Mobil ilovalar</button>
            <button>Logo va brending</button>
          </div>
        </div>
        <div className="portfolio__filter">
          <div className="filter__results">
            {dataProgects?.slice(0,7).map((item, index)=>{
              return(
                <div className='filter__item' key={index}>
                  <img src={item.img} alt="" />
                  {/* <div className="item__info">
                    <p>{item.title}</p>
                  </div> */}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Portfolio;