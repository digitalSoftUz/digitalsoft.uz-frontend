import React from 'react';
import Header from './Header/Header';
import Xizmatlar from './Xizmatlar/Xizmatlar';
import Jamoa from './Jamoa/Jamoa';
import Hamkorlik from './Hamkorlik/Hamkorlik';
import Texnologiyalar from './Texnologiyalar/Texnologiyalar';
import Contact from '../../views/Contact';
import Slider from '../Portfolio/Slider/Slider';
import Portfolio from './Portfolio/Portfolio';

// import Comments from './del Comments/Comments'
// import Xizmat from './del Xizmat/Xizmat';
// import Progects from './del Progects/Progects';
// import Savollar from './del Savollar/Savollar';
// import Boshlash from "./del Boshlash/Boshlash"
// import Jarayon from './del Jarayon/Jarayon';
// import Partnyors from './del Partnyors/Partnyors';

const Home = () => {
  return (
    <React.Fragment>
      <div className='home__page'>
        <Header/>
        <Jamoa/>
        <Xizmatlar/>
        <Texnologiyalar/>
        <Portfolio/>
        <Hamkorlik/>
        <Slider/>
        <Contact/>
      </div>
      
      {/* <Jarayon/> */}
      {/* <Partnyors/> */}
      {/* <Boshlash/> */}
      {/* <Xizmat/> */}
      {/* <Progects/> */}
      {/* <Comments/> */}
      {/* <Savollar/> */}
    </React.Fragment>
  )
}

export default Home;