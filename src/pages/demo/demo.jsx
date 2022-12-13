import React from 'react';
import "./demo.css"
import SkeletonPortfolio from '../../components/Skeleton/SkeletonProtfolio';

const Demo = () => {
  return (
    <React.Fragment>
      <div className="demo__page">
        <SkeletonPortfolio />
      </div>
    </React.Fragment>
  )
}

export default Demo;