import React from 'react';
import i18next from 'i18next';
import dc_logo from "../assets/images/DC_logo.png"
import { Logo, Telegram, Facebook, Instagram, Youtube } from '../assets/icons';

const Footer = (props) => {
  var data = props.data
  var til = i18next.language
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
          <div className="footer__right">
            <a href='/' className="dc_logo">
              <img src={dc_logo} alt="" />
              <div>
                <p>DIGITAL</p>
                <p>CITY</p>
              </div>
            </a>
          </div>
          <div className="footer__center">
            <p dangerouslySetInnerHTML={{__html:data?.[`address_${til}`]}}></p>
            <a href={`tel: ${data?.phone1}`}>{data?.phone1}</a>
            <div>
              <a href={data?.facebook}><Facebook/></a>
              <a href={data?.telegram}><Telegram/></a>
              <a href={data?.instagram}><Instagram/></a>
              <a href={data?.youtube}><Youtube/></a>
            </div>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  )
}

export default Footer;