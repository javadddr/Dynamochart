import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {DyLineDate} from "dynamochart";

import './Gifvs1.css';



const Gifvs1 = () => {

  const data = [
    { date: "2022-01-01",label:'Reynold', value: 200 },
    { date: "2022-01-03",label:'Patrik', value: 250 },
    { date: "2022-01-03",label:'Kenny', value: 180 },
    { date: "2022-01-04",label:'Patrik', value: 300 },
    { date: "2022-01-01",label:'Kenny', value: 280 },
    { date: "2022-02-01",label:'Patrik', value: 220 },
    { date: "2022-02-01",label:'Reynold',value: 300 },
    { date: "2022-02-02",label:'Kenny', value: 450 },
    { date: "2022-02-02",label:'Reynold', value: 280 },
    { date: "2022-03-01",label:'Kenny', value: 600 },
    { date: "2022-03-01",label:'Britttany', value: 780 },
    { date: "2022-03-01",label:'Britttany', value: 320 }
  ];

  const codeString = `import React from 'react'
import {DyLineDate} from 'dynamochart'
const App = () => {

  const data = [
    { date: "2022-01-01",label:'Eleanor', value: 200 },
    { date: "2022-01-03",label:'Emma', value: 250 },
    { date: "2022-01-03",label:'Sophia', value: 180 },
    { date: "2022-01-04",label:'Emma', value: 300 },
    { date: "2022-01-01",label:'Sophia', value: 280 },
    { date: "2022-02-01",label:'Emma', value: 220 },
    { date: "2022-02-01",label:'Eleanor',value: 300 },
    { date: "2022-02-02",label:'Sophia', value: 450 },
    { date: "2022-02-02",label:'Eleanor', value: 280 },
    { date: "2022-03-01",label:'Sophia', value: 600 },
    { date: "2022-03-01",label:'Amelia', value: 780 },
    { date: "2022-03-01",label:'Amelia', value: 320 }
  ];
  
  return (
    <div>
   <DyLineDate
     data={data}
     xAxis="date"
     yAxis="value"
     dateFilter={true}
     useAreaTop={false}
     useArea={true}
     YAxisTitle='Utilisation'
     XAxisTitle='Date'
     useAreaColor='#03fc7f' //WHE TEMPLE IS T2 YOU NEED TO TRUN THIS OFF
     defaulPeriod='Daily'
     defaulFunctionType='Sum'
     circleRadius={3}
     circleColor="black"
     chartWidth={1000}
     chartHeight={500}
     margin = {{ top: 90, right: 70, bottom: 90, left: 110 }}
     startFrom={0.05}
     template="t2"
     chartTitle="Utilisation of the Lines"
   
   />

    </div>
  );
};

export default App;`;

  return (

    <div className='mainsecvsmainrr'>
      <div  className='jusblurgif'>
      <div className='mainsecvsmain2'><h1>High performance charts</h1></div>
      <div className='text12'>
      <div className='text11'>
      <h1>Experience Lightning-Fast Data Representation</h1>
      <div className='text11oo1'>Speed and efficiency are at the heart of DynamoChart. Our charts are optimized for high performance, handling large datasets with ease. Enjoy smooth, responsive visualizations that bring your data to life without compromising on speed.</div><div className='text11002'> Perfect for real-time data applications, our charts ensure that performance is never a bottleneck in your data storytelling.</div>
      </div>
      </div>
      <div className='mainsecvs'>
        <div className="sampleCode">
          <SyntaxHighlighter language="javascript" >
            {codeString}
          </SyntaxHighlighter>
        </div>
   
        <DyLineDate
            data={data}
            xAxis="date"
            yAxis="value"
            dateFilter={true}
            useAreaTop={true}
            useArea={true}
            YAxisTitle='Utilisation'
            XAxisTitle='Date'
             useAreaColor='#FF6384' //WHE TEMPLE IS T2 YOU NEED TO TRUN THIS OFF
            defaulPeriod='Daily'
            defaulFunctionType='Sum'
            circleRadius={3}
            circleColor="black" ///just works when it is t1
            chartWidth={400}
            chartHeight={500}
            margin = {{ top: 90, right: 70, bottom: 90, left: 90 }}
            startFrom={0.2}
            xAxisValueFont={15}
            yAxisValueFont={15}
            yAxisTitleFont={15}
            xAxisTitleFont={15}
            chartValueFont={14}
            chartTitleFont={19}
            chartTitle="Utilisation vs Date"
            template="t2"
            lineShape="curveNatural"    /* curveLinear,curveStep,curveStepBefore,curveStepAfter,curveBasis,curveMonotoneX,curveMonotoneY,curveNatural  */  
          />


   
      </div>
      </div>
    </div>
  );
};

export default Gifvs1;
