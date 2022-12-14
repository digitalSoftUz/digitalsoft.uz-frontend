import React, { Suspense } from 'react';
import Footer from "./views/Footer";
import Navbar from './views/Navbar';
import Mode from './context/context';
import { DS } from './context/context';
import FallbackLoading from "./FallbackLoading"
import Loading from './components/Loading/Loading';
import { Routes, Route, Outlet } from 'react-router-dom';

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
              { x.loading ? <Loading/> : ""}
              <Navbar data={x.homeData.contactInfo}/>
              <Routes>
                <Route path='/' element={<Outlet />}>
                  <Route index element={
                    <Suspense fallback={FallbackLoading}>
                      <Home />
                    </Suspense>
                    } 
                  />
                  <Route path='portfolio' element={
                    <Suspense fallback={FallbackLoading}>
                      <Portfolio />
                    </Suspense>
                    } 
                  />
                  <Route path='vakansiya' element={
                    <Suspense fallback={FallbackLoading}>
                      <Vakansiya />
                    </Suspense>
                    } 
                  />
                  <Route path='about' element={
                    <Suspense fallback={FallbackLoading}>
                      <About />
                    </Suspense>
                    } 
                  />
                  <Route path='xizmatlar' element={
                    <Suspense fallback={FallbackLoading}>
                      <Services />
                    </Suspense>
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
