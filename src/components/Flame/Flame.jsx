import React from 'react';
import "./style.css"

const Flame = () => {
  return (
    <React.Fragment>
      <div className="circle"></div>
      <svg className='flame__svg'>
        <filter id='wavy'>
          <feTurbulence x="0" y="0"  baseFrequency="0.009" numOctaves="5" seed="2">
            <animate 
              attributeName='baseFrequency' 
              dur="60s" 
              values='0.02;0.005;0.02'
              repeatCount="indefinite"  
            />
          </feTurbulence>
          <feDisplacementMap in='SourceGraphic' scale="30"/>
        </filter>
      </svg>
    </React.Fragment>
  )
}

export default Flame;