import React, { useEffect, useState } from 'react';
import axios from 'axios';
import i18next from 'i18next';
import { BaseUrl } from '../../contans';
import Contact from '../../views/Contact';
import { DS } from '../../context/context';
import Xizmat from '../About/Xizmat/Xizmat';
import Slider from '../Portfolio/Slider/Slider';
import Xizmatlar from '../Home/Xizmatlar/Xizmatlar';

const Services = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    var til = i18next.language
    axios.get(`${BaseUrl}/api/about/${til}/`).then((res)=>{
      setData(res.data)
    })
  },[])
  return (
    <DS.Consumer>
      {(x)=>{
        return(
          <React.Fragment>
            <div className="page__xizmatlar">
              <Xizmatlar data={x.homeData}/>
              <Xizmat data={data}/>
              <Slider data={x.homeData}/>
              <Contact/>
            </div>
          </React.Fragment>
        )
      }}
    </DS.Consumer>
    
  )
}

export default Services;