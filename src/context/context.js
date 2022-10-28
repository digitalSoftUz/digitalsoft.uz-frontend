import React, { Component, createContext } from 'react';

export const DS = createContext();

class Mode extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      scroll: 0
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
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  render() { 
    // console.log(this.state.scroll)
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