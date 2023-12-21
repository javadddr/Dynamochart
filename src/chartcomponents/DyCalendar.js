import React, { useState, useEffect, useRef,useCallback } from 'react';
import './DyCalendar.css';

const DyCalendar = ({ data, colors,showLabel,chartWidth,chartHeight, mode,showSummery=false, labelColor,chartColor = { red: 144, green: 238, blue: 144, single: true } }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 10, 1));
  const [selectedDay, setSelectedDay] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [renderedDays, setRenderedDays] = useState([]);
  const dayHeight=(chartHeight)/6
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setSelectedDay(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
    setSelectedDay(null);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const getDayNames = () => {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  };

  const processDayData = useCallback((dayData) => {
    if (mode === 'activities') {
      return dayData.map(item => {
        const activities = item.activities;
        return (
          <>
            <div className="valuemain-titan">{Object.keys(activities).length} Activities</div>
            {Object.entries(activities).map(([activity, value]) => (
              <div className="value-titan">{value} {activity}</div>
            ))}
          </>
        );
      });
    } else {
      const sumValue = dayData.reduce((acc, item) => acc + item.value, 0);
      const averageValue = dayData.length > 0 ? sumValue / dayData.length : 0;
      const maxValue = dayData.length > 0 ? Math.max(...dayData.map(item => item.value)) : 0;
      const minValue = dayData.length > 0 ? Math.min(...dayData.map(item => item.value)) : 0;

      return (
        <>
          {mode ==='value' && dayData.length !== 0 && <div className="valuemain-titan">{dayData.length} {dayData.length > 1 ? 'Records' : 'Record'}</div>}
          {sumValue !== 0 && <div className="value-titan"> {sumValue} (sum)</div>}
          {averageValue !== 0 && <div className="value-titan"> {averageValue} (Ave)</div>}
          {maxValue !== 0 && <div className="value-titan"> {maxValue} (Max)</div>}
          {minValue !== 0 && <div className="value-titan"> {minValue} (Min)</div>}
        </>
      );
    }
  }, [mode]);

  useEffect(() => {
   
    const updateDayData = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const daysInMonth = getDaysInMonth(year, month);
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const updatedDays = [];

      for (let i = 0; i < firstDayOfMonth; i++) {
        updatedDays.push(<div key={`empty${i}`} className="calendar-day-titan empty"></div>);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const isSelected = selectedDay === day;
        const dayData = data.filter(item => item.date === new Date(year, month, day + 1).toISOString().split('T')[0]);

        let color = '';
        if (dayData.length > 0) {
          const label = dayData[0].label;
          if (colors && colors[label]) {
            color = colors[label];
          } else {
            const min = Math.min(...data.map(item => item.value));
            const max = Math.max(...data.map(item => item.value));
            const normalizedValue = (dayData.reduce((acc, item) => acc + item.value, 0) - min) / (max - min);

            const red = chartColor.red;
            const green = chartColor.green - (chartColor.single ? 0 : Math.round(94 * normalizedValue));
            const blue = chartColor.blue;

            color = `rgb(${red}, ${green}, ${blue})`;
          }
        }

        updatedDays.push(
          <div
            className={`calendar-day-titan ${isSelected ? 'selected' : ''}`}
            style={{ backgroundColor: color, height: `${dayHeight}px`, animationDelay: `${(day + firstDayOfMonth) * 0.05}s` }}
            key={`${day}-${currentDate.toISOString()}`}
            onClick={() => handleDayClick(day)}
          >
    
            <span>{day}</span>
         
           {showLabel&& <div className="scrollable-content-titan">
            {dayData.length > 0 && <div className="vertical-label-titan" style={{backgroundColor: labelColor}}><h1>{dayData[0].label}</h1></div>}
             
            </div>}
            <div className="scrollable-content2-titan">
            {processDayData(dayData)}
            </div>
          </div>
        );

  




      }

      return updatedDays;
    };

    const updatedDays = updateDayData();

    setTimeout(() => {
      setRenderedDays(updatedDays);
      setIsLoading(false); // Stop loading
    }, 1);
  }, [dayHeight,showLabel,chartColor, colors, labelColor, processDayData, selectedDay, currentDate, data]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const currentMonthData = data.filter(item => {
    const date = new Date(item.date);
    return date.getFullYear() === year && date.getMonth() === month;
  });

  const currentMonthSum = currentMonthData.reduce((acc, item) => acc + item.value, 0);
  const currentMonthAverage = currentMonthData.reduce((sum, item) => sum + item.value, 0) / currentMonthData.length;
  const currentMonthMin = Math.min(...currentMonthData.map(item => item.value));
  const currentMonthMax = Math.max(...currentMonthData.map(item => item.value));

  return (
    <div className='maincal' style={{width:chartWidth,height:chartHeight,minHeight:chartHeight}}>
    <div className="calendar-titan" ref={calendarRef} >
      <div className="calendar-header-titan">
        <button onClick={handlePrevMonth}>&lt; Previous month</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={handleNextMonth}>Next month &gt;</button>
      </div>
      <div className="calendar-day-titan-names">
        {getDayNames().map(name => <div key={name} className="calendar-day-titan-name">{name}</div>)}
      </div>
      <div className="calendar-body-titan" style={{minHeight:chartHeight-70}}>
        {isLoading ? <React.Fragment></React.Fragment> : <React.Fragment>{renderedDays}</React.Fragment>}
      </div>
      {showSummery&& <div className="summary-titan">
        <div className='numbers-titan'>
          <div><span className='totali'>Total =</span>{currentMonthSum ? currentMonthSum : 'No data'}</div>
          <div><span className='totali'>Average =</span>{currentMonthAverage ? currentMonthAverage.toFixed(1) : 'No data'}</div>
          <div><span className='totali'>Minimum =</span>{isFinite(currentMonthMin) ? currentMonthMin : 'No data'}</div>
          <div><span className='totali'>Maximum =</span>{isFinite(currentMonthMax) ? currentMonthMax : 'No data'}</div>
        </div>
      </div>}
    </div>
    </div>
  );
};

export default DyCalendar;
