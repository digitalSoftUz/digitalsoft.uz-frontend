import React from 'react';
import { dataProgects } from "../../../data/data"


const Header = () => {
  return (
    <React.Fragment>
      <div className="portfolio__galery container">
        <h1>Portfolio</h1>
        <div className="portfolio__filter">
          <div className='filter__btn'>
            <button>Barchasi</button>
            <button>Veb-saytlar</button>
            <button>Mobil ilovalar</button>
            <button>Logo va brending</button>
          </div>
          <div className="filter__results">
            {dataProgects?.map((item, index)=>{
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

export default Header;