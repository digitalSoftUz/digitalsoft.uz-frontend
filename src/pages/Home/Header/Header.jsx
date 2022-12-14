import React from 'react';
import App from './sphere';
// import Earth from './Earth';
import i18next from 'i18next';
import Logo from "../../../assets/icons/Logo.webp"

const Header = (props) => {
  var data = props.data
  var til = i18next.language
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
        <h1 dangerouslySetInnerHTML={{__html:data?.[`title_${til}`]}}></h1>
      </div>
    </React.Fragment>
  )
}

export default Header;