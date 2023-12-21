import React, { useState, useEffect } from 'react';
import "./DyBarHorizontal.css"
const DyBarHorizontal = ({ 
  data,
  xAxis='age',
  yAxis='name',
  showValues = true, 
  valueDisplayPosition = 'middle', 
  valueFontSize = '16px',
  valueFontFamily = 'inter',
  showTicks = true,
  showYLabels = true,
  gridNumber = 7, 
  grid=true,
  gridColor="#feebeb",
  chartTitle = "You Title Here",
  cWidth = 600,
  showTooltip = true,
  sort='n',
  barHeight = 60,
  spacingBetweenBars = 10,
  margin = {  left: 170, right: 60, top: 60, bottom: 40  },
  barBorderRadius=2,
  template='t1',

}) => {
  const processedData = data.map(item => ({
    name: item[yAxis],
    age: item[xAxis],
    color: item.color
  }));


  switch(sort) {
    case 'az':
      processedData.sort((a, b) => a.age - b.age);
      break;
    case 'za':
      processedData.sort((a, b) => b.age - a.age);
      break;
    case 'n':
    default:
      break;
  }
 
  const [hoveredBar, setHoveredBar] = useState(null);
  const [chartWidth, setChartWidth] = useState(cWidth); // Initialize with default width


  
  const maxAge = Math.max(...processedData.map(d => d.age)) + (Math.max(...processedData.map(d => d.age)) * 0.1);
  const gridInterval = maxAge / (gridNumber - 1);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, processedData: {} });
  const [barsInitialized, setBarsInitialized] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

 
  useEffect(() => {
    setChartWidth(cWidth);
}, [cWidth]);


  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth - 300; // Adjust this value based on your margins/paddings
      if (newWidth < cWidth) {
        setChartWidth(newWidth);
      } else {
        setChartWidth(cWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [cWidth]);

  useEffect(() => {
    setTimeout(() => {
      setBarsInitialized(true);
    }, 10);
  }, []);

  useEffect(() => {
    if (barsInitialized) {
      setTimeout(() => {
        setAnimationCompleted(true);
      }, 900);
    }
  }, [barsInitialized]);

  const totalHeight = processedData.length * (barHeight + spacingBetweenBars) + margin.top + margin.bottom;

  return (
    <div style={{ 
      width: chartWidth + margin.left + margin.right, 
      height: processedData.length * (barHeight + spacingBetweenBars) + margin.top + margin.bottom + 50, // +50 to account for the title's height
      position: 'relative',
      border:"1px solid black",
      borderRadius:"5px",
      backgroundColor:template==='t1'?'#f9f9f9':template==='t2'?'#1F1F1F':'#1F1F1F',
 }}>
   
   {/* Title */}
  {  chartTitle && <div style={{ 
        position: 'absolute', 
        top: 20, 
        left: '50%', 
        transform: 'translateX(-50%)', 
        fontSize: '20px', 
        fontWeight: 'bold',
        color: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101'
   }}>
       {chartTitle}
   </div>}
      {/* Grid lines and labels */}
      {[...Array(gridNumber)].map((_, i) => {
  const leftPosition = margin.left + (i * gridInterval / maxAge) * chartWidth;
  return (
    <React.Fragment key={i}>
      {grid&&<div style={{ position: 'absolute', left: leftPosition, top: margin.top, width: '0.5px', height: processedData.length * (barHeight + spacingBetweenBars), backgroundColor: template==='t1'?gridColor:template==='t2'?'#ffffff':'#0e0101'}}></div>}
      <div style={{ position: 'absolute', left: leftPosition-8, top: margin.top+10+ processedData.length * (barHeight + spacingBetweenBars), width: '1px', height: '20px',color: template==='t1'?'#0e0101':template==='t2'?'#ffffff':'#0e0101' ,fontSize:"16px"}}>{Math.round(i * gridInterval)}</div>
      {showTicks&&<div style={{ position: 'absolute', left: leftPosition, top: margin.top+10 + processedData.length * (barHeight + spacingBetweenBars) - 10, width: '1px', height: '10px', backgroundColor: 'black' ,fontSize:"16px"}}></div>}

    </React.Fragment>
  );
})}

      {/* Bars */}
      {processedData.map((d, index) => (
        <React.Fragment key={d.name}>
        <div
          key={d.name}
          style={{
            position: 'absolute',
            left: margin.left,
            top: margin.top + index * (barHeight + spacingBetweenBars),
            height: barHeight,
            width: barsInitialized ? (d.age / maxAge) * chartWidth : 0, // updated width value
            transition: 'width 0.9s ease-out',
            backgroundColor: d.color,
            border: '1px solid #000',
            borderTopRightRadius: (d.age / maxAge) * chartWidth > 0 ? `${barBorderRadius}px` : "0",
            borderBottomRightRadius: (d.age / maxAge) * chartWidth > 0 ? `${barBorderRadius}px` : "0",

            opacity: hoveredBar === d.name ? 1 : (hoveredBar ? 0.3 : 1),
          }}
          onMouseEnter={(e) => {
            setTooltip({
              visible: true,
              x: e.clientX,
              y: e.clientY,
              processedData: d
            });
            setHoveredBar(d.name);
          }}
          onMouseMove={(e) => {
            setTooltip((prevTooltip) => ({
              ...prevTooltip,
              x: e.clientX,
              y: e.clientY,
            }));
          }}
          
          onMouseLeave={() => {
            setTooltip({ ...tooltip, visible: false });
            setHoveredBar(null);
          }}
          
        >
          {showYLabels&&<div className='Ylablesforhh'
            style={{ 
                position: 'absolute', 
                left: '-120px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                maxWidth: '100px', 
                textOverflow: 'ellipsis', 
                whiteSpace: 'nowrap', 
                overflow: 'hidden' ,
                marginLeft:'20px',
                color: template==='t1'?'#0e0101':template==='t2'?'#ffffff':'#0e0101',
                fontSize:"16px"
                
            }}
            >
              {d.name}
          </div>  }

{showValues && animationCompleted && (  // updated this condition
            <div 
              style={{
                position: 'absolute',
                left: valueDisplayPosition === 'middle'
                  ? (d.age / maxAge) * chartWidth / 2
                  : valueDisplayPosition === 'top'
                  ? (d.age / maxAge) * chartWidth + 5
                  : 15,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: valueFontSize,
                fontFamily: valueFontFamily,
                color: template==='t1'?'#0e0101':template==='t2'?'#ffffff':'#0e0101'
              }}
            >
              {d.age}
            </div>
          )}
        </div>
        {showTicks&&<div style={{ position: 'absolute', left: margin.left - 10, top: margin.top + index * (barHeight + spacingBetweenBars) + barHeight/2, width: '10px', height: '1px', backgroundColor: 'black' }}></div>} {/* This is the new tick for y-axis */}
        </React.Fragment>
      ))}
{showTooltip&&tooltip.visible && (
  <div
    style={{
      position: 'fixed',
      left: tooltip.x + 15,
      top: tooltip.y - 30,
      padding: '10px',
      borderRadius: '5px',
      border:"1px solid yellow",
      backgroundColor: 'rgb(52, 52, 52)',
      color: 'white',
      pointerEvents: 'none',
      opacity:1,
    }}
  >
    <div style={{fontSize:"19px",padding:"5px"}}><span className='spanhobarctn' style={{color:"rgb(216, 221, 43)"}}>{yAxis}: </span>{tooltip.processedData.name}</div>
    <div style={{fontSize:"19px",padding:"5px"}}><span className='spanhobarctn' style={{color:"rgb(216, 221, 43)"}}>{xAxis}: </span> {tooltip.processedData.age}</div>
  </div>
)}
   

      {/* Axes */}
      <div style={{ position: 'absolute', left: margin.left, top: margin.top, width: '1px', height: processedData.length * (barHeight + spacingBetweenBars), backgroundColor: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101'}}></div>
      <div style={{ position: 'absolute', left: margin.left, top: margin.top + processedData.length * (barHeight + spacingBetweenBars), width: chartWidth, height: '1px', backgroundColor: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101' }}></div>
      <div className='yAxis-bar-hor-top' style={{ position: 'absolute', left: '55%', top: margin.top + processedData.length * (barHeight + spacingBetweenBars) + 50, transform: 'translateX(-10%)',color: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101',fontSize:"18px" }}>{xAxis}</div>
      <div className='xAxis-bar-hor-top' style={{ position: 'absolute', left: 50, top: totalHeight/2, transform: 'translateX(-100%) translateY(-50%) rotate(-90deg)',color: template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101',fontSize:"18px"}}>{yAxis}</div>
    </div>
  );
}

export default DyBarHorizontal;
