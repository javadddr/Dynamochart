import React,{useState,useMemo} from 'react';
import './DyHeatMap.css'; // Importing the CSS file
const DyHeatMap = ({ chartData,chartTitle,marginBottomX,xAxisRotate=0,marginTopX,xAxis,yAxis,yAxisTitle,xAxisTitle,  xAxisTransform, colors, value, calculate,chartWidth,chartHeight }) => {
  // Helper functions for different calculations
  const data = useMemo(() => {
    return chartData.map(item => ({
      ...item,
      date: item[xAxis] || item.date, // Replace yAxis with 'date'
      name: item[yAxis] || item.name  // Replace xAxis with 'name'
    }));
  }, [chartData, xAxis, yAxis]);

  
  const calculateSum = (values) => values.reduce((acc, val) => acc + val, 0);
  const calculateMax = (values) => Math.max(...values);
  const calculateMin = (values) => Math.min(...values);
  const calculateAverage = (values) => values.reduce((acc, val) => acc + val, 0) / values.length;
  const [tooltip, setTooltip] = useState({ visible: false, content: {} });
  // Calculate max value for color scaling based on calculation type
  const getMaxValue = () => {
    let max = 0;
    data.forEach(item => {
      let values = value.map(val => item[val] || 0);
      let result;
      switch (calculate) {
        case 'max':
          result = calculateMax(values);
          break;
        case 'min':
          result = calculateMin(values);
          break;
        case 'average':
          result = calculateAverage(values);
          break;
        default: // 'sum' or other
          result = calculateSum(values);
      }

      if (result > max) {
        max = result;
      }
    });
    return max;
  };

  const uniqueNameCount = new Set(data.map(item => item.name)).size;
  const uniqueYAxisValues = new Set(chartData.map(item => item[yAxis]));
  const uniqueYAxisCount = uniqueYAxisValues.size;

  const xdis = chartWidth / uniqueYAxisCount ;
const ydis=(chartHeight/uniqueNameCount)-0.25*(chartHeight/uniqueNameCount)


  const maxValue = getMaxValue();

  // Calculate color based on value
  const getColor = (value) => {
    const alpha = (value / maxValue).toFixed(2);
    return `rgba(${hexToRgb(colors)},${alpha})`;
  };

  // Convert hex color to RGB
  const hexToRgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
  };

  // Unique dates and names for axes
  const dates = Array.from(new Set(data.map(d => d.date)));
  const names = Array.from(new Set(data.map(d => d.name)));
  const handleMouseOver = (e, date, name, currentData) => {
    const tooltipX = e.clientX;
    const tooltipY = e.clientY;
  
    if (!currentData) {
      setTooltip({
        visible: true,
        x: tooltipX,
        y: tooltipY,
        content: {
          date,
          name,
          values: value.map(v => ({ platform: v, value: 0 }))
        }
      });
    } else {
      setTooltip({
        visible: true,
        x: tooltipX,
        y: tooltipY,
        content: {
          date,
          name,
          values: value.map(v => ({ platform: v, value: currentData[v] || 0 }))
        }
      });
    }
  };
  

  const handleMouseMove = (e, date, name, currentData) => {
    const tooltipX = e.clientX;
    const tooltipY = e.clientY;
  
    if (currentData) {
      setTooltip({
        visible: true,
        x: tooltipX,
        y: tooltipY,
        content: {
          date,
          name,
          values: value.map(v => ({ platform: v, value: currentData[v] || 0 }))
        }
      });
    } else {
      setTooltip({
        visible: true,
        x: tooltipX,
        y: tooltipY,
        content: {
          date,
          name,
          values: value.map(v => ({ platform: v, value: 0 }))
        }
      });
    }
  };
  
 

  const handleMouseOut = () => {
    setTooltip({ visible: false, content: {} });
  };
  return (
    <div className='mainheat' style={{ width: chartWidth+20, height: chartHeight+20 }}>
      
    
    <div className='heatmap-container-soso' style={{ width: chartWidth, height: chartHeight }}>
    <h2 className='heatmap-title'>{chartTitle}</h2>
    {tooltip.visible && (
       <div className='heatmap-tooltip' style={{ left: tooltip.x, top: tooltip.y }}>
          <div><span>{xAxis}</span>{tooltip.content.date}</div>
          <div><span>{yAxis}</span> {tooltip.content.name}</div>
          <div><br></br></div>
          <span>&#9548;</span>
          {tooltip.content.values.map((v, idx) => (
            <div key={idx}>{v.platform}: {v.value}</div>
          ))}
        </div>
      )}
   
     <div className='heatmap-grid' style={{ width: chartWidth, height: chartHeight }} >
      
    {names.map((name, rowIndex) => (
          <div key={rowIndex} className='heatmap-row'>
            <div 
                className='heatmap-label'
                style={{ 
                  width: '170px',
                  textAlign: 'start',
                  fontFamily: 'Arial, sans-serif',
                  color: '#333',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize:"16px",
                }}
              >
                {name}
                
              </div>

            {dates.map((date, dateIndex) => {
              const currentData = data.find(d => d.date === date && d.name === name);
              let result = 0;
              if (currentData) {
                let values = value.map(val => currentData[val] || 0);
                switch (calculate) {
                  case 'max':
                    result = calculateMax(values);
                    break;
                  case 'min':
                    result = calculateMin(values);
                    break;
                  case 'average':
                    result = calculateAverage(values);
                    break;
                  default: // 'sum' or other
                    result = calculateSum(values);
                }
              }
              const backgroundColor = result > 0 ? getColor(result) : 'rgba(240, 240, 240, 1)';
              const animationDelay = `${dateIndex * 0.1}s`;
            ///number inside cells
              return (
                <div 
                  key={dateIndex}
                  className={`heatmap-cell cell-animationheat`} 
                  style={{ 
                    width: `${xdis}px`,
                    height: `${ydis}px`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Arial, sans-serif',
                    color: '#333',
                    border: '1px solid rgb(252, 208, 208)',
                    cursor: 'pointer',
                    fontSize:"14px",
                    backgroundColor,
                    animationDelay, // Animation delay added here
                  }}
                  onMouseOver={(e) => handleMouseOver(e, date, name, currentData)}
                  onMouseMove={(e) => handleMouseMove(e, date, name, currentData)}
                  onMouseOut={handleMouseOut}
                >
                  {result > 0 ? result.toFixed(0) : ''}
                </div>
              );
            })}
          </div>
        ))}
  
      </div>
      
      <div className='heatmap-xaxis' style={{ display: 'flex', flexDirection: 'row', width: `${(xdis * uniqueYAxisCount)}px`, justifyContent: 'flex-start', marginTop: "20px" }}>
  {/* Empty spacer for alignment */}
  <div style={{ width: '170px' }}></div>

  {dates.map((date, idx) => (
    <div
      key={idx}
      className='xaxis-label-heat'
      style={{
        width: `${xdis}px`,
        textAlign: 'center',
        display: 'flex', // Use flex to keep them in a line
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        transform: `rotate(${xAxisRotate}deg)`, // Rotate the label by 90 degrees
        transformOrigin: 'center', // This sets the point around which the rotation occurs
        marginTop:xAxisRotate>0?"20px":xAxisRotate<0?"20px":xAxisRotate=0?"0px":"0px",
        fontSize:"16px"
        
        // Adjust margins if necessary to align properly
      }}
    >
      {date}
    </div>
  ))}
</div>


  
    </div>
  </div>
  
  );
};

export default DyHeatMap;
