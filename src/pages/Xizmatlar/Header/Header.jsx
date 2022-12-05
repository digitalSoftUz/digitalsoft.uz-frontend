import React from 'react';
import Video from "../../../assets/video/video.mp4"
import { dataInfo } from '../../../data/data';

const Header = () => {
  return (
    <React.Fragment>
      <div className="header__xizmatlar container">
        <div className="header__left">
          <h1>
            DigitalSoft - raqamli kelajak sari qadam
          </h1>
          <p>
            DigitalSoft nafaqat dasturiy ta'minot ishlab chiqaruvchi kompaniya, balki raqamli innovatsiyalar orqali dunyoni o'zgartirishga intilayotgan yuqori darajadagi muhandislarning do'stona hamjamiyatidir. Barcha ko'nikmalarimiz, bilimlarimiz va tajribamizdan foydalanib, biz mijozlarimizga yangi cho'qqilarni zabt etishda va dunyoni biroz yaxshiroq qilishda yordam beramiz.
          </p>
          <p>
            Bizning korporativ missiyamizni shakllantirish oson, lekin bajarish qiyin. Biz IT yechimlarni yaratamiz. Mijozlarimiz bilan birgalikda biz dunyoni hamma uchun qulayroq va yaxshiroq joyga aylantiramiz.
          </p>
        </div>
        <div className="header__right">
          <div className="header__video">
            <video 
              src={Video} 
              height="auto"
              width={"100%"}
              autoPlay
              loop
              playsInline
              muted
              // controls
            ></video>
          </div>
        </div>
      </div>
        <div className="info__content container">
          {dataInfo?.map((item, index)=>{
            return(
              <div className="info__item" key={index}>
                <div className="info__img">
                  <img src={item.img} alt="" />
                </div>
                <p>{item.number}</p>
                <span>{item.title}</span>
              </div>
            )
          })}
        </div>
    </React.Fragment>
  )
}

export default Header;