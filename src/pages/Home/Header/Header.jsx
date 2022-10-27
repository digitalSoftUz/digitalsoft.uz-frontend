import React from 'react';
// import Header3D from '../../../components/Header3D/Header3D';
// import Marble3D from '../../../components/3dMarblr/marble';
import { LogoHeader } from '../../../assets/icons';
import Sphere from "../../../assets/images/sphere.png"

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="header__container">
          <div className="header__left">
            <h1>Digital Soft raqamli kelajak sari qadam.</h1>
            <h2>
              DigitalSoft, dasturiy ta'minot ishlab chiqish kompaniyasi, mijozlarning biznes muammolari, ehtiyojlari, og'riqli nuqtalariga e'tibor qaratish va biznes maqsadlariga yo'naltirilgan dasturiy echimlarni taqdim etish orqali biznesni raqamlashtirishga yordam beradi.
            </h2>
            <a href="/">Biz bilan bog’laning</a>
          </div>
          <div className="header__right">
            {/* <Marble3D/> */}
            <div className="sphere__header">
              <img src={Sphere} alt="" />
            </div>
            <LogoHeader/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;