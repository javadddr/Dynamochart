

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clogo from "../res/paste.png";
import "./GetStarted.css"
import stepImage from "../res/step.png";
const Tooltip = ({ text }) => (
  <div className="tooltip">{text}</div>
);

const GetStarted = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('Copy to clipboard');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setTooltipText('Copied!');
    setTimeout(() => {
      setTooltipText('Copy to clipboard');
      setShowTooltip(false);
    }, 2000);
  };

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => {
    setShowTooltip(false);
    setTooltipText('Copy to clipboard');
  };

  return (
    <div className="get-started">
     <div className='firststepback'>
      <div className="step">
        <div className='stepotitleget'>
      <img src={stepImage} alt="Step" className="step-image" /> {/* Add this line */}
          <div className='title1get'>First Step: <span>Install the DynamoChart's library</span></div>
          </div>
        <div className='codevideo'>
       
          <div className="code-snippet12">
          <div className="icon-container1">
            npm install dynamochart
            <img 
              src={clogo} 
              alt="icon" 
              className="icon" 
              onClick={() => copyToClipboard('npm install dynamochart')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {showTooltip && <Tooltip text={tooltipText} />}
          </div>
          <div className="icon-container1">
            import &#123; YOUR CHART &#125; from 'dynamochart'
            <img 
              src={clogo} 
              alt="icon" 
              className="icon" 
              onClick={() => copyToClipboard(`import {DyBar} from 'dynamochart'`)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {showTooltip && <Tooltip text={tooltipText} />}
          </div>
          </div>
        </div>
      </div>
      </div>
      {/* Second Step */}
      <div className="step2">
      <div className='stepotitleget'>
      <img src={stepImage} alt="Step" className="step-image" /> {/* Add this line */}
      <div className='title1get'>Second Step: <span>Import The chart components </span></div>
  
      </div>
    
      <div className='codevideo2'>
        
      <div className="code-snippet2">
        <table>
          <thead>
            <tr>
              <th>Chart Name</th>
              <th>Name in DynamoChart's Library</th>
              <th>How to Import</th>
            </tr>
          </thead>
          <tbody>
            {/* Repeat the following <tr> for each row you want to add */}
            <tr>
              <td>Bar Chart</td>
              <td>DyBar</td>
              <td>import &#123; DyBar &#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Horizintal Bar Chart</td>
              <td>DyBarHorizontal</td>
              <td>import &#123;DyBarHorizontal&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Stacked Vertical bar Chart</td>
              <td>DySideStackChart</td>
              <td>import &#123;DySideStackChart&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Stacked Bar Chart</td>
              <td>DyStackChart</td>
              <td>import &#123;DyStackChart&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Stacked Horizintal Bar Chart</td>
              <td>DyPercentageBar</td>
              <td>import &#123;DyPercentageBar&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Line Chart</td>
              <td>DyLine</td>
              <td>import &#123;DyLine&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Line Chart for Date</td>
              <td>DyLineDate</td>
              <td>import &#123;DyLineDate&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Pie Chart</td>
              <td>DyPie</td>
              <td>import &#123;DyPie&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Gauge Chart</td>
              <td>DyGauge</td>
              <td>import &#123;DyGauge&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Funnel Chart</td>
              <td>DyFunnel</td>
              <td>import &#123;DyFunnel&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>HeatMap Chart</td>
              <td>DyHeatMap</td>
              <td>import &#123;DyHeatMap&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Shift Calendar</td>
              <td>DyShiftCalendar</td>
              <td>import &#123;DyShiftCalendar&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Table</td>
              <td>DyTable</td>
              <td>import &#123;DyTable&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Daily Calender</td>
              <td>DyDaycalendar</td>
              <td>import &#123;DyDaycalendar&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Yearly Calender</td>
              <td>DyYearCalender</td>
              <td>import &#123;DyYearCalender&#125; from "dynamochart";</td>
            </tr>
            <tr>
              <td>Monthly Calender</td>
              <td>DyCalendar</td>
              <td>import &#123;DyCalendar&#125; from "dynamochart";</td>
            </tr>
          </tbody>
        </table>
      </div>
          </div>
        </div>
    
      
       {/* Second Step */}
       <div className="step3">
      <div className='stepotitleget'>
      <img src={stepImage} alt="Step" className="step-image" /> {/* Add this line */}
      <div className='title1get'>Third Step: <span>Pay attention to the shape and structure of the data. </span></div>
  
      </div>
      <div className='subsecound'> 
  Visit the <Link to="/samples" className='linkforlearningdd'>  View Sample </Link> page to understand the data structure required for each chart type.
</div>

      <div className='codevideo21'>
          <div className='jusiframe1'>
        <iframe 
                width="850" 
                height="478" 
                src="https://www.youtube.com/embed/8C9QLHS9FkM" 
                title="YouTube video player" 
              
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              </div>
             
          </div>
        </div>
    </div>
  );
};

export default GetStarted;
