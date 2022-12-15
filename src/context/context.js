import React, { Component, createContext } from 'react';
import axios from "axios";
import i18next from 'i18next';
import { BaseUrl } from '../contans';
import Loading from '../components/Loading/Loading';

export const DS = createContext();

class Mode extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      scroll: 0,
      homeData:[],
      til: i18next.language,
      loading: true
    }
  }
  listenToScroll = () => {
    const winScroll =  document.body.scrollTop || document.documentElement.scrollTop

    this.setState({
      scroll: winScroll,
    })
  }
  handleLoad = () =>{
    if (this.state.homeData.length === 0 ) {
      this.setState({
        loading: true
      })
    } else{
      this.setState({
        loading: false
      })
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
    var body = document.getElementById("APP")
    if (this.state.loading) {
      body.style.position = "fixed"
    } 

    axios.get(`${BaseUrl}/api/home/${this.state.til}`).then((res)=>{
      const data = res?.data.data
      this.setState({
        homeData: data,
      })
      setTimeout(() => {
        this.setState({
          loading: false
        })
        body.style.position = "static"
      }, 1000);
    })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  render() { 
    return ( 
      <DS.Provider
        value={{
          ...this.state,
        }}
        handleLoad={this.handleLoad}
      >
        { this.state.loading ? <Loading/> : ""}
        {this.props.children}
      </DS.Provider>
     );
  }
}
 
export default Mode;