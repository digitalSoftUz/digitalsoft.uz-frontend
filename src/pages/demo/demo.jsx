import React from 'react';
import "./demo.css"
// import img1 from "../../assets/images/Progects/CS.png"
// import img2 from "../../assets/images/Progects/DCG.png"
// import img3 from "../../assets/images/Progects/HA.png"
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