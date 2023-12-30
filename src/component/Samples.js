import React, { useState } from 'react';
import './Samples.css'; // Make sure to create a corresponding CSS file

import Bar from './Bar';
import BarHorizontal from './BarHorizontal';
import StackVertica from './StackVertica';
import Stack from './Stack';
import PercentageBar from './PercentageBar';
import Line from './Line';
import DateLine from './DateLine';
import Pie from './Pie';
import Gauge from './Gauge';
import Funnel from './Funnel';
import HeatMap from './HeatMap';
import ShiftCalendar from './ShiftCalendar';
import Table from './Table';
import Calendar from './Calendar';
import YearCalender from './YearCalender';
import Daycalendar from './Daycalendar';
const pages = [
  { id: 1, name: 'Bar Chart', component: Bar },
  { id: 2, name: 'Horizontal Bar Chart', component: BarHorizontal },
  { id: 3, name: 'Stacked Vertical bar Chart', component: StackVertica },
  { id: 4, name: 'Stacked Bar Chart', component: Stack },
  { id: 5, name: 'Stacked Horizintal Bar Chart', component: PercentageBar },
  { id: 6, name: 'Line Chart', component: Line },
  { id: 7, name: 'Line Chart for Date', component: DateLine },
  { id: 8, name: 'Pie Chart', component: Pie },
  { id: 9, name: 'Gauge Chart', component: Gauge },
  { id: 10, name: 'Funnel Chart', component: Funnel },
  { id: 11, name: 'HeatMap Chart', component: HeatMap },
  { id: 12, name: 'Shift Calendar', component: ShiftCalendar },
  { id: 13, name: 'Table', component: Table },
  { id: 14, name: 'Daily Calender', component: Daycalendar },
  { id: 15, name: 'Yearly Calender', component: YearCalender },
  { id: 16, name: 'Monthly Calender', component: Calendar },
  
];
const SamplePage = ({ activePageId }) => {
  const activePage = pages.find(page => page.id === activePageId);

  return (
    <div>
      
      {activePage && activePage.component ? <activePage.component /> : null}
    </div>
  );
};

const Samples = () => {
  const [activePageId, setActivePageId] = useState(pages[0].id);

  
  return (
    <div>
    <div className="samples-container">
      <div className="sidebar">
        {pages.map(page => (
          <button
            key={page.id}
            className={activePageId === page.id ? 'active' : ''}
            onClick={() => setActivePageId(page.id)}
          >
            {page.name}
          </button>
        ))}
      </div>
      <div className="page-content">
      <SamplePage activePageId={activePageId} />
      </div>
           
      </div>
      <div className="samples-desktop">
        Please view this page on desktop
      </div>
      </div>
    
  );
};

export default Samples;




