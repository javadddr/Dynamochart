import React from 'react';
import "./SampleDashboard.css"
import DyGauge from '../chartcomponents/DyGauge';
const SampleDashboard = () => {



  const dataGauge = [
    { date: '2022-01-01', VALUE: 120 ,label:"Javad",color:'#E15759'},
    { date: '2022-01-02', VALUE: 240 ,label:"Shahram",color:'#F28E2C'},
    { date: '2022-01-03', VALUE: 120,label:"John",color:'#4E79A7' },
    { date: '2022-01-04', VALUE: 120 ,label:"Tim",color:'#76B7B2'},
  ];
  
  return (
  <div className="ecosystem">
    <div className='dashone'>
      <div className='dashone1'>
      <DyGauge 
        data={dataGauge} 
        target={1100} 
        title={'Customers terminated by cx '} 
        strokeWidth={110} 
        segment="date"
        legendTitle="CX employees"
        chartWidth={630}
        chartHeight={400}
        radius={180}
        padding={{top:20,left:40,right:10,bottom:50}}
        margin={{top:10,left:10,right:10,bottom:10}}
        /> 
      </div>
      <div className='dashone2'></div>
      <div className='dashone3'></div>
      <div className='dashone4'></div>
    </div>
  </div>

  )
};

export default SampleDashboard;
