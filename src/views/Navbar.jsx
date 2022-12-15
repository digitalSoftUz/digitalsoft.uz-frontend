import React, { useState } from 'react';
import i18next from 'i18next';
import { DS } from '../context/context';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import { useTranslation } from "react-i18next";
import LogoGrey from "../assets/icons/Logo_grey.png";

const Navbar = (props) => {
  var data = props.data
  const { t } = useTranslation()
  const [burger, setBurger] = useState(true);
  const HandleBurger = () => {
    setBurger(!burger)
  };
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  };
  const Reload = () => {
    window.location.reload()
  }
  const handleRu = () => {
    return i18next.changeLanguage("ru")
  }
  const handleUz = () => {
    return i18next.changeLanguage("uz")
  }
  const handleEn = () => {
    return i18next.changeLanguage("en")
  }
  
  var til = i18next.language
  var til_uz = til === "uz" ? "uz__active" : ""
  var til_ru = til === "ru" ? "ru__active" : ""
  var til_en = til === "en" ? "en__active" : ""
  return (
    <DS.Consumer>
      {(x)=>{
        const items = (
          <Menu
            className='nav__dropdown'
            items={[
              { label: <Button onClick={()=>{handleUz();Reload();x.handleLoad()}} type='link'>UZ</Button>, key: "0", className: til_uz},
              { label: <Button onClick={()=>{handleRu();Reload();x.handleLoad()}} type='link'>РУ</Button>, key: "1", className: til_ru},
              { label: <Button onClick={()=>{handleEn();Reload();x.handleLoad()}} type='link'>EN</Button>, key: "2", className: til_en},
            ]}
          />
        );
        return(
          <div 
            className={x.scroll > 100 ? "navbar__fixed nav__scrolled" : "navbar__fixed"}
            id={burger ? "" : "blur__off"}
          >
            <div className="navbar container">
              <NavLink to='/' className="logo" onClick={()=>{scrollTop(); x.handleLoad()}}>
                <img src={LogoGrey} alt="" />
                <div>
                  <p>DIGITAL</p>
                  <p>SOFT</p>
                </div>
              </NavLink>
              <button className={burger ? 'burger__btn' : 'burger__btn burger__close'} onClick={HandleBurger}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <nav className={burger ? 'nav' : 'nav nav__show'}>
                <div onClick={HandleBurger} className={burger ? "nav__close" : "nav__close nav__opened"}></div>
                <NavLink to='about' onClick={()=>{scrollTop(); x.handleLoad()}}>{t("NAV1")}</NavLink>
                <NavLink to='xizmatlar' onClick={()=>{scrollTop(); x.handleLoad()}}>{t("NAV2")}</NavLink>
                <NavLink to='portfolio' onClick={()=>{scrollTop(); x.handleLoad()}}>{t("NAV3")}</NavLink>
                <NavLink to='vakansiya' onClick={()=>{scrollTop(); x.handleLoad()}}>{t("NAV4")}</NavLink>
                <a href={`tel: ${data?.phone1}`}>{data?.phone1}</a>
                <Dropdown overlay={items} placement="bottom" arrow>
                  <Button type='link'>{t("TIL")}</Button>
                </Dropdown>
              </nav>
            </div>
          </div>
        )
      }}
      
    </DS.Consumer>
  )
}

export default Navbar;