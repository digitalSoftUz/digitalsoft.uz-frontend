import React from 'react';
import { Collapse } from 'antd';
import { dataSavol } from '../../../data/data';

const { Panel } = Collapse;

const Savollar = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="savollar__container">
          <h1 className='h1__title'>Tez - tez so'raladigan savollar</h1>
          <h2 className='h2__title'>
            Bu erda mijozlarimiz tez-tez so'raydigan dasturiy ta'minot autsorsingiga oid ba'zi savollar
          </h2>
          <Collapse onChange={onChange} className="savollar" expandIconPosition='end'>
            {dataSavol?.map((item, index)=>{
              return(
                <Panel header={item.title} key={index}>
                  <p>{item.text}</p>
                </Panel>
              )
            })}
          </Collapse>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Savollar;