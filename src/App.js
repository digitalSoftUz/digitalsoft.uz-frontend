import React from 'react';
import Home from './pages/Home/Home';
import Navbar from './views/Navbar';
import Footer from "./views/Footer"
import Mode from './context/context';
import { DS } from './context/context';
import { Routes, Route } from 'react-router-dom';

import 'antd/dist/antd.min.css'

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
                <Route path='*' element={<h1>404</h1>} />
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
