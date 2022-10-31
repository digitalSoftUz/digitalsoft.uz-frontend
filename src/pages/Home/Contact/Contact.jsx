import React from 'react';

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contacts__container container">
        <div className="contacts">
          <div className="contact__info">
            <h1>Biz sizdan eshitishni istaymiz</h1>
            <div className='contact_steps'>
              <div className='contact_step'>
                <b>1</b>
                <p>Tafsilotlaringizni to'ldiring</p>
                <span>Shaxsiy yechimlar, tavsiyalar, hisob-kitoblar, maxfiylik va o'sha kuni javob kafolatlangan!</span>
              </div>
              <div className='contact_step'>
                <b>2</b>
                <p>Keyingisi nima?</p>
                <span>Hisob menejerlarimizdan biri tez orada siz bilan bog'lanadi.</span>
              </div>
            </div>
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
        
      </div>
    </React.Fragment>
  )
}

export default Contact;