import React from 'react';
import Footer from "./views/Footer";
import Navbar from './views/Navbar';
import Mode from './context/context';
import { DS } from './context/context';
import { Routes, Route } from 'react-router-dom';

import "swiper/css";
import 'animate.css';
import "swiper/css/grid";
import "swiper/css/lazy";
import "swiper/css/bundle";
import "swiper/css/pagination";
import 'antd/dist/antd.min.css';
const Demo = React.lazy(()=> import("./pages/demo/demo"))

const Home = React.lazy(()=> import("./pages/Home/Home"))
const About = React.lazy(()=> import("./pages/About/About"))
const NoMatch = React.lazy(()=> import("./components/NoMatch/NoMatch"))
const Portfolio = React.lazy(()=> import("./pages/Portfolio/Portfolio"))
const Vakansiya = React.lazy(()=> import("./pages/Vakansiya/Vakansiya"))
const Services = React.lazy(()=> import("./pages/Xizmatlar/Xizmatlar"))

export default function App(){
  return ( 
    <Mode>
      <DS.Consumer>
        {(x)=>{
          return(
            <React.Fragment>
              <Navbar data={x.homeData.contactInfo}/>
              <Routes>
                <Route index path='/' element={ <Home /> }/>
                <Route path='portfolio' element={ <Portfolio /> }/>
                <Route path='vakansiya' element={  <Vakansiya /> }/>
                <Route path='about' element={ <About /> }/>
                <Route path='xizmatlar' element={ <Services /> }/>
                <Route path='demo' element={<Demo/>} />
                <Route path='*' element={<NoMatch/>} />
              </Routes>
              <Footer data={x.homeData.contactInfo}/>
            </React.Fragment>
          )
        }}
      </DS.Consumer>
    </Mode>
   );
}
