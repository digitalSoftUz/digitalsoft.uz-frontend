import React from 'react';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import Contact from '../../views/Contact';
import { DS } from '../../context/context';

const Portfolio = () => {
  return (
    <DS.Consumer>
      {(x)=>{
        return(
          <div className="portfolio__page">
            <Header/>
            <Slider data={x.homeData}/> {/* tayyor */}
            <Contact/>
          </div>
        )
      }}
      
    </DS.Consumer>
  )
}

export default Portfolio;