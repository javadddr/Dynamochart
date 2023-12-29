
import {DyBar} from "dynamochart";

import "./Bar.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const Bar = () => {

  const data = [
    { name: '25-09-2023', age: 38, color: '#d8b9d4' },
    { name: '02-09-2023', age: 25, color: '#a8d8e8' },
    { name: '07-09-2023', age: 55, color: '#eacca0' },
    { name: '20-10-2023', age: 48, color: '#b1dfbb' },
    { name: '19-09-2023', age: 19, color: '#f4c9b9' },
    { name: '29-11-2023', age: 63, color: '#c3c4cf' },
    { name: '21-12-2023', age: 32, color: '#c9cfc3' },
 
  ];



  const codeString1 = `  import React from 'react'
  import {DyBar} from 'dynamochart';

  const App = () => {
  
    const data = [
      { name: '25-09-2023', age: 38, color: '#d8b9d4' },
      { name: '02-09-2023', age: 25, color: '#a8d8e8' },
      { name: '07-09-2023', age: 55, color: '#eacca0' },
      { name: '20-10-2023', age: 48, color: '#b1dfbb' },
      { name: '19-09-2023', age: 19, color: '#f4c9b9' },
      { name: '29-11-2023', age: 63, color: '#c3c4cf' },
      { name: '21-12-2023', age: 32, color: '#c9cfc3' },
   
    ];
  
    return (
      <div>
      <DyBar
          data={data}
          xAxis="name"
          yAxis="age"
          showValues={true} // Ensure that showValues is set to true
          valueDisplayPosition="top" //bottom,middle,top
          valueFontSize='15px'
          valueFontFamily='inter'
          valueFontColor="black"
          showXLabels={true} // Set to true to show x-axis labels or false to hide
          showYLabels={true} // Set to true to show y-axis labels or false to hide
          chartTitle="Utilization Per Line "
          showXAxisLabel={true}
          showYAxisLabel={true}
          xAxisLabel="Date"
          yAxisLabel="Utilization"
          xAxisLabelFont="inter"
          yAxisLabelFont="inter"
          xAxisLabelFontSize="16px"
          yAxisLabelFontSize="16px"
          xAxisLabelRotate="-90" // 'horizontal', 'vertical', or 45
          yAxisLabelRotate="0" // 'horizontal', 'vertical', or 45
          xAxisLine={true}
          yAxisLine={true}
          xAxisTick={true}
          yAxisTick={true}
          gridLine={true}
          barsWidth={16}
          barBorderRadius={2} // Adjust the border radius for the bars
          barBorderColor="black" // Adjust the border color for the bars
          showTooltip = {true}
          cWidth = {1000}
          cHeight = {600}
          chartPadding={{ top: 110, right: 80, bottom: 150, left: 110 }}
          template='t1' // Can be t1 and t2
          chartBorder={10}  //border redius
          chartBoxShadow={false}
          sortV = 'za' // Adjust the sort "za","az","n"
          sortD='n'    // Adjust the sort "za","az","n"
          dateFormat='dd-mm-yyyy' //can be 'dd-mm-yyyy' or 'mm-dd-yyyy'
          xAxisLabelM={20}
        />
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <DyBar
            data={data}
            xAxis="name"
            yAxis="age"
            showValues={true} // Ensure that showValues is set to true
            valueDisplayPosition="top" //bottom,middle,top
            valueFontSize='15px'
            valueFontFamily='inter'
            valueFontColor="black"
            showXLabels={true} // Set to true to show x-axis labels or false to hide
            showYLabels={true} // Set to true to show y-axis labels or false to hide
            chartTitle="Utilization Per Line "
            showXAxisLabel={true}
            showYAxisLabel={true}
            xAxisLabel="Date"
            yAxisLabel="Utilization"
            xAxisLabelFont="inter"
            yAxisLabelFont="inter"
            xAxisLabelFontSize="16px"
            yAxisLabelFontSize="16px"
            xAxisLabelRotate="-90" // 'horizontal', 'vertical', or 45
            yAxisLabelRotate="0" // 'horizontal', 'vertical', or 45
            xAxisLine={true}
            yAxisLine={true}
            xAxisTick={true}
            yAxisTick={true}
            gridLine={true}
            barsWidth={6}
            barBorderRadius={2} // Adjust the border radius for the bars
            barBorderColor="black" // Adjust the border color for the bars
            // yAxisLabelH={50}
            // yAxisLabelV={50}
          
            showTooltip = {true}
            cWidth = {700}
            cHeight = {500}
            chartPadding={{ top: 110, right: 80, bottom: 150, left: 110 }}
            template='t1'
            chartBorder={10}  //border redius
            chartBoxShadow={false}
            sortV = 'za' // Adjust the sort "za","az","n"
            // sortD='n'
            dateFormat='dd-mm-yyyy' //can be 'dd-mm-yyyy' or 'mm-dd-yyyy'
            xAxisLabelM={20}
            hoverColor="#E6E3E3"
          
          />
        <DyBar
            data={data}
            xAxis="name"
            yAxis="age"
            showValues={true} // Ensure that showValues is set to true
            valueDisplayPosition="middle" //bottom,middle,top
            valueFontSize='15px'
            valueFontFamily='inter'
            valueFontColor="black"
            showXLabels={true} // Set to true to show x-axis labels or false to hide
            showYLabels={true} // Set to true to show y-axis labels or false to hide
            chartTitle="Utilization Per Line "
            showXAxisLabel={true}
            showYAxisLabel={true}
            xAxisLabel="Date"
            yAxisLabel="Utilization"
            xAxisLabelFont="inter"
            yAxisLabelFont="inter"
            xAxisLabelFontSize="16px"
            yAxisLabelFontSize="16px"
            xAxisLabelRotate="-90" // 'horizontal', 'vertical', or 45
            yAxisLabelRotate="0" // 'horizontal', 'vertical', or 45
            xAxisLine={true}
            yAxisLine={true}
            xAxisTick={true}
            yAxisTick={true}
            gridLine={false}
            barsWidth={6}
            barBorderRadius={2} // Adjust the border radius for the bars
            barBorderColor="black" // Adjust the border color for the bars
            // yAxisLabelH={50}
            // yAxisLabelV={50}
          
            showTooltip = {true}
            cWidth = {700}
            cHeight = {500}
            chartPadding={{ top: 110, right: 80, bottom: 150, left: 110 }}
            template='t2'
            chartBorder={10}  //border redius
            chartBoxShadow={false}
            sortV = 'za' // Adjust the sort "za","az","n"
            sortD='az'
            dateFormat='dd-mm-yyyy' //can be 'dd-mm-yyyy' or 'mm-dd-yyyy'
            xAxisLabelM={20}
            hoverColor="#E6E3E3"
          
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
                  <li><strong>data:</strong> This is the array of data objects that the chart will display. Each object should have keys matching the xAxis and yAxis props. Additional properties like color can be used for customizing the appearance of each bar.</li>
                  <li><strong>xAxis and yAxis:</strong> These props define the keys from your data objects that will be used for the x-axis and y-axis values of the chart, respectively.</li>
                  <li><strong>showValues:</strong> When set to true, this will display the values on the bars in the chart.</li>
                  <li><strong>valueDisplayPosition:</strong> Determines the position of the value labels on the bars. It can be 'top', 'middle', or 'bottom'.</li>
                  <li><strong>valueFontSize, valueFontFamily, valueFontColor:</strong> Customize the font size, family, and color of the value labels on the bars.</li>
                  <li><strong>showXLabels and showYLabels:</strong> Setting these to true will display labels on the x-axis and y-axis.</li>
                  <li><strong>chartTitle:</strong> The title of the chart.</li>
                  <li><strong>showXAxisLabel and showYAxisLabel:</strong> When set to true, these will display labels for the x-axis and y-axis.</li>
                  <li><strong>xAxisLabel and yAxisLabel:</strong> The text for the x-axis and y-axis labels.</li>
                  <li><strong>xAxisLabelFont, yAxisLabelFont:</strong> Font family for the x-axis and y-axis labels.</li>
                  <li><strong>xAxisLabelFontSize, yAxisLabelFontSize:</strong> Font size for the x-axis and y-axis labels.</li>
                  <li><strong>xAxisLabelRotate, yAxisLabelRotate:</strong> Rotation of the x-axis and y-axis labels.</li>
                  <li><strong>xAxisLine, yAxisLine:</strong> When set to true, these will display the axis lines for the x-axis and y-axis.</li>
                  <li><strong>xAxisTick, yAxisTick:</strong> When set to true, these will display tick marks on the x-axis and y-axis.</li>
                  <li><strong>gridLine:</strong> Setting this to true will display grid lines on the chart.</li>
                  <li><strong>barsWidth:</strong> The width of the bars in the chart.</li>
                  <li><strong>barBorderRadius:</strong> The border radius of the bars, which controls the roundness of the bar edges.</li>
                  <li><strong>barBorderColor:</strong> The color of the bar borders.</li>
                  <li><strong>cWidth, cHeight:</strong> The width and height of the chart.</li>
                  <li><strong>chartPadding:</strong> Padding around the chart, specified as an object with top, right, bottom, and left values.</li>
                  <li><strong>template:</strong> Specifies the template theme for the chart appearance.</li>
                  <li><strong>chartBorder:</strong> The border radius of the chart container.</li>
                  <li><strong>chartBoxShadow:</strong> When set to true, adds a shadow effect to the chart container.</li>
                  <li><strong>sortV, sortD:</strong> Controls the sorting of the data in the chart, based on values or dates.</li>
                  <li><strong>dateFormat:</strong> The format of dates in your data, if applicable.</li>
                  <li><strong>xAxisLabelM:</strong> Margin or position adjustment for the x-axis label.</li>
                  <li><strong>hoverColor:</strong> Color for the bar when it's hovered over.</li>
              </ul>
    

          </div>
        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a bar chart in the DynamoChart library </span></div>
  
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

export default Bar;


