import React from 'react';
import { useInView } from 'react-intersection-observer';
import Header from './Header/Header';
import Navbar from '../../views/Navbar2';
import Earth from './Header/Earth';
import { Affix } from 'antd';
import Logo from "../../assets/icons/Logo.png"
import { Word } from '../../components/Threejs/Word/Word';

const HomePage = () => {
  // const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const { ref: myNavbar, inView: myElement1 } = useInView();
  const { ref: myHeader1, inView: Header1 } = useInView();
  const { ref: myHeader2, inView: Header2 } = useInView();
  const { ref: myHeader3, inView: Header3 } = useInView();
  const { ref: myHeader4, inView: Header4 } = useInView();

  // const myRef = useRef()
  // const [myElement, setMyElement] = useState();
  // console.log("Element", myElement)
  // useEffect(()=>{
  //   // console.log("myref", myRef.current)
  //   const observer = new IntersectionObserver((entries)=>{
  //     const entry = entries[0];
  //     setMyElement(entry.isIntersecting)
  //     // console.log(entry)
  //   })
  //   observer.observe(myRef.current)
  // }, [])
  var num = Header1+Header2+Header3+Header4
  // console.log(num)
  // useEffect(()=>{
  //   const body = document.querySelector("#APP")
  //   let span = document.createElement("span")
  //   span.setAttribute("class", "mytrigger mytrigger__header5")
  //   body.append(span)
  // },[])
  return (
    <React.Fragment>
      <div className="home__main">
        <div 
          className={`home__header ear_step${num}`} 
          id={Header1 ? "header__scrolled" : ""}
        >
          {/* <div className='header__show'>
            <Header/>
          </div> */}
          <div className="sphere__header">
            <Word/>
          </div>
          {/* <div className="header__logo">
            <img src={Logo} alt="" />
          </div> */}
          {/* {myElement1 ? "" : <Navbar/>} */}
        </div>
        {/* <Affix>
          <div>
            <span className='mytrigger mytrigger__header1' ref={myHeader1}>{Header1 ? "Yes" : "No"}</span>
            <span className='mytrigger mytrigger__header2' ref={myHeader2}>{Header2 ? "Yes" : "No"}</span>
            <span className='mytrigger mytrigger__header3' ref={myHeader3}>{Header3 ? "Yes" : "No"}</span>
            <span className='mytrigger mytrigger__header4' ref={myHeader4}>{Header4 ? "Yes" : "No"}</span>
          </div>
        </Affix> */}
        {/* <div className="home__header"></div>
        <div className="home__header"></div>
        <div className="home__header"></div>
        <div className="home__header"></div>
        <div className="home__header"></div> */}
          {/* <span className='mytrigger mytrigger__header1' ref={myHeader1}>{Header1 ? "Yes" : "No"}</span> */}
          {/* <span className='mytrigger mytrigger__header2' ref={myHeader2}>{Header2 ? "Yes" : "No"}</span> */}
          {/* <span className='mytrigger mytrigger__header3' ref={myHeader3}>{Header3 ? "Yes" : "No"}</span> */}
          {/* <span className='mytrigger mytrigger__header4' ref={myHeader4}>{Header4 ? "Yes" : "No"}</span> */}
        <span className='mytrigger__navbar' ref={myNavbar}>{myElement1 ? "Yes" : "No"}</span>
      </div>
    </React.Fragment>
  )
}

export default HomePage;