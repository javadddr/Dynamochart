


import {DyPie} from "dynamochart";
import "./Bar.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const Pie = () => {
  const data = [
    { label: 'Line 1', value: 120 },
    { label: 'Line 2', value: 173 },
    { label: 'Line 3', value: 239 },
    { label: 'Line 4', value: 300 },
    { label: 'Line 5', value: 244 },
  
  ];
  
  const colors = ['#E15759', '#F28E2C', '#4E79A7', '#76B7B2', '#e9b0ef'];
  

  const codeString1 = `  import React from 'react'
  import {DyPie} from 'dynamochart';

  const data = [
    { label: 'Line 1', value: 120 },
    { label: 'Line 2', value: 173 },
    { label: 'Line 3', value: 239 },
    { label: 'Line 4', value: 300 },
    { label: 'Line 5', value: 244 },
  
  ];
  
  const colors = ['#E15759', '#F28E2C', '#4E79A7', '#76B7B2', '#e9b0ef'];
  
    return (
      <DyPie
          data={data}
          colors={colors}
          chartWidth={700}
          chartHeight={600}
          chartPadding={70}  
          padding={{top:40,left:10,right:110,bottom:10}}
          donutRatio={50}
          showTotal={true}
          totalFormat="percentage"   //can be "number" or "percentage"
          totalSize={25}
          title="Lines' Costs"
          showSmall={3}
          strokeWidth="0"
          chartTemplate="t2" //chartTemplate can be "t1" or "t2"
        />
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <div className="mainchartsBarooo">
        <DyPie
        data={data}
        colors={colors}
        chartWidth={700}
        chartHeight={600}
        chartPadding={70}  ///this
        padding={{top:40,left:10,right:110,bottom:10}}///this
        donutRatio={50}
        showTotal={true}
        totalFormat="number"   ///number or percentage
        totalSize={25}
        title="Lines' Costs ($)"
        showSmall={3}
        strokeWidth="0"
        chartTemplate="t1"
      />
       </div>
     <div className="mainchartsBarooo">
      <DyPie
        data={data}
        colors={colors}
        chartWidth={700}
        chartHeight={600}
        chartPadding={70}  ///this
        padding={{top:40,left:10,right:110,bottom:10}}///this
        donutRatio={50}
        showTotal={true}
        totalFormat="percentage"   ///number or percentage
        totalSize={25}
        title="Lines' Costs (Percentage of total)"
        showSmall={3}
        strokeWidth="0"
        chartTemplate="t2"
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
        <li><strong>data:</strong> Dataset for the pie chart, typically an array of objects.</li>
        <li><strong>colors:</strong> Array of colors used for different segments of the pie chart.</li>
        <li><strong>chartWidth:</strong> Width of the chart in pixels.</li>
        <li><strong>chartHeight:</strong> Height of the chart in pixels.</li>
        <li><strong>chartPadding:</strong> Padding around the chart. It's a single value applying to all sides.</li>
        <li><strong>padding:</strong> Object specifying individual padding values for top, left, right, and bottom.</li>
        <li><strong>donutRatio:</strong> Percentage to determine the inner radius of the donut chart, creating a hole in the middle.</li>
        <li><strong>showTotal:</strong> Boolean to indicate whether to display the total value in the center of the pie chart.</li>
        <li><strong>totalFormat:</strong> Format for displaying the total ('number' or 'percentage').</li>
        <li><strong>totalSize:</strong> Font size for the total value text.</li>
        <li><strong>title:</strong> Title of the chart.</li>
        <li><strong>showSmall:</strong> Threshold percentage below which labels will not be displayed.</li>
        <li><strong>strokeWidth:</strong> Width of the border around each pie segment.</li>
        <li><strong>chartTemplate:</strong> Template theme for the chart ('t1', 't2', etc.).</li>
    </ul>
</div>



        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a Pie Chart in the DynamoChart library </span></div>
  
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

export default Pie;


