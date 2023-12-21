import React, { useState,useEffect,useCallback } from 'react';
import './DyShiftCalendar.css';

const DyShiftCalendar = ({ data,chartWidth,chartHeight,colors,holidays,theme="t1",holidaysColor }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 10, 1));


  const [size, setSize] = useState({ width: chartWidth, height: chartHeight });

  const formatDate = (date) => {
    const dayNumber = date.getDate();
    const shortDayName = date.toLocaleDateString('en-US', { weekday: 'short' }).substr(0, 1);
    return `${shortDayName}${dayNumber}`;
  };
  const formatDate1 = (date) => {
    const dayNumber = date.getDate();
    
    return `${dayNumber}`;
  };

  const isWeekend = useCallback((date) => {
    const day = date.getDay();
    return day === holidays.first || day === holidays.second; // Use strict equality
  }, [holidays.first, holidays.second]); // Add dependencies

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDate();
    return lastDay;
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const renderCalendar = () => {
    const labels = Array.from(new Set(data.map((entry) => entry.label)));

    const calendar = labels.map((label) => (
      <div key={label} className="calendar-row-shifti">
        <div className="label-shifti" style={{color:theme==="t1"? "#F7F102":"black",fontSize:"16px"}}>{label}</div>
        <div className='calendar-row-shifti-label'>
          {Array.from({ length: daysInMonth }, (_, day) => {
        const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day + 1);
        currentDate.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison

        const matchingEntries = data.filter((entry) => {
          const fromDate = new Date(entry.from);
          fromDate.setHours(0, 0, 0, 0); // Also set from date to midnight

          const toDate = new Date(entry.to);
          toDate.setHours(0, 0, 0, 0); // Set to date to midnight

          return label === entry.label &&
                 currentDate >= fromDate &&
                 currentDate <= toDate;
        });
        const dayStyle = matchingEntries.length > 0
              ? { backgroundColor: isWeekend(currentDate) ?holidaysColor : colors[matchingEntries[0].reason] }
              : {};

          const dayNumber = formatDate1(currentDate);

          if (matchingEntries.length === 0 || (isWeekend(currentDate) && matchingEntries.length === 0)) {
            const weekendStyle = isWeekend(currentDate) ? { backgroundColor: holidaysColor } : {};
          
            return (
              <div
                key={day + 1}
                className="empty-square-shifti"
                style={weekendStyle}
              >
                {isWeekend(currentDate) ? dayNumber : ''}
              </div>
            );
          }
          const animationDelay = day * 0.05; // 0.05s increment for each day
          return (
            <div
              key={day + 1}
              className="calendar-day-shifti"
              style={{ ...dayStyle, animationDelay: `${animationDelay}s` }}
            >
              {dayNumber}
            </div>
          );
        })}
        </div>
      </div>
    ));

    return calendar;
  };

  // Filter data to include only entries for the current month
  const reasons = Array.from(new Set(data.map((entry) => entry.reason)));
const reasonTotals = {};

// Initialize reasonTotals with all unique reasons
reasons.forEach((reason) => {
  reasonTotals[reason] = 0;
});


  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };



// Calculate totals for each reason across all months
data.forEach((entry) => {
  const fromDate = new Date(entry.from);
  const toDate = new Date(entry.to);
  let currentDate = fromDate;

  while (currentDate <= toDate) {
    if (
      currentDate.getMonth() === currentMonth.getMonth() &&
      currentDate.getFullYear() === currentMonth.getFullYear() &&
      !isWeekend(currentDate)
    ) {
      // Increment the total for the reason
      reasonTotals[entry.reason]++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
});

const updateSize = useCallback(() => {
  const newWidth = Math.min(window.innerWidth - 40, chartWidth); // 40px for padding
  const newHeight = Math.min(window.innerHeight - 40, chartHeight); // 40px for padding
  setSize({ width: newWidth, height: newHeight });
}, [chartWidth, chartHeight]); // Add dependencies

useEffect(() => {
  window.addEventListener('resize', updateSize);
  updateSize(); // Set initial size
  return () => window.removeEventListener('resize', updateSize);
}, [updateSize]); // Correct dependency
 
 const legend = Object.keys(colors).map(reason => (
  <div key={reason} className="legend-shifti-item">
    <div
      className="legend-shifti-color"
      style={{ backgroundColor: colors[reason] }}
    ></div>
    <div className="legend-shifti-text" style={{color:theme==="t1"?"#ffffff":"#000000"}}>
    {reason} ({reasonTotals[reason]} days)
    </div>
  </div>
));
  return (
    <div className="calendar-container-shifti" style={{ width: size.width, height: size.height,backgroundColor: theme==="t1"?"#262829":"#ffffff" }}>
      <div className="calendar-header-shifti" style={{color:theme==="t1"?"#F7F102":"black"}}>
        <button className='button-85'  onClick={handlePrevMonth}>Previous Month</button>
        <h2>
          {currentMonth.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
        </h2>
        <button className='button-85' onClick={handleNextMonth}>Next Month</button>
      </div>
      <div className="legend-shifti">
      {legend}
      </div>
      <div className="calendar-body-shifti">
        <div className="calendar-day-shifti-names">
          <div className="label-shifti" style={{color:theme==="t1"? "#F7F102":"black",fontSize:"16px"}}> Days</div>
          <div className='labelnames-shifti'>
          {Array.from({ length: daysInMonth }, (_, day) => (
            <div className="day-name-shifti" style={{color:theme==="t1"?"#ffffff": "#0e0d0d"}} key={day}>
              {formatDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day + 1))}
            </div>
            
          ))}
          </div>
      </div>
               
      </div>
      <div key={currentMonth.toString()} className='calbodyjoli'>
  {renderCalendar()}
</div> 
    </div>
  );
};

export default DyShiftCalendar;
