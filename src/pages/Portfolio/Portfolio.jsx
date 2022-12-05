import React from 'react';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import Contact from '../../views/Contact';

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="portfolio__page">
        <Header/>
        <Slider/>
        <Contact/>
      </div>
    </React.Fragment>
  )
}

export default Portfolio;