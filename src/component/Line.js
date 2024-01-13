
import {DyLine} from "dynamochart";

import "./Bar.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const Line = () => {
  const data = [
    { date: "2022-01-01", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [200, 150, 320, 50] },
    { date: "2022-01-02", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [100, 100, 220, 150] },
    { date: "2022-01-03", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [220, 250, 300, 170] },
    { date: "2022-01-06", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [200, 150, 320, 50] }
  ];
  

  const colors = ['#E15759', '#F28E2C', '#4E79A7','#76B7B2'];



  const codeString1 = `  import React from 'react'
  import {DyLine} from 'dynamochart';

  const App = () => {
  
    const data = [
      { date: "2022-01-01", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [200, 150, 320, 50] },
      { date: "2022-01-02", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [100, 100, 220, 150] },
      { date: "2022-01-03", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [220, 250, 300, 170] },
      { date: "2022-01-04", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [117, 160, 90, 210] },
      { date: "2022-01-05", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [320, 100, 120, 450] },
      { date: "2022-01-06", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [200, 150, 320, 50] }
    ];
    
  
    const colors = ['#E15759', '#F28E2C', '#4E79A7','#76B7B2'];
  
  
    return (
      <div>
      <DyLine
        data={data}
        colors={colors}
        xAxisTitle = "Date"
        yAxisTitle = "Packages"
        lineShape="curveMonotoneX"    /* curveLinear,curveStep,curveStepBefore,curveStepAfter,curveBasis,curveMonotoneX,curveMonotoneY,curveNatural  */
        chartTitle="Number of packages sent"
        chartWidth={1300}
        chartHeight={500}
        legendTitle='Lines'
        lineAreaColor={true}
        areaColorOpacity={0.3}
        linesPadding={0.1}  //0.0 till 1
        chartTemplate="t1"
        dataPoints={5}
        chartBorder={true}
      />
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <DyLine
     data={data}
     colors={colors}
     xAxisTitle = "Date"
     yAxisTitle = "Value"
     lineShape="curveMonotoneX"    
     chartTitle="Number of packages sent"
     chartWidth={900}
     chartHeight={500}
     legendTitle='Hubs'
     lineAreaColor={true}
     areaColorOpacity={0.1}
     linesPadding={0.1}  //0.0 till 1
     chartTemplate="t1"
     dataPoints={5}
     chartBorder={true}
   />

<DyLine
     data={data}
     colors={colors}
     xAxisTitle = "Date"
     yAxisTitle = "Value"
     lineShape="curveMonotoneX"    
      /* 
     curveLinear: d3.curveLinear,
     curveStep: d3.curveStep,
     curveStepBefore: d3.curveStepBefore,
     curveStepAfter: d3.curveStepAfter,
     curveBasis: d3.curveBasis,
 
     curveMonotoneX: d3.curveMonotoneX,
     curveMonotoneY: d3.curveMonotoneY,
 
     curveNatural: d3.curveNatural,
    
     */
     

     chartTitle="Number of packages sent"
     chartWidth={900}
     chartHeight={500}
     legendTitle='Hubs'
     lineAreaColor={true}
     areaColorOpacity={0.0}
     linesPadding={0.1}  //0.0 till 1
     chartTemplate="t2"
     dataPoints={5}
     chartBorder={true}
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
        <li><strong>data:</strong> The dataset for the line chart, typically an array of objects.</li>
        <li><strong>dataPoints:</strong> The number of data points to display on each line.</li>
        <li><strong>chartBorder:</strong> Boolean indicating whether to display a border around the chart.</li>
        <li><strong>linesPadding:</strong> Padding between lines, represented as a fraction (0.0 to 1.0).</li>
        <li><strong>colors:</strong> Array of colors used for different lines in the chart.</li>
        <li><strong>chartTemplate:</strong> Specifies the template theme for the chart appearance, such as 't1' or 't2'.</li>
        <li><strong>legendTitle:</strong> Title for the legend section of the chart.</li>
        <li><strong>lineAreaColor:</strong> Boolean to determine if the area under the line should be colored.</li>
        <li><strong>areaColorOpacity:</strong> Opacity of the area color under the lines (from 0.0 to 1.0).</li>
        <li><strong>xAxisTitle:</strong> Title for the x-axis.</li>
        <li><strong>yAxisTitle:</strong> Title for the y-axis.</li>
        <li><strong>lineShape:</strong> The shape of the line, such as 'curveMonotoneX', 'curveLinear', etc.</li>
        <li><strong>chartTitle:</strong> The title of the chart.</li>
        <li><strong>chartWidth:</strong> The width of the chart in pixels.</li>
        <li><strong>chartHeight:</strong> The height of the chart in pixels.</li>
    </ul>
</div>



        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a Line Chart in the DynamoChart library </span></div>
  
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

export default Line;


