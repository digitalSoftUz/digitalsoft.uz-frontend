import React, { useState, useEffect } from 'react';
import axios from 'axios';
import i18next from 'i18next';
import { Select } from 'antd';
import { BaseUrl } from '../contans';
 import { useTranslation } from "react-i18next";
import { PatternFormat  } from 'react-number-format';
import { 
  SyncOutlined, 
  UploadOutlined, 
  FileOutlined 
 } from '@ant-design/icons';

const { Option } = Select;

const Contact = () => {
  var til = i18next.language
  const { t } = useTranslation()
  const [company, setCompany] = useState("");
  const [fullName, setFullName] = useState("");
  const [servise, setServise] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState([]);
  const [load, setLoad] = useState(false);
  const okText = load ? <SyncOutlined spin /> : t("NAV5")
  
  const handlePost = () =>{
    let formData = new FormData()
    formData.append( "first_name",fullName )
    formData.append( "company",company )
    formData.append( "service",servise )
    formData.append( "email",email )
    formData.append( "phone",phone )
    formData.append( "text",text )
    formData.append( "file",file )

    setLoad(true)

    axios.post(`${BaseUrl}/api/client-message/`, formData).then((res)=>{
      if (res.data.success) {
        setTimeout(() => {
          setLoad(false)
        }, 1500);
      }
    })

  }
  const [dataService, setDataService] = useState([]);
  const [formContact, setFormContact] = useState([]);
  useEffect(()=>{
    var til = i18next.language
    axios.get(`${BaseUrl}/api/service/${til}`).then((res)=>{
      setDataService(res.data)
    })
    axios.get(`${BaseUrl}/api/form-content/${til}?type=Project`).then((res)=>{
      setFormContact(res.data)
    })
  },[])
  return (
    <React.Fragment>
      <div className="contacts__container container">
        <div id='Contact'></div>
        <div className="contacts">
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
                  <p>{t("COMPANYNAME")}</p>
                  <input type="text" onChange={e=>(setCompany(e.target.value))}/>
                </div>
                <div className='inp'>
                  <p>{t("CLIENTNAME")}</p>
                  <input type="text" onChange={e=>(setFullName(e.target.value))}/>
                </div>
              </div>
              <div className="inp__group">
                <div className='inp'>
                  <p>{t("CLIENTPHONE")}</p>
                  <PatternFormat  format={"+998 ## ### ## ##"} onChange={e=>(setPhone(e.target.value))}/>
                </div>
                <div className='inp'>
                  <p>{t("CLIENTPROGECT")}</p>
                  <Select
                    defaultValue=""
                    showArrow={false}
                    dropdownMatchSelectWidth={false}
                    onChange={e=>(setServise(e))}
                    >
                      {dataService?.map((item, index)=>{
                        return(
                          <Option value={item.id} key={index}>
                            {item[`title_${til}`]}
                          </Option>
                        )
                      })}
                    </Select>
                </div>
              </div>
              <div className='textarea'>
                <p>{t("EMAIL")}</p>
                <input type="text" onChange={e=>(setEmail(e.target.value))}/>
              </div>
              <div className="textarea">
                <p>{t("CLIENT_P_INFO")}</p>
                <textarea  onChange={e=>(setText(e.target.value))} cols="50" rows="10"></textarea>
              </div>
              <div className="type__file">
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
      </div>
    </React.Fragment>
  )
}

export default Contact;