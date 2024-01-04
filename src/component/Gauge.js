
import {DyGauge} from "dynamochart";

import "./Bar.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const Gauge = () => {
  const data = [
    { date: '2022-01-01', VALUE: 120 ,label:"Javad",color:'#E15759'},
    { date: '2022-01-02', VALUE: 240 ,label:"Shahram",color:'#F28E2C'},
    { date: '2022-01-03', VALUE: 120,label:"John",color:'#4E79A7' },
    { date: '2022-01-04', VALUE: 120 ,label:"Tim",color:'#76B7B2'},
  ];
  
 


  const codeString1 = `  import React from 'react'
  import {DyGauge} from 'dynamochart';

  const App = () => {
  
    const data = [
      { date: '2022-01-01', VALUE: 120 ,label:"Javad",color:'#E15759'},
      { date: '2022-01-02', VALUE: 240 ,label:"Shahram",color:'#F28E2C'},
      { date: '2022-01-03', VALUE: 120,label:"John",color:'#4E79A7' },
      { date: '2022-01-04', VALUE: 120 ,label:"Tim",color:'#76B7B2'},
    ];
    
  
    return (
      <div>
      <DyGauge 
        data={data} 
        target={1100} 
        title={'Customers terminated by cx '} 
        strokeWidth={110} 
        segment="date"
        legendTitle="CX employees"
        chartWidth={700}
        chartHeight={450}
        radius={290}
        padding={{top:20,left:40,right:10,bottom:10}}
        margin={{top:10,left:10,right:10,bottom:10}}
        />    
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <div className="mainchartsBarooo">
          
        <DyGauge 
          data={data} 
          target={1100} 
          title={'Customers terminated by cx '} 
          strokeWidth={130} 
          segment="label"
          legendTitle="CX employees"
          chartWidth={800}
          chartHeight={500}
          radius={300}
          padding={{top:20,left:40,right:0,bottom:10}}
          margin={{top:10,left:10,right:10,bottom:10}}
          />
 </div>
     <div className="mainchartsBarooo">
        <DyGauge 
          data={data} 
          target={1100} 
          title={'Customers terminated by cx '} 
          strokeWidth={130} 
          segment="date"
          legendTitle="CX employees"
          chartWidth={800}
          chartHeight={500}
          radius={300}
          padding={{top:20,left:40,right:0,bottom:10}}
          margin={{top:10,left:10,right:10,bottom:10}}
          />
 </div>
        </div>
        <div className="mainchartsBar2">
        <div className="props-container">
        <h2>Chart Code</h2>
          <div className="sampleCodebar">
         
            <SyntaxHighlighter language="javascript" >
              {codeString1}
            </SyntaxHighlighter>
          </div>
          </div>
        
          <div className="props-container">
    <h2>Chart Configuration Properties</h2>
    <ul>
        <li><strong>data:</strong> Dataset for the gauge chart, typically an array of objects with value and label properties.</li>
        <li><strong>target:</strong> Target value for the gauge, representing the maximum value on the gauge scale.</li>
        <li><strong>title:</strong> Title displayed on the gauge chart.</li>
        <li><strong>strokeWidth:</strong> Width of the gauge's arc stroke.</li>
        <li><strong>segment:</strong> Specifies which data property is used for segmenting the gauge (e.g., 'date').</li>
        <li><strong>legendTitle:</strong> Title for the legend section of the gauge chart.</li>
        <li><strong>chartWidth:</strong> Width of the entire gauge chart in pixels.</li>
        <li><strong>chartHeight:</strong> Height of the entire gauge chart in pixels.</li>
        <li><strong>radius:</strong> Radius of the gauge's arc.</li>
        <li><strong>padding:</strong> Object specifying individual padding values for top, left, right, and bottom of the chart.</li>
        <li><strong>margin:</strong> Object specifying individual margin values for top, left, right, and bottom of the chart.</li>
    </ul>
</div>




        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a Gauge Chart in the DynamoChart library </span></div>
  
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

export default Gauge;


