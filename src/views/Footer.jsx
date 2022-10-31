import React from 'react';
import { Logo, Telegram, Facebook, Instagram, Youtube } from '../assets/icons';
import dc_logo from "../assets/images/DC_logo.png"

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer__container">
        <div className="footer container">
          <div className="footer__left">
            <a href='/' className="logo">
              <Logo/>
              <div>
                <p>DIGITAL</p>
                <p>SOFT</p>
              </div>
            </a>
          </div>
          <div className="footer__center">
            <a href="/"><Facebook/></a>
            <a href="/"><Telegram/></a>
            <a href="/"><Instagram/></a>
            <a href="/"><Youtube/></a>
          </div>
          <div className="footer__right">
            <a href='/' className="dc_logo">
              <img src={dc_logo} alt="" />
              <div>
                <p>DIGITAL</p>
                <p>CITY</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  )
}

export default Footer;