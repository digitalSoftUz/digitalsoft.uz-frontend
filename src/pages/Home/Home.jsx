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
import Progects from './Progects/Progects';
import Savollar from './Savollar/Savollar';
import Contact from './Contact/Contact';
import Comments from './Comments/Comments'

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
      <Texnologiyalar/> {/* tayyor */}
      <Xizmat/> {/* tayyor */}
      <Progects/> {/* tayyor */}
      <Comments/> {/* tayyor */}
      <Savollar/> {/* tayyor */}
      <Contact/> {/* tayyor */}
    </React.Fragment>
  )
}

export default Home;