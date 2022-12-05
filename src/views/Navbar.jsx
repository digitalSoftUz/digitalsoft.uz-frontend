import React, { useState } from 'react';
// import {Logo} from "../assets/icons"
import { Link } from 'react-router-dom';
import { DS } from '../context/context';
import LogoGrey from "../assets/icons/Logo_grey.png"

const Navbar = () => {
  const [burger, setBurger] = useState(true);
  const HandleBurger = () => {
    setBurger(!burger)
  }
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
                {/* <Logo/> */}
                <img src={LogoGrey} alt="" />
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
                <Link to='about' type='link'>Biz haqimizda</Link>
                <Link to='xizmatlar' type='link'>Xizmatlar</Link>
                <Link to='portfolio' type='link'>Portfolio</Link>
                <Link to='vakansiya' type='link'>Vakansiya</Link>
                <a href='#Contact' className="link">Biz bilan bog’lanish</a>
              </nav>
            </div>
          </div>
        )
      }}
      
    </DS.Consumer>
  )
}

export default Navbar;