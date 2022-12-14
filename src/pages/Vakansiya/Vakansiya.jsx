import React, { useState, useEffect } from 'react';
import axios from 'axios';
import i18next from 'i18next'
import { BaseUrl } from '../../contans';
import { Vakancy } from '../../assets/icons';
import { useTranslation } from "react-i18next";
import { ComplexAnimatedModal } from "../../components/Modal";
import { PatternFormat  } from 'react-number-format';
import { 
  SyncOutlined, 
  CloseOutlined, 
  UploadOutlined, 
  FileOutlined 
} from '@ant-design/icons';
import SkeletonVacancy from '../../components/Skeleton/SkeletonVacancy';

const Vakansiya = () => {
  var til = i18next.language
  const { t } = useTranslation()
  const [data, setData] = useState([]);
  const [opened, setOpened] = useState(false);
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState([]);
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const okText = load ? <SyncOutlined spin /> : t("SEND_RESUME")
  const CloseModalX = () =>{
    setOpened(false)
    ClearAll()
  }
  const ClearAll = () =>{
    setUsername("")
    setSurname("")
    setEmail("")
    setPhone("")
    setText("")
    setFile([])
  }
  const handlePost = () =>{
    let formData = new FormData()
    formData.append( "first_name",username )
    formData.append( "last_name",surname )
    formData.append( "email",email )
    formData.append( "phone",phone )
    formData.append( "text",text )
    formData.append( "file",file )

    setLoad(true)

    axios.post(`${BaseUrl}/api/resume/`, formData).then((res)=>{
      if (res.data.success) {
        setTimeout(() => {
          setLoad(false)
          ClearAll()
        }, 1500);
      }
    })
  }
  const [formContact, setFormContact] = useState([]);
  useEffect(()=>{
    var til = i18next.language
    axios.get(`${BaseUrl}/api/vacansy/${til}/`).then((res)=>{
      setTimeout(() => {
        setLoading(false)
      }, 700);
      setData(res.data)
    })
    axios.get(`${BaseUrl}/api/form-content/${til}?type=Resume`).then((res)=>{
      setFormContact(res.data)
    })
  },[])
  return (
    <React.Fragment>
      <div className="vakansiya__page container">
        <Vakancy/>
        {loading 
        ? <SkeletonVacancy/>
        : data?.map((item)=>{
            return(
              <div className="vacancys" key={item.id}>
                <div className="vacancy__left">
                  <h1>{item[`short_title_${til}`]}</h1>
                </div>
                <div className="vacancy__right">
                  <h1>{item[`title_${til}`]}</h1>
                  <div className='vacancy__info'>
                    <span dangerouslySetInnerHTML={{__html:item[`text_${til}`]}}></span>
                  </div>
                  <div className='vacancy__btn'>
                    <button onClick={() => setOpened(true)}>{t("SEND_RESUME")}</button>
                  </div>
                </div>
              </div>
            )
          })
        } 
        <ComplexAnimatedModal opened={opened} onClose={() => setOpened(false)}>
          <div className="contacts contact__modal">
            <div className="contact__info">
              <h1>{formContact?.[`title_${til}`]}</h1>
              <div className='contact_steps' id={formContact?.hide_second_part ? "hide__sec":""}>
                <div className='contact_step'>
                  <b>1</b>
                  <p>{formContact?.[`subtitle1_${til}`]}</p>
                  <span>{formContact?.[`text1_${til}`]}</span>
                </div>
                <div className='contact_step' id='second__step'>
                  <b>2</b>
                  <p>{formContact?.[`subtitle2_${til}`]}</p>
                  <span>{formContact?.[`text2_${til}`]}</span>
                </div>
              </div>
            </div>
            <div className="contact__form">
              <div className='form'>
                <div className="inp__group">
                  <div className='inp'>
                    <p>{t("NAME")}</p>
                    <input type="text" value={username} onChange={e=>(setUsername(e.target.value))}/>
                  </div>
                  <div className='inp'>
                    <p>{t("SUR_NAME")}</p>
                    <input type="text" value={surname} onChange={e=>(setSurname(e.target.value))}/>
                  </div>
                </div>
                <div className="inp__group">
                  <div className='inp'>
                    <p>{t("EMAIL")}</p>
                    <input type="text" value={email} onChange={e=>(setEmail(e.target.value))}/>
                  </div>
                  <div className='inp'>
                    <p>{t("CLIENTPHONE")}</p>
                    <PatternFormat value={phone} format={"+998 ## ### ## ##"} onChange={e=>(setPhone(e.target.value))}/>
                  </div>
                </div>
                <div className="textarea">
                  <p>{t("ABOUT")}</p>
                  <textarea  onChange={e=>(setText(e.target.value))} cols="50" rows="10"></textarea>
                </div>
                <div className="inp type__file">
                  <label htmlFor="type__file">
                    <input 
                      type="file" id='type__file' 
                      onChange={(e)=>{setFile(e.target.files[0])}}
                    />
                    {file.length === 0 ?  <><UploadOutlined />{t("CLIENT_FILE")}</> : <><FileOutlined /> {file.name}</>}
                  </label>
                </div>
                <button className="btn__animation" onClick={handlePost}>
                  {okText}
                  <span className='span__anima1'></span>
                  <span className='span__anima2'></span>
                  <span className='span__anima3'></span>
                  <span className='span__anima4'></span> 
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