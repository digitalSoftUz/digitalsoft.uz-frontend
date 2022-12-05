import React from 'react';
import Polygon from '../../../components/Particles/Polygon';
import Jarayon_img from "../../../assets/images/jarayon.webp"

const Jarayon = () => {
  return (
    <React.Fragment>
      <div className="jarayon container">
        <div className="jarayon__top">
          <h1 className='jarayon__top__title'>
            Dasturiy taminot ishlab chiqish jarayoni
          </h1>
          <div className="jarayon__content j_top">
            <div className="jarayon__top__polygon">
              <Polygon/>
              <div className="j_t_center">
                Doimiy aloqa
              </div>
              <div className="j_circle j_1">
                <span>Analiz</span>
              </div>
              <div className="j_circle j_2">
                <span>Rivojlanish</span>
              </div>
              <div className="j_circle j_3">
                <span>Sinovdan o'tkazish</span>
              </div>
              <div className="j_circle j_4">
                <span>Yechim</span>
              </div>
              <div className="j_circle j_5">
                <span>Qo'llab quvvatlash</span>
              </div>
            </div>
            <div className='j_t_right'>
              <h1>Bizning  yondashuvimiz va metodologiyamiz</h1>
              <p>
                Bizning mutaxassislarimiz texnik jihatlarga e'tibor berish bilan birga, foydalanishga qulay mahsulotni yetkazib berish haqida qayg'uradilar.
              </p>
              <p>
                Biz sizning biznes muammolaringiz va sohangizni tushunishda faolroq yondashamiz.</p>
              <p>
                Sizning biznesingiz yoki bozoringiz o'zgarishi mumkinligini tushunamiz, shuning uchun biz loyiha talablariga, hatto loyihaning oxirgi bosqichida bo'lsa ham, o'zgarishlarni mamnuniyat bilan qabul qilamiz.
              </p>
            </div>
          </div>
        </div>
        <div className="jarayon__bot">
          <div className="jarayon__content j_bot">
            <div>
              <h1>Muloqotga bizning yondashuvimiz</h1>
              <p>
                Savollaringiz, tashvishlaringiz yoki yangilanishlaringiz bo'lsa, biz doim eshitishga tayyormiz. Biz siz bilan har kuni ishlar qanday ketayotgani va qanday yaxshilanishlar qilishimiz haqida gaplashishimiz mumkin.
              </p>
              <p>
                Siz bizning dasturiy ta'minot bo'yicha kompaniyamiz ofisiga tashrif buyurishingiz va bizning rahbarlarimiz va ishlab chiquvchilarimiz bilan uchrashishingiz mumkin. Shuningdek, biz jamoaning asosiy a'zolarini ofisingizga yuborishimiz mumkin.
              </p>
            </div>
            <div className='j_b_right'>
              <img src={Jarayon_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Jarayon;