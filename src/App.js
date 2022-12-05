import React from 'react';
import Footer from "./views/Footer";
import Navbar from './views/Navbar';
import Mode from './context/context';
import Home from './pages/Home/Home';
import { DS } from './context/context';
// import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch';
import Xizmatlar from './pages/Xizmatlar/Xizmatlar';
import Portfolio from './pages/Portfolio/Portfolio';
import Vakansiya from './pages/Vakansiya/Vakansiya';
import Demo from './pages/demo/demo';

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import 'antd/dist/antd.min.css';
// import "./style/scss/_IMPORT.scss";

const App = () => {
  return ( 
    <Mode>
      <DS.Consumer>
        {(x)=>{
          return(
            <React.Fragment>
              <Navbar/>
              <Routes>
                <Route path='/' index element={<Home />} />
                <Route path='*' element={<NoMatch/>} />
                {/* <Route path='home' element={<HomePage/>} /> */}
                <Route path='about' element={<Xizmatlar/>} />
                <Route path='portfolio' element={<Portfolio/>} />
                <Route path='vakansiya' element={<Vakansiya/>} />
                <Route path='demo' element={<Demo/>} />
              </Routes>
              <Footer/>
            </React.Fragment>
          )
        }}
      </DS.Consumer>
    </Mode>
   );
}
 
export default App;
