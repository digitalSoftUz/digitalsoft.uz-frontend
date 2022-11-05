import React from 'react';
import Header from './Header/Header';
import Partnyors from '../Home/Partnyors/Partnyors';
import BizningXizmatlar from './BizningXizmatlar/BizningXizmatlar';
import Texnologiyalar from './Texnologiyalar/Texnologiyalar';
import Info from './Info/Info';
import Progects from '../Home/Progects/Progects';
import Comments from '../Home/Comments/Comments';
import Savollar from '../Home/Savollar/Savollar';
import Contact from '../Home/Contact/Contact';

const Xizmatlar = () => {
  return (
    <React.Fragment>
      <div className="xizmatlar__page">
        <Header/>
        <Partnyors/>
        <BizningXizmatlar/>
        <Texnologiyalar/>
        <Info/>
        <Progects/>
        <Comments/>
        <Savollar/>
        <Contact/>
      </div>
      
    </React.Fragment>
  )
}

export default Xizmatlar;