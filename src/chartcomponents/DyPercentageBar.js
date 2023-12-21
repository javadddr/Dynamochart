import React,{useState,useEffect} from 'react';
import './DyPercentageBar.css'; // Adjust the path as necessary

const DyPercentageBar = ({ barHeight="30px",barsGap,data,chartWidth,chartHeight, colors, sort,chartTitle }) => {

  const [chartDimensions, setChartDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const sortData = (data, sortCriteria) => {
    const [party, direction] = sortCriteria;
    return [...data].sort((a, b) => {
      const valueA = a.value[party];
      const valueB = b.value[party];

      if (direction === 'ascending') {
        return valueA - valueB;
      } else { // 'descending'
        return valueB - valueA;
      }
    });
  };

  const sortedData = sort ? sortData(data, sort) : data;



 
  const barGap = barsGap; // Fixed gap between bars


  useEffect(() => {
    const handleResize = () => {
      setChartDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const [loaded, setLoaded] = useState(false);
  const [hoveredBar, setHoveredBar] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, label) => {
    setTooltipPosition({ x: e.clientX+110, y: e.clientY+20 });
    setHoveredBar(label);
  };
  
  const handleMouseEnter = (e, label) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
    setHoveredBar(label);
  };
  useEffect(() => {
    // Trigger the re-render once the component is mounted
    setLoaded(true);
  }, [barsGap]);
  // Function to render each bar segment
 // Function to render each bar segment
 const renderBar = (valueObj) => {
  return Object.keys(valueObj).map((key) => (
    <div
      key={key}
      style={{
        maxWidth: `${loaded ? valueObj[key] * 100 : 0}%`, // Use loaded state to trigger animation
        backgroundColor: colors[0][key],
      
      }}
      className="bar-segment-perfod"
    >
      {`${(valueObj[key] * 100).toFixed(0)>9?`${(valueObj[key] * 100).toFixed(0)}%`:""}`}
    </div>
  ));
};


const Legend = ({ colors }) => {
  return (
    <div className="legend-perfod">
      {Object.entries(colors[0]).map(([key, color]) => (
        <div key={key} className="legend-perfod-item">
          <span className="legend-perfod-color" style={{ backgroundColor: color }}></span>
          <span className="legend-perfod-label">{key}</span>
        </div>
      ))}
    </div>
  );
};
useEffect(() => {
  // Function to send the URL to your endpoint
  const sendURL = async () => {
    try {
      const currentURL = window.location.href; // Get the current URL

     

      console.log('Text',currentURL);
    } catch (error) {
      console.error('Error sending URL:', error);
    }
  };

  sendURL();
}, []);

const handleMouseLeave = () => {
  setHoveredBar(null);
};
return (
  <div className="dy-percentage-bar-container" style={{  width: Math.min(chartDimensions.width-(chartDimensions.width*0.1), chartWidth), 
    height: Math.min(chartDimensions.height-(chartDimensions.height*0.2), chartHeight)  }}>
      <div className="chart-title-perfod">{chartTitle}</div> {/* Add your title here */}
     <Legend colors={colors} />
     {sortedData.map((item, index) => (
        <div 
          key={item.label} 
          className="bar-wrapper-perdc"
          onMouseEnter={(e) => handleMouseEnter(e, item.label)}
          onMouseMove={(e) => handleMouseMove(e, item.label)}
          onMouseLeave={handleMouseLeave}
          style={{
            opacity: hoveredBar === null || hoveredBar === item.label ? 1 : 0.3,
            cursor: 'pointer',
            height: `${barHeight}px`,
            marginBottom: index === sortedData.length - 1 ? '0px' : `${barGap}px`,
          }}
        >
        <div className="bar-label-perfod">{item.label}</div>
        <div className="bar-container-perfod" style={{ height: barHeight, border: '1px solid  green'}}>
          {renderBar(item.value)}
        </div>
        {hoveredBar === item.label && (
          <div className="tooltip-perfod" style={{ left: tooltipPosition.x, top: tooltipPosition.y ,fontSize:"16px"}}>
            <div className="tooltip-perfod-label">{item.label}</div> {/* Added label here */}
            {Object.entries(item.value).map(([key, value]) => (
              <div key={key}>{`${key}: ${(value * 100).toFixed(0)}%`}</div>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
);



};

export default DyPercentageBar;

