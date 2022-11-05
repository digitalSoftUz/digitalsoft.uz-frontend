import React from 'react';

const Header = () => {
  return (
    <React.Fragment>
      <div className="header__xizmatlar container">
        <div className="header__left">
          <h1>
            O’zbekistondagi eng yaxshi veb-saytlarni ishlab chiqish xizmatlari kompaniyasi
          </h1>
          <h2>
            100% shaxsiy jamoa, ijaraga olish va talab bo'yicha masshtablash, yollash to'lovi yo'q
          </h2>
          <p>
            7+ yillik tajribaga ega jamoamiz startaplar , tadbirkorlar va korxonalar uchun kengaytiriladigan, interaktiv va xavfsiz veb-saytlarni yaratadi. Agar siz yangi veb-sayt yaratmoqchi bo'lsangiz yoki joriy veb-saytingizni yangilamoqchi bo'lsangiz, biz sizga belgilangan vaqt oralig'ida kerakli natijalarni yetkazib bera olamiz. Biz mijozlarimizga dastlabki konsaltingdan tortib yakuniy yetkazib berish, qo'llab-quvvatlash va texnik xizmat ko'rsatishgacha bo'lgan to'liq stekli veb-saytlarni ishlab chiqish xizmatlarini taqdim etamiz.
          </p>
          <p>
            Veb-sayt ishlab chiqaruvchi kompaniyani autsorsing qilmoqchimisiz? Yoki veb-sayt ishlab chiqish guruhini yollashni xohlaysizmi? Bugun biz bilan bog'laning!
          </p>
        </div>
        <div className="contact__form">
          <form action="">
            <div className="inp">
              <div>
                <p>Ism</p>
                <input type="text" name=""/>
              </div>
              <div>
                <p>Familiya</p>
                <input type="text" name=""/>
              </div>
            </div>
            <div className="inp">
              <div>
                <p>Elektron pochta</p>
                <input type="text" name=""/>
              </div>
              <div>
                <p>Telefon raqam</p>
                <input type="text" name=""/>
              </div>
            </div>
            <div className="textarea">
              <p>Loyiha haqida qisqacha ma’lumot</p>
              <textarea name="" id="" cols="50" rows="10"></textarea>
            </div>
            <button>Biz bilan bog’lanish</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;