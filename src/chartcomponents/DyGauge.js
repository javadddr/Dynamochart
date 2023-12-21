import React, { useState, useEffect, useRef } from 'react';
import "./DyGauge.css";

const DyGauge = ({ data, target, start=0 , title="Your Title Here",  strokeWidth=110, segment = "date",legendTitle="Books" ,chartWidth=700,chartHeight=450,radius=290,  padding={top:20,left:10,right:10,bottom:10}, margin={top:10,left:10,right:10,bottom:10}}) => {
  const [percentage, setPercentage] = useState(0);
  const [activeSegment, setActiveSegment] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const svgRef = useRef();
  const [width, setWidth] = useState(chartWidth);
  const [height, setHeight] = useState(chartHeight);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = Math.min(window.innerWidth, chartWidth);
      const newHeight = Math.min(window.innerHeight, chartHeight);

      setWidth(newWidth);
      setHeight(newHeight);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call the handler to set the initial size
    handleResize();

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gaugeWidth = strokeWidth;

  const actualSumOfValues = data.reduce((acc, current) => acc + current.VALUE, 0);
  const sumOfValues = Math.min(actualSumOfValues, target); // Limit sumOfValues to target
  
  let accumulatedValue = 0;

  const segments = data.map(item => {
    const segmentValue = Math.min(item.VALUE, target - accumulatedValue); // Limit each segment value to remaining target value
    const segmentColor = item.color || "#2CAD00"; // Default color if not specified
    const filledStartAngle = (accumulatedValue / target) * 180;
    accumulatedValue += segmentValue;
    const filledEndAngle = (accumulatedValue / target) * 180;
    return { ...item, startAngle: filledStartAngle, endAngle: filledEndAngle, segmentColor };
  });
  useEffect(() => {
    let currentPercentage = 0;
    const interval = setInterval(() => {
      currentPercentage = Math.min(currentPercentage + 1, actualSumOfValues / target * 100);
      setPercentage(currentPercentage);
      if (currentPercentage >= actualSumOfValues / target * 100) {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [target, sumOfValues]);

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 180) * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  };

  const handleSegmentMouseOver = (segment, event) => {
    setActiveSegment(segment);
    updateTooltipPosition(event);
    setShowTooltip(true);
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  };

  const updateTooltipPosition = (event) => {
    const rect = svgRef.current.getBoundingClientRect();
    setTooltipPosition({
      x: event.clientX - rect.left+1000, 
      y: event.clientY - rect.top+200  
    });
  };

  const renderSegments = () => {
    return segments.map((segment, index) => {
      const path = describeArc(width / 2, height, radius, segment.startAngle, segment.endAngle);
      return (
        <path
          key={index}
          d={path}
          className="dy-gauge-path dy-gauge-foreground"
          style={{ strokeWidth: gaugeWidth, stroke: segment.segmentColor }}
          onMouseOver={(e) => handleSegmentMouseOver(segment, e)}
          onMouseMove={updateTooltipPosition}
          onMouseOut={handleMouseOut}
        />
      );
    });
  };

  const renderLegend = () => {
    return (
      <div className="dy-gauge-legend">
        <div className='legendtitle' style={{marginBottom:"15px",color:"#D8DD2B",fontSize:"16px"}}>{legendTitle}</div>
        {segments.map((segmentItem, index) => (
          <div key={index} className="legend-item-gaudd">
            <span className="legend-color-gaudd" style={{ backgroundColor: segmentItem.segmentColor }}></span>
            <span className="legend-text-gaudd">
            {segment === 'date' ? `${segmentItem.label}: ${((segmentItem.VALUE / target) * 100).toFixed(0)}%` : `${segmentItem.date}: ${((segmentItem.VALUE / target) * 100).toFixed(0)}%`}

            </span>
          </div>
        ))}
      </div>
    );
  };
  
// Calculating the position for sum/target text
const endAngle = (sumOfValues - start) / (target - start) * 180;
const sumTextPosition = polarToCartesian((width / 2)+10, height, radius+(gaugeWidth), endAngle);
  return (
<div className='main-gaudd' style={{ width: width ,height:height, border: '2px solid #e6dfdf' }}>

<div>
      <div style={{ padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px` }}>
  <div className='titlegauge'>{title}</div>
 
  <svg width="100%" height="100%" viewBox={`0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`} ref={svgRef} style={{ overflow: 'visible' }}>
          <path d={describeArc(width / 2, height, radius, 0, 180)} className="dy-gauge-path dy-gauge-background" style={{ strokeWidth: gaugeWidth }} />
          {renderSegments()}
          <text x={sumTextPosition.x} y={sumTextPosition.y} className="dy-gauge-sum">{`${actualSumOfValues}/${target}`}</text>
          <text x={width / 2 - radius} y={height + 40} className="dy-gauge-value">{start}</text>
          <text x={width / 2 + radius} y={height + 40} className="dy-gauge-value">{target}</text>
          <text x={width / 2} y={height} className="dy-gauge-percentage">{`${(percentage).toFixed(0)}%`}</text>
       
        </svg>
     
       
        {showTooltip && activeSegment && (
          <div className="dy-gauge-tooltip" style={{ left: tooltipPosition.x, top: tooltipPosition.y }}>
            <div className="tooltip-color-pons" style={{ backgroundColor: activeSegment.segmentColor }}></div>
            {segment === 'date' ? `${activeSegment.date}: ${activeSegment.VALUE}` : `${activeSegment.label}: ${activeSegment.VALUE}`}
          </div>
        )}
 </div>
 </div>
 {renderLegend()}
    </div>
  );
};

export default DyGauge;










