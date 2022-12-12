import React from 'react';
import Footer from "./views/Footer";
import Navbar from './views/Navbar';
import Mode from './context/context';
import { DS } from './context/context';
import { Routes, Route, Outlet } from 'react-router-dom';
import FallbackLoading from "./FallbackLoading"

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import 'antd/dist/antd.min.css';
const Demo = React.lazy(()=> import("./pages/demo/demo"))

const Home = React.lazy(()=> import("./pages/Home/Home"))
const About = React.lazy(()=> import("./pages/About/About"))
const NoMatch = React.lazy(()=> import("./components/NoMatch/NoMatch"))
const Portfolio = React.lazy(()=> import("./pages/Portfolio/Portfolio"))
const Vakansiya = React.lazy(()=> import("./pages/Vakansiya/Vakansiya"))

export default function App(){
  return ( 
    <Mode>
      <DS.Consumer>
        {(x)=>{
          return(
            <React.Fragment>
              <Navbar data={x.homeData.contactInfo}/>
              <Routes>
                <Route path='/' element={<Outlet />}>
                  <Route index element={
                    <React.Suspense fallback={FallbackLoading}>
                      <Home />
                    </React.Suspense>
                    } 
                  />
                  <Route path='portfolio' element={
                    <React.Suspense fallback={FallbackLoading}>
                      <Portfolio />
                    </React.Suspense>
                    } 
                  />
                  <Route path='vakansiya' element={
                    <React.Suspense fallback={FallbackLoading}>
                      <Vakansiya />
                    </React.Suspense>
                    } 
                  />
                  <Route path='about' element={
                    <React.Suspense fallback={FallbackLoading}>
                      <About />
                    </React.Suspense>
                    } 
                  />
                  <Route path='demo' element={<Demo/>} />
                  <Route path='*' element={<NoMatch/>} />
                </Route> 
              </Routes>
              <Footer data={x.homeData.contactInfo}/>
            </React.Fragment>
          )
        }}
      </DS.Consumer>
    </Mode>
   );
}
