import React, { useState } from 'react';
import './DyDaycalendar.css';

const DyDaycalendar = ({ data, colors ,chartWidth,chartHeight,from,to,weekend}) => {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 10, 24)); // Note: Months are 0-indexed in JavaScript


  const isWeekend = (date) => {
    const day = date.getDay();
    return day === weekend[0] || day === weekend[1]; // Sunday (0) and Saturday (6) are weekend days
  };

  // Get a list of all unique names from the data
  const getAllNames = () => {
    const namesSet = new Set();
    data.forEach((entry) => {
     
      namesSet.add(entry.name);
    });
    return Array.from(namesSet);
  };

  const getShiftColor = (shift) => {
    const shiftPeople = data.filter(
      (entry) =>
        entry.shift === shift &&
        new Date(entry.start).getDate() === currentDate.getDate() && // Check if start is on the current day
        new Date(entry.finish).getDate() === currentDate.getDate() // Check if finish is on the current day
    );
  
    const colorEntry = colors.find((entry) => entry.shift === shift);

   
    return shiftPeople.length > 0 ? colorEntry?.color : 'gray'; // Show gray for empty days
  };


  const renderLegend = () => {
    const shiftsSet = new Set(data.map((entry) => entry.shift));
    const shifts = Array.from(shiftsSet);
  
    const shiftCounts = {};
   

    shifts.forEach((shift) => {
      const shiftPeople = data.filter(
        (entry) =>
          entry.shift === shift &&
          new Date(entry.start).getDate() === currentDate.getDate() && // Check if start is on the current day
          new Date(entry.finish).getDate() === currentDate.getDate() // Check if finish is on the current day
      );
     

      shiftCounts[shift] = shiftPeople.length;
     
    });
  
    return (
      <div className="legend-daygh">
        {shifts.map((shift) => (
          <div key={shift} className="legend-daygh-item">
            <div className="legend-daygh-color" style={{ backgroundColor: getShiftColor(shift) }}></div>
            <div className="legend-daygh-text" style={{fontSize:"16px"}}>
              {shift} ({shiftCounts[shift] || 0})
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderCalendar = () => {
    const names = getAllNames();
    const hours = Array.from({ length: to-from }, (_, hour) => from + hour);
    return names.map((name) => (
      <div key={name} className="name-row-daydc">
        <div className="name-daydc">{name}</div>
        <div className="hour-row">
          {hours.map((hour, index) => {
            const matchingEntries = data.filter((entry) => {
              const entryStartHour = new Date(entry.start).getHours() - 1;
              const entryFinishHour = new Date(entry.finish).getHours() - 1;
              return entry.name === name &&
                     entryStartHour <= hour &&
                     (entryFinishHour > hour || (entryFinishHour === hour && new Date(entry.finish).getMinutes() > 0)) &&
                     new Date(entry.start).getDate() === currentDate.getDate() &&
                     new Date(entry.finish).getDate() === currentDate.getDate();
            });
  
            let hourStyle = {};
            if (matchingEntries.length > 0) {
              const entry = matchingEntries[0];
              const startHour = new Date(entry.start).getHours() - 1;
              const finishHour = new Date(entry.finish).getHours() - 1;
              const startMinutes = new Date(entry.start).getMinutes();
              const finishMinutes = new Date(entry.finish).getMinutes();
              const color = getShiftColor(entry.shift);
    
              // Calculate the start and end percentages
              let startPercentage = startHour === hour ? (startMinutes / 60) * 100 : 0;
              let finishPercentage = finishHour === hour ? (finishMinutes / 60) * 100 : 100;
    
              // Adjust gradient to reflect exact start and end times
              hourStyle.background = `linear-gradient(to right, rgba(128, 128, 128, 0.5) ${startPercentage}%, ${color} ${startPercentage}%, ${color} ${finishPercentage}%, rgba(128, 128, 128, 0.5) ${finishPercentage}%)`;
            } else {
              hourStyle.backgroundColor = isWeekend(currentDate) 
                  ? 'rgb(60, 94, 84)' 
                  : 'rgba(128, 128, 128, 0.5)';
              hourStyle.color = 'gray';
            }
  
            const animationDelay = index * 0.1;
  
            return (
              <div
                key={`${currentDate.toISOString()}-${name}-${hour}`}
                className={`hour-daydc${isWeekend(currentDate) ? ' weekend-daydc' : ''}`}
                style={{ 
                  ...hourStyle,
                  animationDelay: `${animationDelay}s`,
                  width: `${(chartWidth * 0.9) / (to-from)}px`,
                }}
              >
                {hour}
              </div>
            );
          })}
        </div>
      </div>
    ));
  };
  
  
  
  
  const handlePrevDay = () => {
    const previousDay = new Date(currentDate);
    previousDay.setDate(currentDate.getDate() - 1);
    setCurrentDate(previousDay);
  };

  const handleNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDay);
  };

  return (
    <div className="day-calendar-daydc" style={{ width: chartWidth, height: chartHeight }}>
      <div className="calendar-header-daydc">
        <button className="button-85" onClick={handlePrevDay}>Previous Day</button>
        <h2>{currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
        <button className="button-85" onClick={handleNextDay}>Next Day</button>
      </div>
      {renderLegend()}
      <div className="calendar-body-daydc">
        
        {renderCalendar()}
      </div>
    </div>
  );
};

export default DyDaycalendar;
