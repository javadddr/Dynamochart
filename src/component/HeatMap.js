
import {DyHeatMap} from "dynamochart";

import "./Bar.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const HeatMap = () => {
  const data = [
    { Date: '2023-05-25', Channel: 'Impressions', Facebook: 1500, Google: 500, Insta: 700, Email: 250, Tiktok: 50 },
    { Date: '2023-05-25', Channel: 'Clicked', Facebook: 1000, Google: 300, Insta: 500, Email: 150, Tiktok: 50 },
    { Date: '2023-05-27', Channel: 'Pricing', Facebook: 500, Google: 185, Insta: 200, Email: 50, Tiktok: 50 },
    { Date: '2023-05-28', Channel: 'Add_to_chart', Facebook: 120, Google: 30, Insta: 20, Email: 20, Tiktok: 10 },
    { Date: '2023-05-29', Channel: 'Purchased', Facebook: 20, Google: 12, Insta: 15, Email: 5, Tiktok: 5 },
    { Date: '2023-05-30', Channel: 'Purchased', Facebook: 20, Google: 12, Insta: 65, Email: 5, Tiktok: 5 },
    { Date: '2023-06-01', Channel: 'Purchased', Facebook: 20, Google: 1200, Insta: 65, Email: 500, Tiktok: 5 },
    { Date: '2023-06-02', Channel: 'Add_to_chart', Facebook: 2320, Google: 120, Insta: 65, Email: 5, Tiktok: 5 },
  ];
  
  const colors = '#4BC0C0'
  
   
  


  const codeString1 = `  import React from 'react'
  import {DyHeatMap} from 'dynamochart';

  const App = () => {
  
    const data = [
      { Date: '2023-05-25', Channel: 'Impressions', Facebook: 1500, Google: 500, Insta: 700, Email: 250, Tiktok: 50 },
      { Date: '2023-05-25', Channel: 'Clicked', Facebook: 1000, Google: 300, Insta: 500, Email: 150, Tiktok: 50 },
      { Date: '2023-05-27', Channel: 'Pricing', Facebook: 500, Google: 185, Insta: 200, Email: 50, Tiktok: 50 },
      { Date: '2023-05-28', Channel: 'Add_to_chart', Facebook: 120, Google: 30, Insta: 20, Email: 20, Tiktok: 10 },
      { Date: '2023-05-29', Channel: 'Purchased', Facebook: 20, Google: 12, Insta: 15, Email: 5, Tiktok: 5 },
      { Date: '2023-05-30', Channel: 'Purchased', Facebook: 20, Google: 12, Insta: 65, Email: 5, Tiktok: 5 },
      { Date: '2023-06-01', Channel: 'Purchased', Facebook: 20, Google: 1200, Insta: 65, Email: 500, Tiktok: 5 },
      { Date: '2023-06-02', Channel: 'Add_to_chart', Facebook: 2320, Google: 120, Insta: 65, Email: 5, Tiktok: 5 },
    ];
    
    const colors = '#D8DD2B'
  
    return (
      <div>
      <DyHeatMap
      chartData={data}
      colors={colors}
      yAxis="Channel"
      xAxis="Date"
      yAxisTitle="Categories"
      xAxisTitle="Date"
      value={["Facebook", "Google","Insta"]}
      calculate="sum"
      chartWidth={1300}
      chartHeight={600}
      chartTitle="Conversion Rate "
      xAxisRotate={45}
    />
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <div className="mainchartsBaroooh">
        <DyHeatMap
          chartData={data}
          colors={colors}
          yAxis="Channel"
          xAxis="Date"
          yAxisTitle="Categories"
          xAxisTitle="Date"
          value={["Facebook", "Google","Insta"]}
          calculate="sum"
          chartWidth={1000}
          chartHeight={400}
          chartTitle="Conversion Rate "
          xAxisRotate={0}
          chartTemplate="t1"
          fontValues={14}
          colorValues="black"
   
        />
    </div>
     <div className="mainchartsBaroooh">
         <DyHeatMap
          chartData={data}
          colors={colors}
          yAxis="Channel"
          xAxis="Date"
          yAxisTitle="Categories"
          xAxisTitle="Date"
          value={["Facebook", "Google","Insta"]}
          calculate="sum"
          chartWidth={1000}
          chartHeight={400}
          chartTitle="Conversion Rate "
          xAxisRotate={0}
          chartTemplate="t2"
          fontValues={14}
          colorValues="black"
   
        />
  </div>
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
        <li><strong>chartData:</strong> Dataset for the heatmap, typically an array of objects representing each data point.</li>
        <li><strong>colors:</strong> Array of color strings used to style different segments of the heatmap based on values.</li>
        <li><strong>yAxis:</strong> Key in data objects representing the vertical axis category.</li>
        <li><strong>xAxis:</strong> Key in data objects representing the horizontal axis category.</li>
        <li><strong>yAxisTitle:</strong> Title for the vertical axis of the heatmap.</li>
        <li><strong>xAxisTitle:</strong> Title for the horizontal axis of the heatmap.</li>
        <li><strong>value:</strong> Array of keys representing specific data values to be displayed in the heatmap.</li>
        <li><strong>calculate:</strong> Calculation method (sum, average, etc.) to apply to data values for color scaling.</li>
        <li><strong>chartWidth:</strong> Width of the heatmap in pixels.</li>
        <li><strong>chartHeight:</strong> Height of the heatmap in pixels.</li>
        <li><strong>chartTitle:</strong> Title displayed above the heatmap.</li>
        <li><strong>xAxisRotate:</strong> Degree of rotation for xAxis labels to enhance readability.</li>
    </ul>
</div>



        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a HeatMap  in the DynamoChart library </span></div>
  
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

export default HeatMap;


