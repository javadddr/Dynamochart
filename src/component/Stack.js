
import {DyStackChart} from "dynamochart";


import "./Bar.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const Stack = () => {

  const data = [
    { name: 'Hub 1', age: { EU: 87, US: 71, UK: 120 } },
    { name: 'Hub 2', age: { EU: 40, US: 35, UK: 99 } },
    { name: 'Hub 3', age: { EU: 37, US: 85, UK: 88 } },
    { name: 'Hub 4', age: { EU: 53, US: 65, UK: 29 } },
    { name: 'Hub 4', age: { EU: 69, US: 39, UK: 95 } },
   
  ];


  const colors = ['#d8b9d4', '#a8d8e8', '#eacca0'];




  const codeString1 = `  import React from 'react'
  import {DyStackChart} from 'dynamochart';

  const App = () => {
  
    const data = [
      { name: 'Hub 1', age: { EU: 87, US: 71, UK: 120 } },
      { name: 'Hub 2', age: { EU: 40, US: 35, UK: 99 } },
      { name: 'Hub 3', age: { EU: 37, US: 85, UK: 88 } },
      { name: 'Hub 4', age: { EU: 53, US: 65, UK: 29 } },
      { name: 'Hub 4', age: { EU: 69, US: 39, UK: 95 } },
     
    ];
  
  
    const colors = ['#d8b9d4', '#a8d8e8', '#eacca0'];
  
    return (
      <div>
      <DyStackChart 
        initialData={data} 
        colors={colors} 
        sort = 'n' //az , za,n
        stepLines={[
        { label: 'Adding First Empoloyee', position: 35, marginTop:18.5,height:60, style:'solid'},
        { label: 'Adding second Empoloyee', position:375, marginTop:18.5,height:60, style:'dashed' },
        ]}
        chartPadding = {{ top: 50, right: 120, bottom: 20, left: 0 }}
        chartMargin = {{ top: 50, right: 50, bottom: 0, left: 10 }}
        chartWidth = {550}
        chartHeight = {300}
        gap = {20} // Gap between bars
        xAxis = 'name'
        xAxisTitle='Hubs'
        yAxis = 'age' 
        yAxisTitle='Performance'
        template='t2'
        chartTitle='Performance vs Hubs'
        />
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <div className="mainchartsBarooo">
        <DyStackChart 
            initialData={data} 
            colors={colors} 
            sort = 'n' //az , za,n
            chartPadding = {{ top: 0, right: 0, bottom: 0, left: 0 }}
            chartMargin = {{ top: 50, right: 50, bottom: 0, left: 10 }}
            chartWidth = {700}
            chartHeight = {300}
            gap = {20}
            xAxis = 'name'
            xAxisTitle='Hubs'
            yAxis = 'age' // Gap between bars
            yAxisTitle='Performance'
            template='t1'
            chartTitle='Performance vs Hubs'
              />
               </div>
     <div className="mainchartsBarooo">
        <DyStackChart 
            initialData={data} 
            colors={colors} 
            sort = 'n' //az , za,n
            stepLines={[
            { label: 'Adding First Empoloyee', position: 35, marginTop:18.5,height:60, style:'solid'},
            { label: 'Adding second Empoloyee', position:375, marginTop:18.5,height:60, style:'dashed' },
            ]}
            chartPadding = {{ top: 0, right: 0, bottom: 0, left: 0 }}
            chartMargin = {{ top: 50, right: 50, bottom: 0, left: 10 }}
            chartWidth = {700}
            chartHeight = {300}
            gap = {20}
            xAxis = 'name'
            xAxisTitle='Hubs'
            yAxis = 'age' // Gap between bars
            yAxisTitle='Performance'
            template='t2'
            chartTitle='Performance vs Hubs'
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
        <li><strong>initialData:</strong> Array of data objects for the chart. Each object should have a label and a nested object for values.</li>
        <li><strong>colors:</strong> Array of color strings for coloring each segment in the chart.</li>
        <li><strong>chartPadding:</strong> Padding around the chart, specified as an object with top, right, bottom, and left values.</li>
        <li><strong>chartMargin:</strong> Margins around the chart, defined as an object with top, right, bottom, and left properties.</li>
        <li><strong>chartWidth:</strong> The overall width of the chart.</li>
        <li><strong>chartHeight:</strong> The overall height of the chart.</li>
        <li><strong>gap:</strong> The gap between each bar in the chart.</li>
        <li><strong>sort:</strong> Sorting order of the data ('az', 'za', 'n').</li>
        <li><strong>stepLines:</strong> An array of objects to display step lines on the chart, each with label, position, style, etc.</li>
        <li><strong>xAxisTitle:</strong> Title for the x-axis.</li>
        <li><strong>yAxisTitle:</strong> Title for the y-axis.</li>
        <li><strong>xAxis:</strong> The key from your data objects to be used for x-axis values.</li>
        <li><strong>yAxis:</strong> The key from your data objects to be used for y-axis values.</li>
        <li><strong>template:</strong> The visual template or theme for the chart.</li>
        <li><strong>chartTitle:</strong> Title of the chart.</li>
    </ul>
</div>


        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a Stacked Bar Chart in the DynamoChart library </span></div>
  
      </div>
 

      <div className='codevideo2'>
          <div className='jusiframe1'>
        <iframe 
                width="850" 
                height="478" 
                src="https://www.youtube.com/embed/NQf95LlbXXs" 
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

export default Stack;


