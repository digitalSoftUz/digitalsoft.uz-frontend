import React from 'react';
import { Skeleton } from 'antd';

const SkeletonPortfolio = () => {
  const numbers = [{
    "id": 1
  }, {
    "id": 2
  }, {
    "id": 3
  }, {
    "id": 4
  }, {
    "id": 5
  }, {
    "id": 6
  }, {
    "id": 7
  }]
  return (
    <React.Fragment>
      <div className="filter__results">
        {numbers?.map((item, index)=>{
          return(
            <Skeleton.Image 
              active={true} 
              key={index} 
              className='filter__item' 
            />
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default SkeletonPortfolio;