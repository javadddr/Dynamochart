
import {DySideStackChart} from "dynamochart"


import "./Bar.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const StackVertica = () => {

  const data = [
    { label: 'Group A', value: { One: 70, Two: 61, Three: 55 }},
    { label: 'Group C', value: { One: 110, Two: 85, Three: 120 }},
    { label: 'Group D', value: { One: 59, Two: 25, Three: 67 }},
    { label: 'Group p', value: { One: 92, Two: 36, Three: 26  }},
    { label: 'Group k', value: { One: 61, Two: 65, Three: 48 }},
   
  ];

  const colors = ['#d8b9d4', '#a8d8e8', '#eacca0','#b1dfbb','#f4c9b9'];




  const codeString1 = `  import React from 'react'
  import {DySideStackChart} from 'dynamochart';

  const App = () => {
  
    const data = [
      { label: 'Group A', value: { One: 70, Two: 61, Three: 55 }},
      { label: 'Group C', value: { One: 110, Two: 85, Three: 120 }},
      { label: 'Group D', value: { One: 59, Two: 25, Three: 67 }},
      { label: 'Group p', value: { One: 92, Two: 36, Three: 26  }},
      { label: 'Group k', value: { One: 61, Two: 65, Three: 48 }},
     
    ];
  
    const colors = ['#d8b9d4', '#a8d8e8', '#eacca0','#b1dfbb','#f4c9b9'];
  
  
  
    return (
      <div>
      <DySideStackChart
        data={data}
        colors={colors}
        valueDisplayPosition = 'top'
        chartWidth = {600}
        chartHeight = {350}
        chartPadding = {{ top: 90, right: 130, bottom: 10, left: 110 }}
        chartMargin= {{ top: 40, right: 0, bottom: 0, left: 5 }}
        gridNumber={5}
        xAxis='Group'
        yAxis='value'
        template='t1'
        chartTitle="Utilisation of each line"
      />
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <div className="mainchartsBarooo">
        <DySideStackChart
    data={data}
    colors={colors}
    valueDisplayPosition = 'top'
    chartWidth = {700}
    chartHeight = {350}
    chartPadding = {{ top: 90, right: 130, bottom: 10, left: 110 }}
    chartMargin= {{ top: 40, right: 0, bottom: 0, left: 5 }}
    gridNumber={5}
    xAxis='Group Lines'
    yAxis='Utilisation'
    template='t1'
    chartTitle="Utilisation of each line"
    showLegend={true}
    />
        </div>
     <div className="mainchartsBarooo">
     <DySideStackChart
    data={data}
    colors={colors}
    valueDisplayPosition = 'middle'
    chartWidth = {700}
    chartHeight = {350}
    chartPadding = {{ top: 90, right: 130, bottom: 10, left: 110 }}
    chartMargin= {{ top: 40, right: 0, bottom: 0, left: 5 }}
    gridNumber={5}
    xAxis='Group Lines'
    yAxis='Utilisation'
    template='t2'
    chartTitle="Utilisation of each line"
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
        <li><strong>data:</strong> Array of data objects for the chart. Each object should have keys corresponding to the xAxis and yAxis props.</li>
        <li><strong>colors:</strong> Array of color strings used to color each bar or segment in the chart.</li>
        <li><strong>valueDisplayPosition:</strong> Position of the value labels on the bars. Options are 'top', 'middle', or 'bottom'.</li>
        <li><strong>chartWidth:</strong> The overall width of the chart.</li>
        <li><strong>chartHeight:</strong> The overall height of the chart.</li>
        <li><strong>chartPadding:</strong> Padding around the chart, specified as an object with top, right, bottom, and left values.</li>
        <li><strong>chartMargin:</strong> Margins around the chart, defined as an object with top, right, bottom, and left properties.</li>
        <li><strong>gridNumber:</strong> Number of grid lines to be displayed on the chart.</li>
        <li><strong>xAxis:</strong> The key from your data objects to be used for x-axis values.</li>
        <li><strong>yAxis:</strong> The key from your data objects to be used for y-axis values.</li>
        <li><strong>template:</strong> The visual template or theme for the chart.</li>
        <li><strong>chartTitle:</strong> Title of the chart.</li>
    </ul>
</div>

        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a Stacked Vertical Bar Chart in the DynamoChart library </span></div>
  
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

export default StackVertica;


