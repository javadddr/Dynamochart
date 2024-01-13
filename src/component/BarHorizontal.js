

import {DyBarHorizontal} from "dynamochart";
import "./Bar.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const BarHorizontal = () => {

  const data = [
    { Line: 'Line 1', Shipments: 38, color: '#8ef6e4' },
    { Line: 'Line 2', Shipments: 20, color: '#9896f1' },
    { Line: 'Line 3', Shipments: 55, color: '#ED5485' },
    { Line: 'Line 4', Shipments: 43, color: '#57D1C9' },
    { Line: 'Line 5', Shipments: 29, color: '#FFFBCB' },
    { Line: 'Line 6', Shipments: 49, color: '#FFE869' },
  ];




  const codeString1 = 
  `  import React from 'react'
  import {DyBarHorizontal} from 'dynamochart';

  const App = () => {
    
  const data = [
    { Line: 'Line 1', Shipments: 38, color: '#8ef6e4' },
    { Line: 'Line 2', Shipments: 20, color: '#9896f1' },
    { Line: 'Line 3', Shipments: 55, color: '#ED5485' },
    { Line: 'Line 4', Shipments: 43, color: '#57D1C9' },
    { Line: 'Line 5', Shipments: 29, color: '#FFFBCB' },
    { Line: 'Line 6', Shipments: 49, color: '#FFE869' },
  ];
  
    return (
      <div>
      <DyBarHorizontal
      data={data}
      xAxis='Shipments'
      yAxis='Line'
      showTooltip = {true}
      borderWidth={2}
      showValues={true}
      valueDisplayPosition='middle' 
      valueFontSize = '16px'
      valueFontFamily = 'inter'
      showTicks = {true}
      showYLabels = {true}
      chartTitle = "Number of shipments"
      grid={true}
      gridNumber={3}
      gridColor="green"
      sort='n'  //az,za,n
      barHeight = {60}
      spacingBetweenBars = {10}
      cWidth = {500}
      margin={{ left: 170, right: 60, top: 60, bottom: 40 }}
      barBorderRadius={2}
      template='t2'
      </div>
    );
  };
  
  export default App;
  `;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <div className="mainchartsBarooo">
        <DyBarHorizontal
        data={data}
        xAxis='Shipments'
        yAxis='Line'
        showTooltip = {true}
        borderWidth={2}
        showValues={true}
        valueDisplayPosition='middle' 
        valueFontSize = '16px'
        valueFontFamily = 'inter'
        showTicks = {true}
        showYLabels = {true}
        chartTitle = "Number of shipments"
        grid={true}
        gridNumber={5}
        gridColor="green"
        sort='n'  //az,za,n
        barHeight = {30}
        spacingBetweenBars = {10}
        cWidth = {600}
        margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
        barBorderRadius={2}
        template='t1'
      />
     </div>
     <div className="mainchartsBarooo">
 <DyBarHorizontal
        data={data}
        xAxis='Shipments'
        yAxis='Line'
        showTooltip = {true}
        borderWidth={2}
        showValues={true}
        valueDisplayPosition='top' 
        valueFontSize = '16px'
        valueFontFamily = 'inter'
        showTicks = {true}
        showYLabels = {true}
        chartTitle = "Number of shipments"
        grid={true}
        gridNumber={3}
        gridColor="green"
        sort='n'  //az,za,n
        barHeight = {50}
        spacingBetweenBars = {10}
        cWidth = {600}
        margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
        barBorderRadius={2}
        template='t2'
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
        <li><strong>data:</strong> Array of data objects for the chart. Each object should have keys corresponding to the xAxis and yAxis props. Additional properties like 'color' can be used for customizing the appearance of the bars.</li>
        <li><strong>xAxis:</strong> The key from the data objects that will be used for the x-axis values of the chart.</li>
        <li><strong>yAxis:</strong> The key from the data objects that will be used for the y-axis values of the chart.</li>
        <li><strong>showValues:</strong> If true, displays the values on the bars in the chart.</li>
        <li><strong>valueDisplayPosition:</strong> Determines the position of the value labels on the bars ('top', 'middle', or 'bottom').</li>
        <li><strong>valueFontSize:</strong> Font size for the value labels on the bars.</li>
        <li><strong>valueFontFamily:</strong> Font family for the value labels on the bars.</li>
        <li><strong>showTicks:</strong> If true, displays tick marks on the chart.</li>
        <li><strong>showYLabels:</strong> If true, displays labels on the y-axis.</li>
        <li><strong>gridNumber:</strong> Number of grid lines to display on the chart.</li>
        <li><strong>grid:</strong> If true, displays grid lines on the chart.</li>
        <li><strong>gridColor:</strong> Color of the grid lines.</li>
        <li><strong>chartTitle:</strong> Title of the chart.</li>
        <li><strong>cWidth:</strong> Width of the chart.</li>
        <li><strong>showTooltip:</strong> If true, shows a tooltip when hovering over bars.</li>
        <li><strong>sort:</strong> Sorts the data based on the value ('az', 'za', or 'n' for no sorting).</li>
        <li><strong>barHeight:</strong> Height of the bars in the chart.</li>
        <li><strong>spacingBetweenBars:</strong> Spacing between individual bars in the chart.</li>
        <li><strong>margin:</strong> Margins around the chart, defined as an object with left, right, top, and bottom properties.</li>
        <li><strong>barBorderRadius:</strong> Border radius of the bars for rounded corners.</li>
        <li><strong>template:</strong> Template theme for the chart's appearance ('t1', 't2', etc.).</li>
    </ul>
</div>

        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a horizontal bar chart in the DynamoChart library </span></div>
  
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

export default BarHorizontal;


