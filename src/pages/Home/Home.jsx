import React from 'react';
import Header from './Header/Header';
import Jarayon from './Jarayon/Jarayon';
import Partnyors from './Partnyors/Partnyors';
import Xizmatlar from './Xizmatlar/Xizmatlar';
import Jamoa from './Jamoa/Jamoa';
import Hamkorlik from './Hamkorlik/Hamkorlik';
import Boshlash from "./Boshlash/Boshlash"
import Texnologiyalar from './Texnologiyalar/Texnologiyalar';
import Xizmat from './Xizmat/Xizmat';
import Proyekts from './Proyekts/Proyekts';
import Savollar from './Savollar/Savollar';
import Contact from './Contact/Contact';


const Home = () => {
  return (
    <React.Fragment>
      <Header/> {/* tayyor */}
      <Partnyors/> {/* tayyor */}
      <Xizmatlar/> {/* tayyor */}
      <Jarayon/> {/* tayyor */}
      <Jamoa/> {/* tayyor */}
      <Hamkorlik/> {/*  */}
      <Boshlash/> {/* tayyor */}
      <Texnologiyalar/> {/*  */}
      <Xizmat/> {/*  */}
      <Proyekts/> {/*  */}
      <Savollar/> {/*  */}
      <Contact/> {/*  */}
    </React.Fragment>
  )
}

export default Home;