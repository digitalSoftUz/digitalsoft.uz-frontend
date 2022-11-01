import React from 'react';
// import ParticleMap from '../../../components/Particles/ParticleMap';
import { dataHamkorlik } from '../../../data/data';
// import { UzMap } from '../../../assets/icons';
import Map from "../../../assets/images/map.png"

const Hamkorlik = () => {
  return (
    <React.Fragment>
      <div className="hamkorlik container">
        <div className="hamkorlik__left">
          <h1 className='h1__title'>DigitalSoft halol hamkorlik tarafdori</h1>
          <h2 className='h2__title'>Biz istiqbolli rahbarlarga raqamli davrda muvaffaqiyat qozonish uchun o'z korxonalarini texnologiya yordamida o'zgartirishga yordam beramiz.</h2>
          <h2 className='h2__title'>Tadbirkorlik, yetakchilik, loyihalarni yetkazib berish, mijozlar tajribasi va texnologiyalar bo‘yicha 2 yildan ortiq tajribamiz bilan biz mavjud IT bozorini o‘zgartirmoqdamiz. Biz mijozlarimiz bilan halol hamkorlikka ishonamiz. Ulardan biriga aylaning</h2>
          <a href="/">Biz bilan bog’laning</a>
        </div>
        <div className="hamkorlik__right">
          {/* <ParticleMap data={dataHamkorlik}/> */}
          <div className="uzb__map">
            <img src={Map} alt="" />
          </div>
          {dataHamkorlik?.map((item, index)=>{
            return(
              <div className="map__circle" style={{"--i":`${index}`, "--l":`${dataHamkorlik.length}`}} key={index}>
                <img src={item.img} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hamkorlik;