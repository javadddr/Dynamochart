import React, { useState, useEffect } from 'react';
import "./DyStackChart.css";

const DyStackChart = ({
  initialData,
  colors,
  chartPadding = { top: 50, right: 80, bottom: 20, left: 0 },
  chartMargin = { top: 50, right: 50, bottom: 0, left: 10 },
  chartWidth = 1100,
  chartHeight = 300,
  gap = 20,
  sort = 'n',
  stepLines="",
  xAxisTitle='Name of X-Axis',
  yAxisTitle='Name of y-Axis',
  xAxis = 'label',
  yAxis = 'value',
  template='t1',
  chartTitle='javad khalil arjmandi', // Gap between bars
}) => {

  const transformedData = initialData.map(item => ({
    label: item[xAxis],
    value: item[yAxis]
  }));



  const [data, setData] = useState(transformedData); // This will allow us to modify the data
  const [selectedKey, setSelectedKey] = useState(null); // This will track which key ('x1', 'x2', 'x3') is selected

  // Function to handle clicking on a segment
  const handleSegmentClick = (key) => {
    if (selectedKey === key) {
      // If the same key is clicked again, reset to the full dataset
      setData(transformedData);
      setSelectedKey(null);
    } else {
      // Otherwise, filter the data to only include the clicked key
      const filteredData = transformedData.map(item => ({
        label: item.label,
        value: { [key]: item.value[key] }
      }));
      setData(filteredData);
      setSelectedKey(key);
    }
  };

// Function to sort the data
const sortData = (data, sortOrder) => {
  // Calculate the total value for each stack
  const dataWithTotal = data.map(item => ({
    ...item,
    total: Object.values(item.value).reduce((acc, curr) => acc + curr, 0)
  }));

  if (sortOrder === 'az') {
    // Sort from lowest to highest total value
    return dataWithTotal.sort((a, b) => a.total - b.total);
  } else if (sortOrder === 'za') {
    // Sort from highest to lowest total value
    return dataWithTotal.sort((a, b) => b.total - a.total);
  }

  // Return the original data if no sort or 'n' is specified
  return data;
};

useEffect(() => {
  // Call sortData when the component mounts or when initialData or sort changes
  const sortedData = sortData(transformedData, sort);
  setData(sortedData);
}, [initialData, sort,stepLines]); // Dependencies array


  const maxValue = Math.max(...data.map(item =>
    Object.values(item.value).reduce((acc, curr) => acc + curr, 0)
  ));

  const yAxisValues = Array.from({ length: 5 }, (_, index) => maxValue * (index / 4)).reverse();

  const paddedWidth = chartWidth;

  const barWidthWithGap = paddedWidth / data.length;
 
  const barWidth = barWidthWithGap;
  const yAxisTitleWidth = 15; 
  const yAxisValueWidth = 25;// width style of y-axis-title
const yAxisLabelWidth = 40; // estimated or you can set a fixed width in CSS
const yAxisPaddingright = 20;

const chartAndyAxisWidth = yAxisTitleWidth+yAxisValueWidth+ yAxisLabelWidth + chartWidth + chartPadding.left + chartPadding.right + chartMargin.left + chartMargin.right+yAxisPaddingright;
const [isLoaded, setIsLoaded] = React.useState(false);
const marginTopxTitle=10;
const marginBottmxTitle=15;
const [tooltip, setTooltip] = useState({
  show: false,
  content: '',
  position: { x: 0, y: 0 }
});

// Function to handle mouse entering a segment
// Function to handle mouse entering a segment
const handleMouseEnter = (e, item) => {
  const valuesWithColors = Object.keys(item.value).map((key, idx) => {
    const value = item.value[key];
    const color = colors[idx % colors.length]; // Get the color from the colors array
    // Create a small square with the background color
    return `<span class='color-square-stackup' style='background-color:${color};'></span> ${key}: ${value}`;
  }).join('<br/>'); // Join with line breaks for HTML content

  const tooltipContent = `<strong>${item.label}</strong><br/>-----<br/>${valuesWithColors}`;

  setTooltip({
    show: true,
    content: tooltipContent,
    position: { x: e.clientX , y: e.clientY }
  });

  // Set the opacity of all bars
  document.querySelectorAll('.bar').forEach(bar => {
    bar.style.opacity = '0.3';
  });
  // Set the opacity of the current bar to full
  e.currentTarget.parentNode.style.opacity = '1.0';
};

// Function to handle mouse moving over a segment
const handleMouseMove = (e) => {
  setTooltip(prevState => ({
    ...prevState,
    position: { x: e.clientX-290 , y: e.clientY-190 }
  }));
};
// Function to handle mouse leaving a segment
const handleMouseLeave = (e) => {
  setTooltip({ show: false, content: '', position: { x: 0, y: 0 } });

  // Reset the opacity of all bars
  document.querySelectorAll('.bar').forEach(bar => {
    bar.style.opacity = '1.0';
  });
};



const renderStepLines = () => {
  // Return null if stepLines is not provided or it's an empty array
  if (!stepLines || stepLines.length === 0) return null;

  return stepLines.map((stepLine, index) => {
    const { label, position, marginTop,height,style } = stepLine;
    return (
      <React.Fragment key={`step-line-stackfod-${index}`}>
        <div
          className="step-line-stackfod"
          style={{
            position: 'absolute',
            left: `${position+chartMargin.left+chartPadding.left+yAxisLabelWidth+yAxisTitleWidth+ barWidth}px`,
            height:chartHeight+height,
            top:`${marginTop}%`,
            borderLeft: `2px ${style} #333`,
            backgroundColor:template==='t1'?'#f9f9f9':template==='t2'?'#D8DD2B':'#0e0101', // Customizable style
          }}
        ></div>
     
        <div
          className="step-label-stackfod"
          style={{
            position: 'absolute',
            left: `${position+chartMargin.left+chartPadding.left+yAxisLabelWidth+yAxisTitleWidth+ barWidth+ 5}px`,
            top:`${marginTop+1}%`,
            fontSize:"16px",
            transform: 'translateY(-100%) rotate(0deg)', // Adjusted to rotate label to horizontal
            transformOrigin: 'left top',
            whiteSpace: 'nowrap',
            color:template==='t1'?'black':template==='t2'?'#61f71c':'#0e0101', // Customizable style
          }}
        >
          {label}
        </div>
      </React.Fragment>
    );
  });
};


React.useEffect(() => {
  setIsLoaded(true);
}, []);
const [showValues, setShowValues] = useState(false);
  
useEffect(() => {
  const timer = setTimeout(() => {
    setShowValues(true);
  }, 1000); // Match this duration with your CSS transition duration
  
  return () => clearTimeout(timer); // Cleanup the timer
}, []);
  const totalHight = chartAndyAxisWidth
  const getSegmentHeight = (value) => (value / maxValue) * chartHeight;


  const legendLabels = Object.keys(transformedData[0].value);

const renderLegend = () => {
  return (
    <div className="legend" style={{ position: 'absolute', top: 0, right: 0 }}>
      {legendLabels.map((key, index) => {
        const color = colors[index % colors.length];
        return (
          <div key={key} className="legend-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span className="legend-color" style={{ backgroundColor: color, display: 'inline-block', width: '20px', height: '20px', marginRight: '5px' }}></span>
            <span className="legend-label" style={{color:template==='t1'?'black':template==='t2'?'white':'black'}}>{key}</span>
          </div>
        );
      })}
    </div>
  );
};



  return (
    <div className="chart-wrapper-stackfod" style={{
      width: `${totalHight}px`,
      margin: `${chartMargin.top}px ${chartMargin.right}px ${chartMargin.bottom}px ${chartMargin.left}px`,
      backgroundColor:template==='t1'?'#FFFFFF':template==='t2'?'#1F1F1F':'#0e0101',
      border: '1px solid gray',
    }}>
      
      <div className='charttitletop' style={{ width: `${chartAndyAxisWidth}px`, display: 'flex', justifyContent: 'center', marginTop: '20px',left:(chartWidth/2),paddingLeft:chartPadding.left,color: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101' ,fontSize:"25px"}}>{chartTitle}</div>
  
      <div className='chartandyaxis'>
      {renderLegend()}
   
      <div className="y-axis-title" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '50px',
          marginLeft: `${yAxisLabelWidth}px`,
          width: `${yAxisTitleWidth}px`,
          transform: 'rotate(-90deg)',
          transformOrigin: 'center', // Adjust as necessary
          whiteSpace: 'nowrap', // Keep the text in one line
          color: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101',
          fontSize:"18px"
         
        }}>
          {yAxisTitle}
        </div>
  {/* Tooltip container */}
  {tooltip.show && (
        <div className="tooltip-stackfod" style={{
          position: 'absolute',
          left: `${tooltip.position.x}px`,
          top: `${tooltip.position.y}px`,
          pointerEvents: 'none',
          fontSize:"16px",
      
        }}dangerouslySetInnerHTML={{ __html: tooltip.content }}/>
          
        
      )}
    {/* Y-axis values */}
    <div className="y-axis" style={{ paddingTop: chartPadding.top }}>
    {yAxisValues.map((value, index) => (
        <div key={index} className="y-axis-label" style={{ 
            position: 'absolute',
            height: `${chartHeight / yAxisValues.length}px`, // Dividing the total height by the number of labels
            bottom: `${(value / maxValue) * chartHeight+chartPadding.bottom+marginBottmxTitle}px`, // Position each label based on the value it represents
            width: `${yAxisValueWidth}px`,
            paddingRight: yAxisPaddingright,
            textAlign: 'center', // Align text to the right
            color: template==='t1'?"black":template==='t2'?'#ffffff':'#0e0101',
            left:yAxisLabelWidth+35,
            fontSize:"16px"
        }}>
            {Math.round(value)}
        </div>
    ))}
</div>






      <div className='chart-main-stackfod' style={{
        padding: `${chartPadding.top}px ${chartPadding.right}px ${chartPadding.bottom}px ${chartPadding.left}px`
      }}>
      
       {/* Bars and their values */}
{/* Bars and their values */}
<div className="bars-container-stackfod" style={{ height: `${chartHeight}px`, width: `${chartWidth}px` }}>
   {/* Render step line if stepLine prop is provided */}
   {renderStepLines()}
  
  {data.map((item, idx) => {
    let accumulatedHeight = 0;
    return (
      <div key={idx} className="bar-stackfod" style={{
        width: `${barWidth}px`,
        marginRight: idx === data.length - 1 ? `0px` : `${gap}px` // Remove gap for the last bar
      }}>
        {Object.keys(item.value).map((key, segmentIdx) => {
          const segmentHeight = getSegmentHeight(item.value[key]);
          accumulatedHeight += segmentHeight;
          return (
            <div
              key={key}
              className="bar-segment-stackfod"
              style={{
                height: isLoaded ? `${segmentHeight}px` : '0px',

                backgroundColor: colors[segmentIdx % colors.length],
                transition: 'height 1s ease-out 0s' // CSS Transition here
              }}
              onMouseEnter={(e) => handleMouseEnter(e, item)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              onClick={() => handleSegmentClick(key)} // Add the onClick event handler here
            >
              {/* Segment value */}
              {showValues && <span className="segment-value-stackfod">{item.value[key]}</span>}
            </div>
          );
        })}
       {/* Conditionally render Stack total value */}
       {selectedKey === null && (
          <div className="stack-total-stackfod" style={{ bottom: `${accumulatedHeight}px`,color: template==='t1'?"black":template==='t2'?'yellow':'#0e0101' }}>
            {showValues && Object.values(item.value).reduce((acc, curr) => acc + curr, 0)}
          </div>
        )}
      </div>
    );
  })}
</div>

   
<div className="x-axis-stackfod" style={{borderTop:'2px solid black', zIndex: "100"}}>
  {data.map((item, idx) => (
    <div 
      key={idx} 
      className="x-label-stackfod" 
      style={{ 
        width: `${barWidthWithGap}px`, // Set width including the gap
        marginLeft: `${-gap / 2}px`, // Center the label under the bar
        color: template==='t1'?"black":template==='t2'?'#ffffff':'#0e0101',
        fontSize:"16px"
      }}
    >
      {item.label}
    </div>
  ))}
</div>

      </div>
      </div>
      <div className="axis-title" style={{ width: `${chartWidth}px`, display: 'flex', justifyContent: 'center', marginTop: marginTopxTitle,marginLeft:'15px',marginBottom:marginBottmxTitle,paddingLeft:chartPadding.left+70,color: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101',zIndex:20,fontSize:"18px"}}>
      {xAxisTitle}
</div> 

    </div>
  );
};

export default DyStackChart;
