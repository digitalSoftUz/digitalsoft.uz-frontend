import React from 'react';
import Jamoa from './Jamoa/Jamoa';
import Header from './Header/Header';
import Contact from '../../views/Contact';
import { DS } from '../../context/context';
import Xizmatlar from './Xizmatlar/Xizmatlar';
import Hamkorlik from './Hamkorlik/Hamkorlik';
import Portfolio from './Portfolio/Portfolio';
import Slider from '../Portfolio/Slider/Slider';
import Texnologiyalar from './Texnologiyalar/Texnologiyalar';

// import i18next from 'i18next';
//   var til = i18next.language
// [`_${til}`]

const Home = () => {
  return (
    <DS.Consumer>
      {(x)=>{
        // console.log(x.homeData)
        return(
          <div className='home__page'>
            <Header data={x.homeData?.mainTitle}/>{/* tayyor */}
            <Jamoa data={x.homeData}/>{/* tayyor */}
            <Xizmatlar data={x.homeData}/>{/* tayyor */}
            <Texnologiyalar data={x.homeData}/>{/* tayyor */}
            <Portfolio data={x.homeData}/>{/*  */}
            <Hamkorlik data={x.homeData}/>{/* title qoldi */}
            <Slider data={x.homeData}/>{/* tayyor */}
            <Contact/>
          </div>
        )
      }}
    </DS.Consumer>
  )
}

export default Home;