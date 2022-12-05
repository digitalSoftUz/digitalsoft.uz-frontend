import React, { useState } from 'react';
import { Vakancy } from '../../assets/icons';
import { dataVacancy } from '../../data/data';
import { ComplexAnimatedModal } from "./Modal";
import { 
  SyncOutlined, 
  CloseOutlined, 
  UploadOutlined, 
  FileOutlined 
} from '@ant-design/icons';

const Vakansiya = () => {
  const [opened, setOpened] = useState(false);
  const [load, setLoad] = useState(false);
  const [file, setFile] = useState([]);
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const okText = load ? <SyncOutlined spin /> : "Rezume yuborish"
  const CloseModal = () =>{
    setLoad(true)
    setTimeout(() => {
      setOpened(false)
      setLoad(false)
      ClearAll()
    }, 1000);
  }
  const CloseModalX = () =>{
    setOpened(false)
    ClearAll()
  }
  const ClearAll = () =>{
    setUsername("")
    setSurname("")
    setEmail("")
    setPhone("")
    setFile([])
  }
  return (
    <React.Fragment>
      <div className="vakansiya__page container">
        <Vakancy/>
        {dataVacancy?.map((item, index)=>{
          return(
            <div className="vacancys" key={index}>
              <div className="vacancy__left">
                <h1>{item.name}</h1>
              </div>
              <div className="vacancy__right">
                <h1>{item.title}</h1>
                <div className='vacancy__info'>
                  <div>
                    <p>{item.dis1}</p>
                    <span>{item.sub1}</span>
                  </div>
                  <div>
                    <p>{item.dis2}</p>
                    <span>{item.sub2}</span>
                  </div>
                </div>
                <div className='vacancy__btn'>
                  <button onClick={() => setOpened(true)}>Rezume jo’natish</button>
                </div>
                
              </div>
            </div>
          )
        })}
        <ComplexAnimatedModal opened={opened} onClose={() => setOpened(false)}>
          <div className="contacts contact__modal">
            <div className="contact__info">
              <h1>SIZNING RAQAMLI HAMKORINGIZ</h1>
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
              <div className='form'>
                <div className="inp">
                  <div>
                    <p>Ism</p>
                    <input type="text" value={username} onChange={e=>(setUsername(e.target.value))}/>
                  </div>
                  <div>
                    <p>Familiya</p>
                    <input type="text" value={surname} onChange={e=>(setSurname(e.target.value))}/>
                  </div>
                </div>
                <div className="inp">
                  <div>
                    <p>Elektron pochta</p>
                    <input type="text" value={email} onChange={e=>(setEmail(e.target.value))}/>
                  </div>
                  <div>
                    <p>Telefon raqam</p>
                    <input type="text" value={phone} onChange={e=>(setPhone(e.target.value))}/>
                  </div>
                </div>
                <div className="inp type__file">
                  <label htmlFor="type__file">
                    <input 
                      type="file" id='type__file' 
                      onChange={(e)=>{setFile(e.target.files[0])}}
                    />
                    {file.length === 0 ?  <><UploadOutlined />Fayl yuklash</> : <><FileOutlined /> {file.name}</>}
                  </label>
                </div>
                <button className="btn__animation" onClick={CloseModal}>
                  {okText}
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <button className='close__btn'  onClick={CloseModalX}>
            <CloseOutlined />
          </button>
        </ComplexAnimatedModal>
      </div>
    </React.Fragment>
  )
}

export default Vakansiya;