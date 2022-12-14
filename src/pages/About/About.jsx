import React, { useEffect, useState } from 'react';
import axios from 'axios';
import i18next from 'i18next';
import Jamoa from './Jamoa/Jamoa';
import Header from './Header/Header';
import Xizmat from './Xizmat/Xizmat';
import { BaseUrl } from '../../contans';
import Contact from '../../views/Contact';
import { DS } from '../../context/context';
import XizmatlarSlider from './XizmatlarSlider/XizmatlarSlider';

const About = () => {
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
          <div className="xizmatlar__page">
            <Header data={data}/>
            <Jamoa data={data.team}/>
            <Xizmat data={data}/>
            <XizmatlarSlider data={x.homeData.mainSeriveces}/>
            <Contact/>
          </div>
        )
      }}
    </DS.Consumer>
  )
}

export default About;