import React, { useState,useEffect, useRef } from 'react';

import "./DyBar.css"

const DyBar = ({
  data,
  xAxis="label",
  yAxis="value",
  showValues = true,
  valueDisplayPosition = 'middle',
  valueFontSize = '16px',
  valueFontFamily = 'inter',
  showXLabels = true,
  showYLabels = true,
  chartTitle = "Your Title Here",
  showTooltip = true,
  showXAxisLabel = true,
  showYAxisLabel = true,
  xAxisLabel = 'X Axis',
  yAxisLabel = 'Y Axis',
  yAxisLabelH=60,
  yAxisLabelV=50,
  xAxisLabelFont = 'inter',
  yAxisLabelFont = 'inter',
  xAxisLabelFontSize = '16px',
  yAxisLabelFontSize = '16px',
  xAxisLabelRotate = '0',
  yAxisLabelRotate = '0',
  xAxisLine= true,
  yAxisLine= true,
  xAxisTick=true,
  yAxisTick=true,
  gridLine = true,
  barsWidth =15,
  barBorderRadius = 5,
  barBorderColor = '#333',
  ymarl = '40px',
  cWidth = 800,
  cHeight = 500,
  chartPadding = { top: 110, right: 80, bottom: 150, left: 110 },
  template='t2',
  chartBorder=5,
  chartBoxShadow=false,
  sortV = 'n',
  sortD='',
  dateFormat='dd-mm-yyyy',
  xAxisLabelM=20,
  valueFontColor="black",
  hoverColor="gray"
}) => {
  function parseDate(dateStr, format) {
    let parts = dateStr.split('-');
    let month, day;

    if (format === 'mm-dd-yyyy') {
        month = parseInt(parts[0], 10);
        day = parseInt(parts[1], 10);
    } else if (format === 'dd-mm-yyyy') {
        day = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10);
    }

    let year = parseInt(parts[2], 10);

    return new Date(year, month - 1, day); // month is 0-based
}

let sortedData = [...data];

if (!sortD || sortD.trim() === '') { 
    if (sortV === 'az') {
        sortedData.sort((a, b) => a[yAxis] - b[yAxis]);
    } else if (sortV === 'za') {
        sortedData.sort((a, b) => b[yAxis] - a[yAxis]);
    }
} else if (sortD === 'az') {
    sortedData.sort((a, b) => {
        let dateA = parseDate(a[xAxis], dateFormat);
        let dateB = parseDate(b[xAxis], dateFormat);
        return dateA - dateB;
    });
} else if (sortD === 'za') {
    sortedData.sort((a, b) => {
        let dateA = parseDate(a[xAxis], dateFormat);
        let dateB = parseDate(b[xAxis], dateFormat);
        return dateB - dateA;
    });
}

  
  const processedData = sortedData.map(item => {
    let processedItem = { ...item };
  
    if (item[xAxis]) {
      processedItem.label = item[xAxis];
    }
  
    if (item[yAxis]) {
      processedItem.value = item[yAxis];
    }
  
    return processedItem;
  });
  
  
  
  const [chartDimensions, setChartDimensions] = useState({
    width: Math.min(window.innerWidth * 0.9, cWidth),
    height: Math.min(window.innerHeight * 0.9, cHeight)
  });
  
  const [tooltipData, setTooltipData] = useState(null);
  const maxValue = Math.max(...processedData.map(d => d.value));
  
 
    // Update chart dimensions when cWidth or cHeight props change
    useEffect(() => {
      setChartDimensions({
        width: Math.min(window.innerWidth * 0.9, cWidth),
        height: Math.min(window.innerHeight * 0.9, cHeight)
      });
    }, [cWidth, cHeight]); // Dependencies array includes cWidth and cHeight
  
 
 // Existing useEffect for window resize
 useEffect(() => {
  const handleResize = () => {
    setChartDimensions({
      width: Math.min(window.innerWidth * 0.9, cWidth),
      height: Math.min(window.innerHeight * 0.9, cHeight)
    });
  };
  
  window.addEventListener('resize', handleResize);

  // Clean up the event listener on component unmount
  return () => window.removeEventListener('resize', handleResize);
}, [cWidth, cHeight]); // Make sure to include cWidth and cHeight here as well




  const chartWidth = chartDimensions.width;
  const chartHeight = chartDimensions.height;
  
  const chartInnerWidth = chartWidth - chartPadding.left - chartPadding.right;
  const chartInnerHeight = chartHeight - chartPadding.top - chartPadding.bottom;
  const barWidth = (chartWidth / (data.length * 2))+barsWidth;

  const spaceAvailable = chartInnerWidth - (barWidth * data.length);
  const spaceBetweenBars = data.length > 1 ? spaceAvailable / (data.length - 1) : 0;

  const [hoveredBarIndex, setHoveredBarIndex] = useState(null);
  const chartRef = useRef(null);
  const [initialRender, setInitialRender] = useState(true);
  const gridnumber = 6
  useEffect(() => {
    if (initialRender) {
        setTimeout(() => {
            setInitialRender(false);
        }, 10);
    }
}, [initialRender]);
 

  const getYScale = value => {
    return (value / maxValue) * chartInnerHeight;
  };

  const handleMouseEnter = (e, d) => {
    if (showTooltip) {
      updateTooltipPosition(e, d);
    }
  };
  
  const handleMouseMove = (e, d) => {
    if (showTooltip) {
      updateTooltipPosition(e, d);
    }
  };
  
  const updateTooltipPosition = (e, d) => {
    // Calculate the position relative to the chart container
    const rect = chartRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left + 20; // Add 20px to the x value for offset
    let y = e.clientY - rect.top - 10; // Subtract 10px from the y value for offset
    
    // Tooltip width (same as defined in CSS)
    const tooltipWidth = 150; // Adjust this to match your tooltip's width
  
    // Adjust x position if tooltip goes beyond the chart width
    if (x + tooltipWidth > chartWidth) {
      x = chartWidth - tooltipWidth-120;
      y = e.clientY - rect.top - 10;
    }
  
    setTooltipData({ ...d, x, y });
  };
  
  

  
  
  const handleMouseLeave = () => {
    if (showTooltip) setTooltipData(null);
  };

  return (
  
    <div 
    ref={chartRef} 
    className="dybar-chart" 
    style={{ 
        position: 'relative', 
        width: chartWidth, 
        height: chartHeight, 
        border: '1px solid gray',
        boxShadow: chartBoxShadow?'0 4px 8px rgba(0, 0, 0, 0.1)':'',
        overflow: 'hidden',
        backgroundColor: template==='t1'?'#f9f9f9':template==='t2'?'#1F1F1F':'#1F1F1F',
        borderRadius:chartBorder,
        margin:"5px",
        
        
    }}
>
  {/* Display chart title */}
  {chartTitle && (
    <div className="dybar-chart-title" style={{
      position: 'absolute',
      top: chartPadding.top/3, // Adjust this for position
      left: '50%',
      transform: 'translateX(-50%)',
      fontFamily: 'inter', // Change to desired font
      fontSize: '20px', // Change to desired size
      fontWeight: 'bold', // Make the title bold
      color: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101'

    }}>
      {chartTitle}
    </div>
  )}
      {/* Grid Lines */}
      {gridLine && Array.from({ length: gridnumber +1}).map((_, idx) => (
        <div
          key={idx}
          className="dybar-grid-line"
          style={{
            position: 'absolute',
            left: chartPadding.left,
           
            right: chartPadding.right-10,
            bottom: chartPadding.bottom + (((chartInnerHeight) / gridnumber) * idx),
            height: '1px',
            backgroundColor: '#e6e3e3',
            zIndex:2
          }}
        />
      ))}
      
        {xAxisLine&& <div 
            style={{
                position: 'absolute',
                bottom: chartPadding.bottom,
                left: chartPadding.left,
                right: chartPadding.right,
                height: '1px',
                backgroundColor: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101',
                zIndex:400,
                
            }}
        />}


        {yAxisLine&&<div 
            style={{
                position: 'absolute',
                bottom: chartPadding.bottom,
                left: chartPadding.left,
                top: chartPadding.top,
                width: '1px',
              
                backgroundColor: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101',
                zIndex:4,
               
            }}
        />}
{processedData.map((d, index) => (
  <div className='divposht'
    key={index}
    
    style={{
      position: 'absolute',
      bottom: chartPadding.bottom,
      left: chartPadding.left+10 + (barWidth + spaceBetweenBars) * index,
      
      width: barWidth,
      height: chartInnerHeight+10,
      backgroundColor: hoveredBarIndex === index ? `${hoverColor}` : 'transparent',
      
    }}
    
  />
  
))}

      {/* Bars */}
      {processedData.map((d, index) => (
        <div
          key={index}
          className={`dybar-bar ${initialRender ? 'initial-animation' : ''}`}
          style={{
            position: 'absolute',
            bottom: chartPadding.bottom,
            left: chartPadding.left+10 + (barWidth + spaceBetweenBars) * index,
            width: barWidth,
            height: `${getYScale(d.value)}px`,
            backgroundColor: d.color || '#4CAF50',
            borderTopLeftRadius: barBorderRadius,
            borderTopRightRadius: barBorderRadius,
        
            opacity: hoveredBarIndex === null || hoveredBarIndex === index ? 1 : 0.4,
            border: `1px solid ${barBorderColor}`,
            zIndex:20
          }}
          onMouseEnter={() => {
            handleMouseEnter(d);
            setHoveredBarIndex(index);
          }}
          onMouseMove={e => handleMouseMove(e, d)}
          onMouseLeave={() => {
            handleMouseLeave();
            setHoveredBarIndex(null);
          }}

          
        >
{showValues && (
  <span
    className="dybar-bar-value"
    style={{
      position: 'absolute',
      top: 
        valueDisplayPosition === 'middle' ? '50%' : 
        valueDisplayPosition === 'top' ? '-20px' : 
        'calc(100% - 25px)', 
      left: '50%',
      transform: 
        valueDisplayPosition === 'middle' ? 'translate(-50%, -50%)' : 
        'translate(-50%)',
      fontSize: valueFontSize,
      fontFamily: valueFontFamily,
      color: valueFontColor
    }}
  >
    {d.value}
  </span>
)}




        </div>
      ))}

      {/* X Axis Labels */}
    {/* X Axis Labels */}
{showXLabels && processedData.map((d, index) => (
  <div
    key={index}
    className="dybar-xlabel"
    style={{
      position: 'absolute',
      bottom: chartPadding.bottom - (xAxisLabelRotate === '0' ? 30 : 70),

      marginTop:'-10px',
      left: chartPadding.left+10 + (barWidth/2) + (barWidth + spaceBetweenBars) * index, // Adjust this line
      transform: `translateX(-50%) rotate(${xAxisLabelRotate}deg)`, // Adjust this line
      transformOrigin: 'center',
      fontFamily: xAxisLabelFont,
      fontSize: xAxisLabelFontSize,
      color: template==='t1'?'#0e0101':template==='t2'?'#ffffff':'#0e0101'
    }}
  >
    {d.label}
  </div>
))}



      {/* Y Axis Labels */}
      {/* Y Axis Labels */}
{/* Y Axis Labels */}
{/* Y Axis Labels */}
{showYLabels && Array.from({ length: gridnumber+1 }).map((_, idx) => (
  <div
    key={idx}
    className="dybar-ylabel"
    style={{
      position: 'absolute',
      left: parseInt(ymarl, 10) +35, // Adjusting for label width
      bottom: chartPadding.bottom + (((chartInnerHeight) / gridnumber) * idx) - 10, // Adjust this line
      fontFamily: yAxisLabelFont,
      fontSize: yAxisLabelFontSize,
      transform: `rotate(${yAxisLabelRotate}deg)`, // Directly append the degree value
      transformOrigin: 'right', // This ensures rotation around the right end of the label
      color: template==='t1'?'#0e0101':template==='t2'?'#ffffff':'#0e0101'
    }}
  >
    {Math.round((maxValue / gridnumber) * idx)}
  </div>
))}

{/* X Axis Ticks */}
{showXLabels &&xAxisTick && processedData.map((d, index) => (
  <div
    key={`x-tick-${index}`}
    style={{
      position: 'absolute',
      bottom: chartPadding.bottom - 10, // Adjust based on tick size
      left: chartPadding.left+10 + (barWidth/2) + (barWidth + spaceBetweenBars) * index, // Center the tick
      width: '1px',
      height: '10px', // Adjust for tick size
      backgroundColor: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101'
      
    }}
  />
))}
{/* Y Axis Ticks */}
{showYLabels && yAxisTick && Array.from({ length: gridnumber+1 }).map((_, idx) => (
  <div
    key={`y-tick-${idx}`}
    style={{
      position: 'absolute',
      left: chartPadding.left - 10, // Adjust based on tick size
      bottom: chartPadding.bottom + (((chartInnerHeight) / gridnumber) * idx),
      width: '10px', // Adjust for tick size
      height: '1px',
      backgroundColor:template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101'
    }}
  />
))}



      {/* X Axis Main Label */}
      {showXAxisLabel && (
        <div
          className="dybar-xaxis-main-label"
          style={{
            position: 'absolute',
            bottom: xAxisLabelM,
            left: '50%',
            
            transform: 'translateX(-50%)',
            fontFamily: xAxisLabelFont,
            fontSize: xAxisLabelFontSize,
            color: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101',
            
          }}
        >
          {xAxisLabel}
        </div>
      )}

      {/* Y Axis Main Label */}
      {showYAxisLabel && (
        <div
          className="dybar-yaxis-main-label"
          style={{
            position: 'absolute',
            top:  `${yAxisLabelV}%`, 
            left: parseInt(yAxisLabelH, 10) - 50, 
            transform: 'translateY(-50%) rotate(-90deg)',
            fontFamily: yAxisLabelFont,
            fontSize: yAxisLabelFontSize,
            color: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101'
          }}
        >
          {yAxisLabel}
        </div>
      )}

      {/* Tooltip */}
      {showTooltip && tooltipData && (
        <div className="dybar-tooltipuf" style={{
          position: 'absolute',
          top: tooltipData.y,
          left: tooltipData.x,
          backgroundColor: template==='t1'?'rgba(0,0,0,0.7)':template==='t2'?'#020101':'#0e0101',
          color: template==='t1'?'white':template==='t2'?'white':'#0e0101',
          padding: '10px',
          borderRadius: '3px',
          pointerEvents: 'none',
          fontSize:"16px",
          opacity:1,
        }}>
        <div className='tobarmain'>
    <span>{xAxisLabel} : </span> {tooltipData.label}
    <br />
    <span>{yAxisLabel} : </span> {tooltipData.value}
</div>
        </div>
      )}
    </div>
    
  );
};

export default DyBar;
