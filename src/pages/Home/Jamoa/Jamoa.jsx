import React from 'react';
import { Check } from '../../../assets/icons';
import { dataJamoa } from '../../../data/data';

const Jamoa = () => {
  return (
    <React.Fragment>
      <div className="jamoa">
        <div className="jamoa__container container">
          <div className="jamoa__galery">
            {dataJamoa?.map((item, index)=>{
              return(
                <div className="jamoa__image" key={index}>
                  <img src={item.img} alt="" />
                </div>
              )
            })}
          </div>
          <div className="jamoa__info">
            <h1>DigitalSoft - raqamli kelajak sari qadam</h1>
            <p>
              DigitalSoft nafaqat dasturiy ta'minot ishlab chiqaruvchi kompaniya, balki raqamli innovatsiyalar orqali dunyoni o'zgartirishga intilayotgan yuqori darajadagi muhandislarning do'stona hamjamiyatidir. Barcha ko'nikmalarimiz, bilimlarimiz va tajribamizdan foydalanib, biz mijozlarimizga yangi cho'qqilarni zabt etishda va dunyoni biroz yaxshiroq qilishda yordam beramiz.
            </p>
            <p>
              Bizning korporativ missiyamizni shakllantirish oson, lekin bajarish qiyin. Biz IT yechimlarni yaratamiz. Mijozlarimiz bilan birgalikda biz dunyoni hamma uchun qulayroq va yaxshiroq joyga aylantiramiz.
            </p>
            <span>
              <div>
                <Check/>
              </div>
              Biz jamoamiz bilan faxrlanamiz va doimo rivojlanib boramiz
            </span>
            <span>
              <div>
                <Check/>
              </div>
              Moslashuvchan va ochiq ishlasak, kerakli natijalarga erishamiz
            </span>
            <span>
              <div>
                <Check/>
              </div>
              Biz o'zimiz yoqtirgan narsani qilamiz va buni yaxshi qilamiz
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Jamoa;