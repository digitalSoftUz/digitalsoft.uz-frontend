import React from 'react';
import Header from './Header/Header';
import Partnyors from './Partnyors/Partnyors';
import Xizmatlar from './Xizmatlar/Xizmatlar';

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <Partnyors/>
      <Xizmatlar/>
    </React.Fragment>
  )
}

export default Home;