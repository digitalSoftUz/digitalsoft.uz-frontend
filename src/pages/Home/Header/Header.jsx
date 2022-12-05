import React from 'react';
import Earth from './Earth';
import App from './sphere';
import Logo from "../../../assets/icons/Logo.png"

const Header = () => {
  return (
    <React.Fragment>
      <div className="header_home">
        <div className="earth">
          <App/>
          <img src={Logo} alt="" />
        </div>
        <div className="my__colors">
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
        </div>
        <h1>
          Digital <span>Soft</span> raqamli kelajak sari qadam.
        </h1>
      </div>
    </React.Fragment>
  )
}

export default Header;