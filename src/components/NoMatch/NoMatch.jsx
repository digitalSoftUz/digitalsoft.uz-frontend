import React from 'react';
import "./style.css"
import { Result } from 'antd';

const NoMatch = () => {
  
  return (
    <React.Fragment>
      <div className="NoMatch" id='nomatch'>
      <Result
        status="404"
        title="404 "
        subTitle="Kechirasiz, siz tashrif buyurgan sahifa mavjud emas!"
        // extra={<Button type="link">Back Home</Button>}
      />
      <a href='/' class="cybr-btn">
        Bosh sahifaga qaytish<span aria-hidden>_</span>
        <span aria-hidden class="cybr-btn__glitch">Bosh sahifaga qaytish_</span>
        <span aria-hidden class="cybr-btn__tag">404</span>
      </a>
      </div>
    </React.Fragment>
  )
}

export default NoMatch;