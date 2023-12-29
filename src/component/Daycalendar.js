

import {DyDaycalendar} from "dynamochart";

import "./StackVertica.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const Daycalendar = () => {

  const data = [
    {
      start: '2023-11-24T08:30:00.000Z',
      finish: '2023-11-24T14:50:00.000Z',
      name: 'book',
      shift: 'Morning',
    },
    {
      start: '2023-11-24T10:00:00.000Z',
      finish: '2023-11-24T12:30:00.000Z',
      name: 'Javad',
      shift: 'Morning',
    },
    {
      start: '2023-11-24T08:00:00.000Z',
      finish: '2023-11-24T16:30:00.000Z',
      name: 'Shahram',
      shift: 'Part-Time',
    },
    {
      start: '2023-11-24T12:30:00.000Z',
      finish: '2023-11-24T17:30:00.000Z',
      name: 'John',
      shift: 'Afternoon',
    },
    {
      start: '2023-11-24T08:00:00.000Z',
      finish: '2023-11-24T14:30:00.000Z',
      name: 'Lisa',
      shift: 'Morning',
    },
    {
      start: '2023-11-24T10:00:00.000Z',
      finish: '2023-11-24T12:30:00.000Z',
      name: 'MoNo',
      shift: 'Morning',
    },
    {
      start: '2023-11-24T08:00:00.000Z',
      finish: '2023-11-24T16:30:00.000Z',
      name: 'Viorel',
      shift: 'Part-Time',
    },
    {
      start: '2023-11-24T12:30:00.000Z',
      finish: '2023-11-24T17:30:00.000Z',
      name: 'Tim',
      shift: 'Afternoon',
    },
  ];
  
  const colors = [
  
    {
     
      color: '#E15759',
      shift: 'Morning',
    },
    {
   
      color: '#F28E2C',
      shift: 'Part-Time',
    },
    {
     
      color: '#4E79A7',
      shift: 'Afternoon',
    },
  ];
  


  const codeString1 = `  import React from 'react'
  import {DyDaycalendar} from 'dynamochart';

  const App = () => {
  
    const data = [
      {
        start: '2023-11-24T08:30:00.000Z',
        finish: '2023-11-24T14:50:00.000Z',
        name: 'book',
        shift: 'Morning',
      },
      {
        start: '2023-11-24T10:00:00.000Z',
        finish: '2023-11-24T12:30:00.000Z',
        name: 'Javad',
        shift: 'Morning',
      },
      {
        start: '2023-11-24T08:00:00.000Z',
        finish: '2023-11-24T16:30:00.000Z',
        name: 'Shahram',
        shift: 'Part-Time',
      },
      {
        start: '2023-11-24T12:30:00.000Z',
        finish: '2023-11-24T17:30:00.000Z',
        name: 'John',
        shift: 'Afternoon',
      },
      {
        start: '2023-11-24T08:00:00.000Z',
        finish: '2023-11-24T14:30:00.000Z',
        name: 'Lisa',
        shift: 'Morning',
      },
      {
        start: '2023-11-24T10:00:00.000Z',
        finish: '2023-11-24T12:30:00.000Z',
        name: 'MoNo',
        shift: 'Morning',
      },
      {
        start: '2023-11-24T08:00:00.000Z',
        finish: '2023-11-24T16:30:00.000Z',
        name: 'Viorel',
        shift: 'Part-Time',
      },
      {
        start: '2023-11-24T12:30:00.000Z',
        finish: '2023-11-24T17:30:00.000Z',
        name: 'Tim',
        shift: 'Afternoon',
      },
    ];
    
    const colors = [
    
      {
       
        color: '#E15759',
        shift: 'Morning',
      },
      {
     
        color: '#F28E2C',
        shift: 'Part-Time',
      },
      {
       
        color: '#4E79A7',
        shift: 'Afternoon',
      },
    ];
    
  
    return (
      <div>
      <DyDaycalendar 
        data={data} 
        colors={colors}
        chartWidth={1500}
        chartHeight={550}
        from={0}
        to={24}
        weekend={[0,6]}// Sunday (0) and Saturday (6) are weekend days
        />
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <DyDaycalendar 
            data={data} 
            colors={colors}
            chartWidth={1500}
            chartHeight={550}
            from={0}
            to={24}
            weekend={[0,6]}// Sunday (0) and Saturday (6) are weekend days
            
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
          <h2>DyDaycalendar Component Properties</h2>
  <ul>
    <li><strong>data:</strong> An array of data objects representing shifts or events. Each object typically includes properties like name, start and finish times, and shift type.</li>
    <li><strong>colors:</strong> An array of color codes used to differentiate between different types of shifts or events in the calendar.</li>
    <li><strong>chartWidth:</strong> The width of the calendar chart in pixels.</li>
    <li><strong>chartHeight:</strong> The height of the calendar chart in pixels.</li>
    <li><strong>from:</strong> The starting hour of the day for the calendar (0 represents midnight).</li>
    <li><strong>to:</strong> The ending hour of the day for the calendar (24 represents midnight of the following day).</li>
    <li><strong>weekend:</strong> An array indicating which days of the week are considered weekends. For example, [0, 6] represents Sunday (0) and Saturday (6) as weekends.</li>
  </ul>
  
</div>



        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a Daily Calender in the DynamoChart library </span></div>
  
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

export default Daycalendar;


