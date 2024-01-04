

import {DyPercentageBar} from "dynamochart";

import "./Bar.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const PercentageBar = () => {

  const data = [
    { label: 'Q1-2023', value: { Operation: 0.05, Marketing: 0.85, HC: 0.10 } },
    { label: 'Q2-2023', value: { Operation: 0.35, Marketing: 0.65, HC: 0.10 } },
    { label: 'Q3-2023', value: { Operation: 0.05, Marketing: 0.75, HC: 0.20 } },
    { label: 'Q4-2023', value: { Operation: 0.45, Marketing: 0.45, HC: 0.10 } },
    { label: 'Q1-2024', value: { Operation: 0.25, Marketing: 0.25, HC: 0.60 } }
  ];
  
  const colors=[
    {
      Operation:"#E15759",
      Marketing:"#4E79A7",
      HC:"#76B7B2",
    }
  ]


  const codeString1 = `  import React from 'react'
  import {DyPercentageBar} from 'dynamochart';

  const App = () => {
  
    const data = [
      { label: 'Q1-2023', value: { Operation: 0.05, Marketing: 0.85, HC: 0.10 } },
      { label: 'Q2-2023', value: { Operation: 0.35, Marketing: 0.65, HC: 0.10 } },
      { label: 'Q3-2023', value: { Operation: 0.05, Marketing: 0.75, HC: 0.20 } },
      { label: 'Q4-2023', value: { Operation: 0.45, Marketing: 0.45, HC: 0.10 } },
      { label: 'Q1-2024', value: { Operation: 0.25, Marketing: 0.25, HC: 0.60 } }
    ];
  
    const colors=[
      {
        Operation:"#E15759",
        Marketing:"#4E79A7",
        HC:"#76B7B2",
      }
    ]
  
  
    return (
      <div>
      <DyPercentageBar 
        data={data}
        colors={colors}
        chartWidth={900}
        chartHeight={400}
        sort= {["Operation","descending" ]}
        chartTitle="Departmental Overhead Rate"
        barsGap={5}
        barHeight={40}
      />
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <DyPercentageBar 
            data={data}
            colors={colors}
            chartWidth={700}
            chartHeight={300}
            sort= {["Republican","descending" ]}
            chartTitle="Donation to the political Parties"
            barsGap={5}
            barHeight={20}
            chartTemplate="t1"

        />

        <DyPercentageBar 
            data={data}
            colors={colors}
            chartWidth={700}
            chartHeight={300}
            sort= {["Republican","descending" ]}
            chartTitle="Donation to the political Parties"
            barsGap={0}
            barHeight={30}
            chartTemplate="t2"

          />



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
        <li><strong>barHeight:</strong> The height of each bar in the chart, specified as a string (e.g., '30px').</li>
        <li><strong>barsGap:</strong> The gap between each bar in pixels.</li>
        <li><strong>data:</strong> Array of data objects for the chart. Each object should have a label and values for each segment.</li>
        <li><strong>chartWidth:</strong> The overall width of the chart.</li>
        <li><strong>chartHeight:</strong> The overall height of the chart.</li>
        <li><strong>colors:</strong> An array of objects mapping segment keys to color values used for each segment in the chart.</li>
        <li><strong>sort:</strong> An array specifying the sorting criteria, containing the segment key and the sorting direction ('ascending' or 'descending').</li>
        <li><strong>chartTitle:</strong> The title displayed at the top of the chart.</li>
    </ul>
</div>


        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a Stacked Horizintal Bar Chart in the DynamoChart library </span></div>
  
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

export default PercentageBar;


