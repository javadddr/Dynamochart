import React, { useState, useEffect, useRef,useMemo } from 'react';
import * as d3 from 'd3';
import "./DyLineDate.css"

const DyLineDate = ({ 
  data,
  useArea, 
  useAreaTop,
  xAxis="date",
  yAxis="value",
  dateFilter,
  YAxisTitle='Y- Axis Title',
  XAxisTitle='X- Axis Title',
  chartWidth=1000,
  chartHeight=500,
  defaulPeriod='Daily',
  defaulFunctionType='Sum',
 circleRadius=3,
 circleColor="black",
 margin = { top: 90, right: 70, bottom: 90, left: 90 },
 startFrom=0.3,
 xAxisValueFont=15,
 yAxisValueFont=15,
 yAxisTitleFont=15,
 xAxisTitleFont=15,
 chartValueFont=14,
 chartTitleFont=19,
 template='t2',
 useAreaColor='steelblue',
 chartTitle="Title",
 lineShape="curveStep"
}) => {


  const [changeData, setChangeData] = useState(data);

  // Effect to transform data whenever the raw data or axis keys change
  useEffect(() => {
    const newData2 = data.map(d => ({
      date: d[xAxis],
      label: d.label, // Assuming 'label' is consistent in all data structures
      value: d[yAxis]
    }));
    setChangeData(newData2);
  }, [data, xAxis, yAxis]);

  const [newData, setNewData] = useState(changeData);
  
  useEffect(() => {
    const summedData1 = changeData.reduce((acc, curr) => {
      const existingEntry = acc.find(item => item.date === curr.date);
      if (existingEntry) {
        existingEntry.value += curr.value;
      } else {
        acc.push({ date: curr.date, value: curr.value });
      }
      return acc;
    }, []);

    setNewData(summedData1);

  }, [data,changeData]);

  const [newAverage, setNewAverage] = useState([]);
  const [minData, setMinData] = useState([]);
  const [maxData, setMaxData] = useState([]);
  const [period, setPeriod] = useState(defaulPeriod); // Add state for period
  const [functionType, setFunctionType] = useState(defaulFunctionType); // Add state for function type
  const [dtaForChart, setDtaForChart] = useState(newData);
  const justTitle=functionType==="Sum"?"Total":functionType
  const curveTypes = useMemo(() => ({
    curveLinear: d3.curveLinear,
    curveStep: d3.curveStep,
    curveStepBefore: d3.curveStepBefore,
    curveStepAfter: d3.curveStepAfter,
    curveBasis: d3.curveBasis,
   
    curveMonotoneX: d3.curveMonotoneX,
    curveMonotoneY: d3.curveMonotoneY,
    
    curveNatural: d3.curveNatural,

  }), []);
 
  useEffect(() => {
    const summedData = changeData.reduce((acc, curr) => {
      const existingEntry = acc.find(item => item.date === curr.date);
      if (existingEntry) {
        existingEntry.value += curr.value;
      } else {
        acc.push({ date: curr.date, value: curr.value });
      }
      return acc;
    }, []);

    setNewData(summedData);

    const averageData = changeData.reduce((acc, curr) => {
      const existingEntry = acc.find(item => item.date === curr.date);
      if (existingEntry) {
        existingEntry.valueSum += curr.value;
        existingEntry.count += 1;
      } else {
        acc.push({ date: curr.date, valueSum: curr.value, count: 1 });
      }
      return acc;
    }, []);

    const calculatedAverage = averageData.map(item => ({
      date: item.date,
      value: item.valueSum / item.count
    }));

    setNewAverage(calculatedAverage);

    const minValues = changeData.reduce((acc, curr) => {
      const existingEntry = acc.find(item => item.date === curr.date);
      if (existingEntry) {
        existingEntry.value = Math.min(existingEntry.value, curr.value);
      } else {
        acc.push({ date: curr.date, value: curr.value });
      }
      return acc;
    }, []);

    setMinData(minValues);

    const maxValues = changeData.reduce((acc, curr) => {
      const existingEntry = acc.find(item => item.date === curr.date);
      if (existingEntry) {
        existingEntry.value = Math.max(existingEntry.value, curr.value);
      } else {
        acc.push({ date: curr.date, value: curr.value });
      }
      return acc;
    }, []);

    setMaxData(maxValues);




    let selectedFunctionData;
    if (functionType === 'Sum') {
      selectedFunctionData = newData;
    }else if (functionType === 'Please choose') {
      selectedFunctionData = newData;
     } else if (functionType === 'Average') {
      selectedFunctionData = newAverage;
    } else if (functionType === 'Min') {
      selectedFunctionData = minData;
    } else if (functionType === 'Max') {
      selectedFunctionData = maxData;
    }
    let processedData;
    if (period === 'Daily') {
      processedData = selectedFunctionData;
    } else if (period === 'Weekly') {
      processedData = calculateWeeklyAverage(selectedFunctionData);
    } else if (period === 'Monthly') {
      processedData = calculateMonthlyAverage(selectedFunctionData);
    }

 

    if(dateFilter){
      setDtaForChart(processedData)
    }else{
      setDtaForChart(changeData) 
    } 
    
    // Update chart based on selected data
    updateChart(selectedFunctionData);





  }, [data, period, functionType,defaulFunctionType,dateFilter]);







  const updateChart = (selectedData) => {
    // ... Your chart updating logic ...
  };
  // Function to calculate average value based on week
// Function to calculate average value based on week
const calculateWeeklyAverage = (dataArray) => {
  const weeklyAverages = {};

  dataArray.forEach(item => {
    const itemDate = new Date(item.date);
    const year = itemDate.getFullYear();
    const weekNumber = getWeekNumber(itemDate);

    const weekIdentifier = `${year}-${weekNumber}`;
    
    if (!weeklyAverages[weekIdentifier]) {
      weeklyAverages[weekIdentifier] = {
        date: weekIdentifier,
        valueSum: item.value,
        count: 1
      };
    } else {
      weeklyAverages[weekIdentifier].valueSum += item.value;
      weeklyAverages[weekIdentifier].count += 1;
    }
  });

  const result = Object.values(weeklyAverages).map(weekData => ({
    date: weekData.date,
    value: (weekData.valueSum / weekData.count)
  }));

  return result;
};


// Function to get week number of a date
const getWeekNumber = (date) => {
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((days + oneJan.getDay() + 1) / 7);
  return weekNumber;
};
// Function to calculate average value based on month
// Function to calculate average value based on month
const calculateMonthlyAverage = (dataArray) => {
  const monthlyAverages = {};

  dataArray.forEach(item => {
    const itemDate = new Date(item.date);
    const year = itemDate.getFullYear();
    const month = itemDate.getMonth() + 1;

    const monthIdentifier = `${year}-${month}`;
    
    if (!monthlyAverages[monthIdentifier]) {
      monthlyAverages[monthIdentifier] = {
        date: monthIdentifier,
        valueSum: item.value,
        count: 1
      };
    } else {
      monthlyAverages[monthIdentifier].valueSum += item.value;
      monthlyAverages[monthIdentifier].count += 1;
    }
  });

  const result = Object.values(monthlyAverages).map(monthData => ({
    date: monthData.date,
    value: (monthData.valueSum / monthData.count)
  }));

  return result;
};


const svgRef = useRef();

useEffect(() => {
  if (dtaForChart.length === 0) {
    return;
  }

  
  const width = chartWidth - margin.left - margin.right;
  const height = chartHeight - margin.top - margin.bottom;
  const svg = d3.select(svgRef.current);

  // Clear the previous chart
  svg.selectAll('*').remove();

  const chart = svg
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .style('background-color', template === 't1' ? '#ffffff' : template === 't2' ? '#1F1F1F' : '#1F1F1F')
    .style('border-radius', '20px')   
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top -50})`);

  const x = d3.scalePoint()
    .domain(dtaForChart.map(d => new Date(d.date)))
    .range([0, width])
    .padding(startFrom); // Adjust padding as needed

  const y = d3.scaleLinear()
    .domain([0, d3.max(dtaForChart, d => d.value)])
    .nice()
    .range([height, 20]); // Adjust the bottom range value

  const line = d3.line()
    .x(d => x(new Date(d.date)))
    .y(d => y(d.value))
    .curve(curveTypes[lineShape] || d3.curveMonotoneX);

    const area = d3.area()
    .x(d => x(new Date(d.date)))
    .y0(height) // Set the y0 to the bottom of the chart
    .y1(d => y(d.value))
    .curve(curveTypes[lineShape] || d3.curveMonotoneX);


    
  chart.append('path')
    .datum(dtaForChart)
    .attr('fill', useArea ? useAreaColor?`${useAreaColor}`:template==='t1'?`${useAreaColor}`:'#8cf4c9' : useAreaTop?'lightblue':'none')
    .attr('stroke', template==='t1'?'steelblue':'#ffffff')
    .attr('stroke-width', 1)
    .attr('d', useArea ? area : line)
 
  
  // Append circles for data points
  const circles = chart.selectAll('.data-circle')
  .data(dtaForChart)
  .enter()
  .append('circle')
  .attr('class', 'data-circle')
  .attr('cx', d => x(new Date(d.date)))
  .attr('cy', d => y(d.value))
  .attr('r', circleRadius) // Adjust the radius as needed
  .attr('fill',template==='t1'?circleColor:template==='t2'?'#D8DD2B':'#0e0101')
    circles.on('mouseover', handleMouseOver)
  .on('mouseout', handleMouseOut);


  chart.selectAll('.value-label')
    .data(dtaForChart)
    .enter()
    .append('text')
    .attr('class', 'value-label')
    .style('font-family', 'inter')
    .attr('x', d => x(new Date(d.date)))
    .attr('y', d => y(d.value) - 10) // Adjust the offset as needed
    .attr('text-anchor', 'middle')
    .text(d => d.value.toFixed(1))
    .style('font-size', chartValueFont) // Adjust the font size as needed
    .attr('fill', template==='t1'?'#0e0101':template==='t2'?'#ffffff':'#0e0101');

  chart.append('g')
  .attr('class', 'xlinevalue')  // Add a class here
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(x)
      .tickValues(dtaForChart.map(d => new Date(d.date)))
      .tickFormat(d3.timeFormat('%Y-%m-%d')) // Format as desired
      .tickPadding(10)
      .tickSizeOuter(0))
    .selectAll('text')
    .style('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)')
    .attr('dy', '-1.3em')
    .attr('fill', template==='t1'?'#0e0101':template==='t2'?'#ffffff':'#0e0101')
    .attr('dx', '-3.6em');
 


  chart.append('g')
  .call(d3.axisLeft(y).ticks(5))
  .style('font-size', yAxisValueFont)
  .attr('color', template==='t1'?'#0e0101':template==='t2'?'#ffffff':'#0e0101') // Adjust the font size as needed;
  // X-Axis Title
  chart.append('text')
    .attr('class', 'xtitle')  // Add a class here
    .attr('x', width / 2)
    .attr('y', height + margin.bottom+10)
    .attr('text-anchor', 'middle')
    .text(XAxisTitle)
    .style('font-size', xAxisTitleFont)
    .attr('fill', template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101')
    .style('font-family', 'inter');

  // Y-Axis Title
  chart.append('text')
    .attr('class', 'ytitle')  // Add a class here
    .attr('x', -height / 2 )
    .attr('y', -margin.left + 40)
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)')
    .text(YAxisTitle)
    .style('font-size', yAxisTitleFont)
    .attr('fill', template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101')
    .style('font-family', 'inter');


  chart.append('text')
    .attr('class', 'chart-title-linedate')  // Add a class here
    .attr('x', width / 2)
    .attr('y', +margin.top -90) // Adjust the Y position for the title
    .attr('text-anchor', 'middle')
    .text(`${chartTitle} (${period}-${justTitle})`)
    .attr('fill', template==='t1'?'#0e0101':template==='t2'?'#D8DD2B':'#0e0101')
    .style('font-family', 'inter')
    .style('font-size', chartTitleFont); // Adjust the font size as needed


  const updateChartOnResize = () => {
    const containerWidth = svgRef.current.parentNode.clientWidth;


    const newWidth = (containerWidth) - margin.left - margin.right;
    

    // Update scales and axis
    x.range([0, newWidth]);
   
    
    chart.select('.x-axis').call(d3.axisBottom(x)
      .tickValues(dtaForChart.map(d => new Date(d.date))));

   

    chart.select('path').attr('d', useArea ? area : line);

    // Update value labels positions
    chart.selectAll('.value-label').attr('x', d => x(new Date(d.date)));

    chart.select('.chart-title-linedate')
    .attr('x', newWidth / 2)
    .attr('y', margin.top - 90);

    chart.select('.xtitle')
    .attr('x', newWidth / 2)
    .attr('y', height + margin.bottom+30);
 
   
   
  

   // Update x-axis tick label positions
   const xAxis = chart.select('.xlinevalue');
   xAxis.attr('transform', `translate(0, ${height})`)
     .call(d3.axisBottom(x)
       .tickValues(dtaForChart.map(d => new Date(d.date)))
       .tickFormat(d3.timeFormat('%Y-%m-%d')) // Format as desired
       .tickPadding(10)
       .tickSizeOuter(0))
     .selectAll('text')
     .style('text-anchor', 'middle')
     .attr('transform', 'rotate(-90)')
     .attr('dy', '-1.3em')
     .style('font-size', xAxisValueFont)
     .attr('fill', template==='t1'?'#0e0101':template==='t2'?'#ffffff':'#0e0101') // Adjust the font size as needed
     .attr('dx', '-3.6em');

  // Update circles positions
  chart.selectAll('.data-circle')
  .attr('cx', d => x(new Date(d.date)))
  .attr('cy', d => y(d.value));


  };

  // Attach the resize event listener
  window.addEventListener('resize', updateChartOnResize);

  // Initial setup
  updateChartOnResize();

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('resize', updateChartOnResize);
  };

}, [dtaForChart, useArea, useAreaColor, useAreaTop,XAxisTitle,YAxisTitle,chartHeight,chartTitleFont,chartValueFont,chartWidth,circleColor,circleRadius,justTitle,margin.bottom,margin.left,margin.right,margin.top,period,startFrom,template,xAxisTitleFont,xAxisValueFont,yAxisTitleFont,yAxisValueFont]);

const handleMouseOver = (event, d) => {
  const tooltip = d3.select('.tooltip-linedate');
  tooltip
    .style('left', `${event.pageX}px`)
    .style('top', `${event.pageY - 20}px`)
    .html(`<strong>${period}-${justTitle}</strong> <br><strong>${XAxisTitle}:</strong> ${d.date}<br><strong>${YAxisTitle}:</strong> ${d.value.toFixed(1)}`);

  tooltip.classed('show-tooltip-linedate', true); 
};

const handleMouseOut = () => {
  const tooltip = d3.select('.tooltip-linedate');
  tooltip.classed('show-tooltip-linedate', false); 
};
useEffect(() => {
  setDtaForChart(newData)
}, [changeData,defaulFunctionType,defaulPeriod]);
  return (
    <div className="container-linedate" style={{maxWidth: chartWidth,backgroundColor:template==='t1'?'#ffffff':template==='t2'?'#1F1F1F':'#0e0101'}}>
      

        <div>
        {dateFilter && (
          <div className="select-container-linedate">
            <select value={functionType} onChange={(e) => setFunctionType(e.target.value)}>
      
              <option value="Sum">Sum</option>
              <option value="Average">Average</option>
              <option value="Min">Min</option>
              <option value="Max">Max</option>
            </select>
            {/* Add first dropdown for period selection */}
            <select value={period} onChange={(e) => setPeriod(e.target.value)}>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
        )}
          <svg ref={svgRef} style={{ width: '100%'}}>
              {/* Your chart content goes here */}
              
          </svg>
          <div className="tooltip-linedate"></div>
        </div>
       

    </div>
  );
};

export default DyLineDate;
