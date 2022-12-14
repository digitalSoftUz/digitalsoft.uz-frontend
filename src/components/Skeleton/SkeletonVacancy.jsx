import React from 'react';
import { Skeleton } from 'antd';
import { DotChartOutlined } from '@ant-design/icons';

const SkeletonVacancy = () => {
  const numbers = [{
    "id": 1
  }, {
    "id": 2
  }, {
    "id": 3
  }, {
    "id": 4
  }]
  return (
    <React.Fragment>
        {numbers?.map((item, index)=>{
          return(
            <div className="vacancys" key={index} style={{width:"100%"}}>
              <div className="vacancy__left" style={{width:"100%"}}>
                <Skeleton.Node active={true} style={{width:"100%"}}>
                  <DotChartOutlined style={{ fontSize: 40, color: '#bfbfbf' }} />
                </Skeleton.Node>
              </div>
              <div className="vacancy__right" style={{width:"100%"}}>
                <Skeleton active={true} size={"default"}/>
                <div className='vacancy__btn'>
                  <Skeleton.Input active={true} size={"default"} style={{width:"30%"}} block={false} />
                </div>
              </div>
              <br /><br />
            </div>
          )
        })}
    </React.Fragment>
  )
}

export default SkeletonVacancy;