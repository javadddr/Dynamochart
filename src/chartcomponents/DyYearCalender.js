import React, { useState } from 'react';
import './DyYearCalender.css';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DayNames = () => (
  <div className="calendar-week1">
    {daysOfWeek.map((day) => (
      <div key={day} className="calendar-day" style={{fontSize: "16px"}}>
        {day}
      </div>
    ))}
  </div>
);



const calculateValue = (values, calculation) => {
  switch (calculation) {
    case 'sum':
      return values.reduce((a, b) => a + b, 0);
    case 'average':
      return values.reduce((a, b) => a + b, 0) / values.length;
    case 'max':
      return Math.max(...values);
    case 'min':
      return Math.min(...values);
    default:
      return 0;
  }
};

const DyYearCalender = ({ data,calculation="sum"  ,chartWidth=1700,chartHeight=500 ,startMonth=1,monthsNumber=12,chartColor="#2cfc03",chartPadding=6}) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const currentYear = year;
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });

  function hexToRGB(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }
  const maxValue = Math.max(...data.map(item => item.value));

  const getColorForValue = (value, maxValue, chartColorHex) => {
    if (value === 0 || value === undefined) {
      return 'initial';
    }
    const { r, g, b } = hexToRGB(chartColorHex);
    const normalizedValue =(value / maxValue)/1.5;
    const greenValue = g - Math.round(g * normalizedValue);
    
    return `rgb(${r}, ${greenValue}, ${b})`;
  };
  

  const navigateToPreviousYear = () => {
    setYear(currentYear - 1);
  };

  const navigateToNextYear = () => {
    setYear(currentYear + 1);
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Group data by date
  const groupedData = data.reduce((acc, item) => {
    acc[item.date] = acc[item.date] || [];
    acc[item.date].push(item.value);
    return acc;
  }, {});
  const handleMouseOver = (e, value) => {
    setTooltip({ visible: true, content: `Value: ${value}`, x: e.clientX, y: e.clientY });
  };
  const Tooltip = ({ visible, content, x, y }) => {
    if (!visible) return null;
  
    return (
      <div className="tooltip-year" style={{ left: x+20, top: y-20 }}>
        {content}
      </div>
    );
  };
  
  const handleMouseOut = () => {
    setTooltip({ visible: false, content: '', x: 0, y: 0 });
  };
const renderMonth = (monthIndex) => {
  const firstDay = new Date(currentYear, monthIndex, 0).getDay();
  const totalDays = daysInMonth(monthIndex, currentYear);

  let calendarDays = [];
  let day = 1;

  for (let i = 0; i < 6; i++) {
    let week = [];
    for (let j = 0; j < 7; j++) {
      const key = `week-${i}-day-${j}-month-${monthIndex}`;
      if ((i === 0 && j < firstDay) || day > totalDays) {
        week.push(
          <div key={key} className="prev-dates">
            {/* Empty date */}
          </div>
        );
      } else {
        const currentDate = new Date(currentYear, monthIndex, day + 1).toISOString().split('T')[0];
        const values = groupedData[currentDate] || [0];
        const calculatedValue = calculateValue(values, calculation);
        const backgroundColor = getColorForValue(calculatedValue, maxValue, chartColor);


        week.push(
          <div
            key={key}
            className='number-item'
            style={{ backgroundColor: backgroundColor, color:"white" ,fontSize: "14px"}}
            onMouseOver={(e) => handleMouseOver(e, calculatedValue)}
            onMouseOut={handleMouseOut}
          >
            {day}
          </div>
        );
        day++;
      }
    }
    calendarDays.push(
      <div key={`week-${i}-month-${monthIndex}`} className="calendar-week">
        {week}
      </div>
    );
  }

  return calendarDays;
};

const renderMonthWithAnimation = (monthIndex, halfOfYear) => {
  const animationDelay = `${monthIndex * 0.2}s`; // Adjust this value as needed
  return (
    <div className="mainmonth" style={{ animationDelay: animationDelay }} key={`month-${monthIndex}-${halfOfYear}`}>
      <div className="calendar-month-label" style={{ fontSize: "16px"}}>
        {months[monthIndex]}
      </div>
      <div className="calendar-month">
        {renderMonth(monthIndex)}
      </div>
    </div>
  );
};

const firstSectionEndIndex = Math.min(startMonth - 1 + 6, startMonth - 1 + monthsNumber);
const secondSectionStartIndex = Math.min(startMonth - 1 + 6, startMonth - 1 + monthsNumber);
const secondSectionEndIndex = startMonth - 1 + monthsNumber;

  return (
    <div className="calendar" style={{width:monthsNumber-startMonth>=6?chartWidth:(((chartWidth-40)/chartPadding)*(monthsNumber-startMonth)),height:monthsNumber-startMonth>= 6?chartHeight:(chartHeight/2)+20}}>
      <div className="calendar-inner">
        <div className="calendar-controls">
          <div className="calendar-prev">
          <button onClick={navigateToPreviousYear}>
            &lt;
          </button>

          </div>
          <div className="calendar-year-month">
            <div className="calendar-year-label"> 
              {currentYear}
            </div>
          </div>
          <div className="calendar-next">
        
            <button onClick={navigateToNextYear}>
            &gt;
          </button>
          </div>
        </div>
        <Tooltip visible={tooltip.visible} content={tooltip.content} x={tooltip.x} y={tooltip.y} />
        <div className="calendar-body" style={{ maxWidth: monthsNumber >= 6 ? chartWidth : (((chartWidth - 40) / 6) * monthsNumber) }}>
        <div className='justname'>
            <DayNames />
          </div>
          {months.slice(startMonth - 1, firstSectionEndIndex).map((_, index) => (
            renderMonthWithAnimation(index + startMonth - 1, 'firstHalf')
          ))}
        </div>
        {monthsNumber-startMonth >5 && <div className="calendar-body">
          <div className='justname'>
            <DayNames />
          </div>
          {months.slice(secondSectionStartIndex, secondSectionEndIndex).map((_, index) => (
            renderMonthWithAnimation(index+startMonth+5, 'secondHalf')
          ))}
        </div>}
      
      </div>
    </div>
  );
};

export default DyYearCalender;
