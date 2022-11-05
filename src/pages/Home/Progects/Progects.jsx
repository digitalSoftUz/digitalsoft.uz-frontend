import React from 'react';
import { dataProgects } from '../../../data/data';
import { ArrowLeft } from '../../../assets/icons';

const Progects = () => {
  return (
    <React.Fragment>
      <div className="progects__container">
        <div className="container">
          <h1 className='h1__title'>Bizning dasturiy ta'minotni ishlab chiqish misollari</h1>
          <h2 className='h2__title'>
            Dasturiy ta'minotni ishlab chiqish va autsorsing har doim bizning asosiy e'tiborimiz bo'lib kelgan. Biz mijozlarimiz bilan turli xil imkoniyatlarda ishladik, shu jumladan dasturiy ta'minotni ishlab chiqish bo'yicha hamkorlar bilan dasturiy ta'minotni ishlab chiqish bo'yicha guruhlarga o'zimizning dasturiy ta'minot iste'dodlarimiz bilan yordam berish uchun.
          </h2>
          <h2 className='h2__title'>
            Dasturiy ta'minotni ishlab chiqish bo'yicha ba'zi amaliy tadqiqotlarimizni ko'rib chiqamiz:
          </h2>
        </div>
        <div className="progects__content">
          {dataProgects?.map((item,index)=>{
            return(
              <div 
                className="progects__item" key={index}
                style={{
                  background: `url(${item.img})`,
                  backgroundPosition: "center",
                  backgroundSize:"cover"
                  
                }}  
              >
                <p>{item.title}</p>
                <div className='progects__item__description'>
                  <span>{item.description}</span>
                  <div>
                    <span>Asosiy texnologiya</span>
                    <div className='progects__item__techs'>
                      {item.techs?.map((tech, i)=>{
                        return(
                          <div className="p__tech__img" key={i}>
                            <img src={tech.img} alt="" />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <a href="/">Ko'proq ma'lumot olish <ArrowLeft fill={"#FFFFFF"}/></a>
              </div>
            )
          })}
        </div>
        <div className='contact__link'>
          <a href="/">Biz bilan bog’lanish</a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Progects;