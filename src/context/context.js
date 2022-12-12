import React, { Component, createContext } from 'react';
import axios from "axios";
import i18next from 'i18next';
import { BaseUrl } from '../contans';

export const DS = createContext();

class Mode extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      scroll: 0,
      homeData:[],
      til: i18next.language,
      loading: false
    }
  }
  listenToScroll = () => {
    const winScroll =  document.body.scrollTop || document.documentElement.scrollTop

    this.setState({
      scroll: winScroll,
    })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);

    axios.get(`${BaseUrl}/api/home/${this.state.til}`).then((res)=>{
      // console.log(res.data.data)
      const data = res?.data.data
      this.setState({
        homeData: data
      })
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
      >
        {this.props.children}
      </DS.Provider>
     );
  }
}
 
export default Mode;