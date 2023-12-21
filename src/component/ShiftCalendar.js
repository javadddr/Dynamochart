

import DyShiftCalendar from "../chartcomponents/DyShiftCalendar";

import "./StackVertica.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const ShiftCalendar  = () => {

  const data = [
    { from: '2023-10-17', to: '2023-10-27', label: 'Rynold', reason: 'Sickness'},
    { from: '2023-10-10', to: '2023-10-19', label: 'Javad', reason: 'Sickness'},
    { from: '2023-10-05', to: '2023-10-12', label: 'Shahram', reason: 'Vacation'},
    { from: '2023-10-13', to: '2023-10-22', label: 'John', reason: 'OverHours'},
    { from: '2023-11-02', to: '2023-11-22', label: 'Jerome', reason: 'OverHours'},
    { from: '2023-11-05', to: '2023-11-12', label: 'Lisa', reason: 'Vacation'},
    { from: '2023-11-13', to: '2023-11-22', label: 'Eleiza', reason: 'OverHours'},
    { from: '2023-10-23', to: '2023-10-31', label: 'Salam', reason: 'OverHours'},
    { from: '2023-11-02', to: '2023-11-12', label: 'Salam', reason: 'Business_trip'},
    { from: '2023-11-12', to: '2023-11-22', label: 'Salam', reason: 'Vacation'},
    { from: '2023-11-14', to: '2023-11-14', label: 'Rynold', reason: 'OverHours'},
  ];
  
  const colors = {
    OverHours: '#4E79A7',
    Vacation: '#F28E2C',
    Business_trip: 'yellow',
    Sickness: '#E15759'
  };



  const codeString1 = `  import React from 'react'
  import {DyShiftCalendar} from 'dynamochart';

  const data = [
    { from: '2023-10-17', to: '2023-10-27', label: 'Rynold', reason: 'Sickness'},
    { from: '2023-10-10', to: '2023-10-19', label: 'Javad', reason: 'Sickness'},
    { from: '2023-10-05', to: '2023-10-12', label: 'Shahram', reason: 'Vacation'},
    { from: '2023-10-13', to: '2023-10-22', label: 'John', reason: 'OverHours'},
    { from: '2023-11-02', to: '2023-11-22', label: 'Jerome', reason: 'OverHours'},
    { from: '2023-11-05', to: '2023-11-12', label: 'Lisa', reason: 'Vacation'},
    { from: '2023-11-13', to: '2023-11-22', label: 'Eleiza', reason: 'OverHours'},
    { from: '2023-10-23', to: '2023-10-31', label: 'Salam', reason: 'OverHours'},
    { from: '2023-11-02', to: '2023-11-12', label: 'Salam', reason: 'Business_trip'},
    { from: '2023-11-12', to: '2023-11-22', label: 'Salam', reason: 'Vacation'},
    { from: '2023-11-14', to: '2023-11-14', label: 'Rynold', reason: 'OverHours'},
  ];
  
  const colors = {
    OverHours: '#4E79A7',
    Vacation: '#F28E2C',
    Business_trip: 'yellow',
    Sickness: '#E15759'
  };
  
  
    return (
      <div>
      <DyShiftCalendar 
          data={data}
          colors={colors}
          chartWidth={1700}
          chartHeight={400}
          holidays={{first:0,second:1}} // Sunday (0) and Saturday (6) are weekend days
          holidaysColor= 'rgb(255, 250, 226)'
          theme="t1"
          />
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <DyShiftCalendar 
          data={data}
          colors={colors}
          chartWidth={1700}
          chartHeight={400}
          holidays={{first:0,second:1}} // Sunday (0) and Saturday (6) are weekend days
          holidaysColor= 'rgb(255, 250, 226)'
          theme="t1"
          />
        </div>
        <div className="mainchartsBar2">
        <div class="props-container">
        <h2>Chart Code</h2>
          <div className="sampleCodebar">
         
            <SyntaxHighlighter language="javascript" >
              {codeString1}
            </SyntaxHighlighter>
          </div>
          </div>
        
          <div class="props-container">
          <h2>DyShiftCalendar Component Properties</h2>
  <ul>
    <li><strong>data:</strong> The dataset for the calendar, typically an array of objects representing each data point.</li>
    <li><strong>colors:</strong> Array of color strings used to style different segments or elements in the calendar.</li>
    <li><strong>chartWidth:</strong> Width of the calendar component in pixels.</li>
    <li><strong>chartHeight:</strong> Height of the calendar component in pixels.</li>
    <li>
      <strong>holidays:</strong> An object specifying the weekend days. For example, <code>first:0, second:1</code> indicates that Sunday (0) and Monday (1) are weekend days.
    </li>
    <li><strong>holidaysColor:</strong> The background color (in any CSS color format) used for holiday cells in the calendar.</li>
    <li><strong>theme:</strong> Indicates the theme of the calendar. For example, 't1' could be a specific design theme.</li>
  </ul>
</div>


        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a Shift Calendar Chart in the DynamoChart library </span></div>
  
      </div>
 

      <div className='codevideo2'>
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

export default ShiftCalendar;


