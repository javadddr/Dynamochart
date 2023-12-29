

import {DyLineDate} from "dynamochart";

import "./StackVertica.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const DateLine = () => {

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



  const codeString1 = `  import React from 'react'
  import {DyLineDate} from 'dynamochart';

  const App = () => {
  
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
  
  
    return (
      <div>
      <DyLineDate
            data={data}
            xAxis="date"
            yAxis="value"
            dateFilter={true}
            useAreaTop={true}
            useArea={true}
            YAxisTitle='Utilisation'
            XAxisTitle='Date'
             useAreaColor='#76B7B2' //WHE TEMPLE IS T2 YOU NEED TO TRUN THIS OFF
            defaulPeriod='Daily'
            defaulFunctionType='Sum'
            circleRadius={3}
            circleColor="black" ///just works when it is t1
            chartWidth={900}
            chartHeight={400}
            margin = {{ top: 90, right: 70, bottom: 90, left: 110 }}
            startFrom={0.2}
            xAxisValueFont={15}
            yAxisValueFont={15}
            yAxisTitleFont={15}
            xAxisTitleFont={15}
            chartValueFont={14}
            chartTitleFont={19}
            template="t1"
            chartTitle="Utilisation vs Date"
            lineShape="curveNatural"    /* curveLinear,curveStep,curveStepBefore,curveStepAfter,curveBasis,curveMonotoneX,curveMonotoneY,curveNatural  */  
          />
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <DyLineDate
            data={data}
            xAxis="date"
            yAxis="value"
            dateFilter={true}
            useAreaTop={true}
            useArea={true}
            YAxisTitle='Utilisation'
            XAxisTitle='Date'
             useAreaColor='#76B7B2' //WHE TEMPLE IS T2 YOU NEED TO TRUN THIS OFF
            defaulPeriod='Daily'
            defaulFunctionType='Sum'
            circleRadius={3}
            circleColor="black" ///just works when it is t1
            chartWidth={700}
            chartHeight={400}
            margin = {{ top: 90, right: 70, bottom: 90, left: 110 }}
            startFrom={0.2}
            xAxisValueFont={15}
            yAxisValueFont={15}
            yAxisTitleFont={15}
            xAxisTitleFont={15}
            chartValueFont={14}
            chartTitleFont={19}
            template="t1"
            chartTitle="Utilisation vs Date"
            lineShape="curveNatural"    /* curveLinear,curveStep,curveStepBefore,curveStepAfter,curveBasis,curveMonotoneX,curveMonotoneY,curveNatural  */  
          />
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
            chartWidth={700}
            chartHeight={400}
            margin = {{ top: 90, right: 70, bottom: 90, left: 110 }}
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
        <div className="mainchartsBar2">
        <div class="props-container">
        <h2>Chart Code</h2>
          <div className="sampleCodebar">
         
            <SyntaxHighlighter language="javascript" >
              {codeString1}
            </SyntaxHighlighter>
          </div>
          </div>
        
          <div class="props-container">
    <h2>Chart Configuration Properties</h2>
    <ul>
        <li><strong>data:</strong> The dataset for the chart, usually an array of objects.</li>
        <li><strong>useArea:</strong> Boolean indicating whether to use an area chart style.</li>
        <li><strong>useAreaTop:</strong> Boolean to determine if the area chart should start from the top.</li>
        <li><strong>xAxis:</strong> Specifies the data field to be used for the x-axis.</li>
        <li><strong>yAxis:</strong> Specifies the data field to be used for the y-axis.</li>
        <li><strong>dateFilter:</strong> Boolean to enable or disable date filtering functionality.</li>
        <li><strong>YAxisTitle:</strong> Title for the y-axis.</li>
        <li><strong>XAxisTitle:</strong> Title for the x-axis.</li>
        <li><strong>useAreaColor:</strong> Specifies the color of the area under the line (when template is 't1').</li>
        <li><strong>defaulPeriod:</strong> Default time period for data aggregation ('Daily', 'Weekly', 'Monthly').</li>
        <li><strong>defaulFunctionType:</strong> Default function type for data calculation ('Sum', 'Average', etc.).</li>
        <li><strong>circleRadius:</strong> Radius of the circles on data points.</li>
        <li><strong>circleColor:</strong> Color of the circles (effective when template is 't1').</li>
        <li><strong>chartWidth:</strong> Width of the chart in pixels.</li>
        <li><strong>chartHeight:</strong> Height of the chart in pixels.</li>
        <li><strong>margin:</strong> Margin around the chart, specified as an object with top, right, bottom, and left values.</li>
        <li><strong>startFrom:</strong> Padding start point for the x-axis.</li>
        <li><strong>xAxisValueFont, yAxisValueFont:</strong> Font size for the axis values.</li>
        <li><strong>yAxisTitleFont, xAxisTitleFont:</strong> Font size for the axis titles.</li>
        <li><strong>chartValueFont:</strong> Font size for the chart values.</li>
        <li><strong>chartTitleFont:</strong> Font size for the chart title.</li>
        <li><strong>template:</strong> Theme template for the chart ('t1', 't2').</li>
        <li><strong>chartTitle:</strong> The title of the chart.</li>
        <li><strong>lineShape:</strong> Shape of the line in the chart (e.g., 'curveNatural', 'curveLinear').</li>
    </ul>
</div>



        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a Line Chart for Date in the DynamoChart library </span></div>
  
      </div>
 

      <div className='codevideo2'>
          <div className='jusiframe1'>
        <iframe 
                width="850" 
                height="478" 
                src="https://www.youtube.com/embed/8C9QLHS9FkM" 
                title="YouTube video player" 
              
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              </div>
             
          </div>
        </div>



    </div>
  );
};

export default DateLine;


