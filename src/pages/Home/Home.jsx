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

const Home = () => {
  return (
    <DS.Consumer>
      {(x)=>{
        return(
          <div className='home__page'>
            <Header data={x.homeData?.mainTitle}/>
            <Jamoa data={x.homeData}/>
            <Xizmatlar data={x.homeData}/>
            <Texnologiyalar data={x.homeData}/>
            <Portfolio data={x.homeData}/>
            <Hamkorlik data={x.homeData}/>
            <Slider data={x.homeData}/>
            <Contact/>
          </div>
        )
      }}
    </DS.Consumer>
  )
}

export default Home;