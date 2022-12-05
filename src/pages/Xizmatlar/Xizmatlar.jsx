import React from 'react';
import Jamoa from './Jamoa/Jamoa';
import Header from './Header/Header';
import Contact from '../../views/Contact';
import Xizmat from './Xizmat/Xizmat';
import XizmatlarSlider from './XizmatlarSlider/XizmatlarSlider';

const Xizmatlar = () => {
  return (
    <React.Fragment>
      <div className="xizmatlar__page">
        <Header/>
        <Jamoa/>
        <Xizmat/>
        <XizmatlarSlider/>
        <Contact/>
      </div>
      
    </React.Fragment>
  )
}

export default Xizmatlar;