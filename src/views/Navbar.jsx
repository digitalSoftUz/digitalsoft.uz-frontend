import React, { useState } from 'react';
import {Logo} from "../assets/icons"
import { Link } from 'react-router-dom';
import { DS } from '../context/context';
import { Button, Dropdown, Menu } from 'antd';

const Navbar = () => {
  const [burger, setBurger] = useState(true);
  const HandleBurger = () => {
    setBurger(!burger)
  }
  const menu1 = (
    <Menu
      className='nav__dropdown menu1'
      items={[
        { label: <Link to="/">Biznes analiz</Link>, key: "0", },
        { label: <Link to="/">UI/UX dizayn</Link>, key: "1", },
        { label: <Link to="/">Dasturiy taminot <br /> ishlab chiqish</Link>, key: "2", },
        { label: <Link to="/">QA va Testing</Link>, key: "3", },
        { label: <Link to="/">Elektron tijorat</Link>, key: "4", },
        { label: <Link to="/">Blog</Link>, key: "5", },
      ]}
    />
  );
  const menu2 = (
    <Menu
      className='nav__dropdown menu2'
      items={[
        { label: <Link to="/">Sog’liqni saqlash</Link>, key: "0", },
        { label: <Link to="/">Iqtisodiy boshqaruv</Link>, key: "1", },
        { label: <Link to="/">Online ta’lim</Link>, key: "2", },
        { label: <Link to="/">Meida</Link>, key: "3", },
        { label: <Link to="/">Sayohat va turizm</Link>, key: "4", },
        { label: <Link to="/">Elektron tijorat</Link>, key: "5", },
        { label: <Link to="/">Logistika va transport</Link>, key: "6", },
        { label: <Link to="/">Ish o’rinlari</Link>, key: "7", },
      ]}
    />
  );
  const menu3 = (
    <Menu
      className='nav__dropdown menu3'
      items={[
        { label: <Link to="/">C/C++</Link>, key: "0", },
        { label: <Link to="/">Flutter</Link>, key: "1", },
        { label: <Link to="/">Java Script</Link>, key: "2", },
        { label: <Link to="/">Golang</Link>, key: "3", },
        { label: <Link to="/">Swift</Link>, key: "4", },
        { label: <Link to="/">Angular</Link>, key: "5", },
        { label: <Link to="/">Php</Link>, key: "6", },
        { label: <Link to="/">Kotlin</Link>, key: "7", },
        { label: <Link to="/">React</Link>, key: "8", },
        { label: <Link to="/">Python</Link>, key: "9", },
        { label: <Link to="/">.NET</Link>, key: "10", },
        { label: <Link to="/">Vue Js</Link>, key: "11", },
        { label: <Link to="/">Node</Link>, key: "12", },
        { label: <Link to="/">Java</Link>, key: "13", },
      ]}
    />
  );
  const menu4 = (
    <Menu
      className='nav__dropdown menu4'
      items={[
        { label: <Link to="/">Jamoa</Link>, key: "0", },
        { label: <Link to="/">Aloqa</Link>, key: "1", },
        { label: <Link to="/">Ishlab chiqish jarayoni</Link>, key: "2", },
        { label: <Link to="/">Karyera</Link>, key: "3", },
        { label: <Link to="/">Mijozlar</Link>, key: "4", },
      ]}
    />
  );
  
  return (
    <DS.Consumer>
      {(x)=>{
        return(
          <div 
            className={x.scroll > 100 ? "navbar__fixed nav__scrolled" : "navbar__fixed"}
            id={burger ? "" : "blur__off"}
          >
            <div className="navbar container">
              <a href='/' className="logo">
                <Logo/>
                <div>
                  <p>DIGITAL</p>
                  <p>SOFT</p>
                </div>
              </a>
              <button className={burger ? 'burger__btn' : 'burger__btn burger__close'} onClick={HandleBurger}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <nav className={burger ? 'nav' : 'nav nav__show'}>
                <div onClick={HandleBurger} className={burger ? "nav__close" : "nav__close nav__opened"}></div>
                <Dropdown overlay={menu1} placement="bottom" arrow>
                  <a href='xizmatlar' type='link'>Xizmatlar</a>
                </Dropdown>
                <Dropdown overlay={menu2} placement="bottom" arrow>
                  <Button type='link'>Raqamlashtirish</Button>
                </Dropdown>
                <Dropdown overlay={menu3} placement="bottom" arrow>
                  <Button type='link'>Ish o’rinlari</Button>
                </Dropdown>
                <Dropdown overlay={menu4} placement="bottom" arrow>
                  <Button type='link'>Biz haqimizda</Button>
                </Dropdown>
                <Link className="link" to={"/"}>Biz bilan bog’lanish</Link>
              </nav>
            </div>
          </div>
        )
      }}
      
    </DS.Consumer>
  )
}

export default Navbar;