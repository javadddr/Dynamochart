import React, { useEffect, useState ,useCallback} from 'react';
import './DyFunnel.css';

const DyFunnel = ({ data, colors,showSmall=7,chartDecimals=1, chartWiedth = 1000, chartHeight = 500,showLegend=true,funnelValues=true,chartTitle,chartTitleFontSize='20', chartTitleColor='black',chartTemplate="t2" }) => {
  const [chartWidth1, setChartWidth1] = useState(chartWiedth);
  const [chartHeight1, setChartHeight1] = useState(chartHeight);
  const [activeLegend, setActiveLegend] = useState(null);

  const [newData, setNewData] = useState(data);
  const handleLegendItemClick = (clickedSubStep) => {
    // Check if the clicked legend is already active
    if (activeLegend === clickedSubStep) {
      // If active, revert to the original data and deactivate the legend
      setNewData(data);
      setActiveLegend(null);
    } else {
      // If not active, filter the data based on the clicked legend and activate it
      const filteredData = data.map((step) => ({
        name: step.name,
        values: { [clickedSubStep]: step.values[clickedSubStep] },
      }));
      setNewData(filteredData);
      setActiveLegend(clickedSubStep);
    }
  };
  
  

  // Function to update chart dimensions based on window size
  const updateChartDimensions = useCallback(() => {
    if (window.innerWidth < chartWiedth) {
      setChartWidth1(window.innerWidth - 20); // Adjust as needed
      setChartHeight1(400); // Adjust as needed
    } else {
      setChartWidth1(chartWiedth); // Default width
      setChartHeight1(chartHeight); // Default height
    }
  }, [chartWiedth, chartHeight]);


  // Update chart dimensions when the window is resized
    useEffect(() => {
    updateChartDimensions();
    window.addEventListener('resize', updateChartDimensions);
    return () => {
      window.removeEventListener('resize', updateChartDimensions);
    };
  }, [updateChartDimensions]);

  const generateTooltipContent = (subStep, value) => (
    <div className="tooltip-funnel">
     
      <div className="tooltip-text">
        <div className='tolcolor'>
       <div className="color-square-funnel" style={{ backgroundColor: colors[0][subStep] }}></div>
        <div className="sub-step-name">{subStep}</div>
        </div>
        <div className='toltexti'>
        <div className="sub-step-value">{value}</div>
        <div className="sub-step-percentage">
          ({((value / maxTotal) * 100).toFixed(chartDecimals)}%)
        </div>
        </div>
      </div>
    </div>
  );

  // Calculate the max and min values for each step
  const maxValues = {};
  const minValues = {};

  data.forEach((step) => {
    Object.entries(step.values).forEach(([subStep, value]) => {
      if (!maxValues[subStep] || value > maxValues[subStep]) {
        maxValues[subStep] = value;
      }
      if (!minValues[subStep] || value < minValues[subStep]) {
        minValues[subStep] = value;
      }
    });
  });

  // Calculate the max value across all steps
  const maxTotal = Math.max(
    ...newData.map((step) =>
      Object.values(step.values).reduce((a, b) => a + b, 0)
    )
  );

  return (
    <div
      className="MainChart-funnel"
      style={{ width: chartWidth1, height: chartHeight1, border: '1px solid black' ,backgroundColor:chartTemplate==="t1"?"white":chartTemplate==="t2"?"#1F1F1F":"#1F1F1F" }}
    >
      <div
          className="titlefu"
          style={{
            display: 'flex',
            marginLeft: '8%',
            flex: '1',
            fontSize: chartTitleFontSize,
            alignItems: 'center',
            color: chartTemplate==="t1"?"black":chartTemplate==="t2"?'#D8DD2B':"black",
            fontFamily:"inter",
            marginBottom:"10px",
           
          }}
        >
          {chartTitle}
        </div>

      <div
        className="funnel-container"
        style={{
          fontFamily: 'inter, Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
          display: 'grid',
          gridTemplateColumns: funnelValues?'1fr 5fr 1fr':'1fr 5fr',
          alignItems: 'flex-end',
          flex: '5',
          backgroundColor: '#333333',
          position: 'relative',
       borderRadius:"10px",
          marginLeft: '10px',
          marginRight: '10px',
        }}
      >
        <div className="funnel-names">
          {newData.map((step, index) => (
            <div key={index} className="namefunnel">
              {step.name}
            </div>
          ))}
        </div>
        <div className="funnel-steps">
          {newData.map((step, index) => (
            <div key={index} className="funnel-step" style={{marginRight:funnelValues? '10px':'0px'}}>
              {Object.entries(step.values).map(([subStep, value]) => (
                <div
                  key={subStep}
                  style={{
                    width: `${(value / maxTotal) * 100}%`,
                    backgroundColor: colors[0][subStep], // Assign color based on sub-step name
                  }}
                  className="sub-stepfunnel"
                >
                  {((value / maxTotal) * 100) > showSmall && (
                    <span className="percentagefunnel">{`${((value / maxTotal) * 100).toFixed(chartDecimals)}%`}</span>
                  )}
                  <div className="tooltip-container-funnel">
                    {generateTooltipContent(subStep, value)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {funnelValues &&<div className="funnel-values">
          {newData.map((step, index) => (
            <div key={index} className="valuefunnel">
              <div className="total-value">
                {Object.values(step.values).reduce((acc, value) => acc + value, 0)}
              </div>
              <div className="total-percentage">
                ({`${((Object.values(step.values).reduce((acc, value) => acc + value, 0) / maxTotal) * 100).toFixed(chartDecimals)}%`})
              </div>
            </div>
          ))}
        </div>}
      </div>
      {/* Legend Section */}
      {showLegend&&<div className="legend-funnel">
        {Object.entries(maxValues).map(([subStep, maxValue]) => (
          <div
          key={subStep}
          className={`legend-funnel-item${activeLegend === subStep ? ' active' : ''}`}
          onClick={() => handleLegendItemClick(subStep)}
          style={{ color: chartTemplate==="t1"?"black":chartTemplate==="t2"?'#D8DD2B':"black" }}
        >
          <div className="color-square-funnel" style={{ backgroundColor: colors[0][subStep] }}></div>
          {`${subStep}: ${(minValues[subStep] / maxValue * 100).toFixed(chartDecimals)}%`}
        </div>
        
        ))}
      </div>
      }
    </div>
  );
};

export default DyFunnel;
