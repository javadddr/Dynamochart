

import {DyCalendar} from "dynamochart";

import "./Bar.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const Calendar = () => {

  const data = [
    { date: '2023-11-01', value: 10,label:'Mia',activities:{Sport:1,Studying:2,Family_Time:5,work:8,just:7,jusddt:7} },
    { date: '2023-11-25', value: -5,label:'Luna',activities:{Sport:0,Studying:2,Family_Time:4,work:8} },
    { date: '2023-11-15', value: 2 ,label:'Daisy',activities:{Sport:0.5,Studying:3,Family_Time:6,work:8}},
    { date: '2023-11-10', value: 1.5,label:'Iris',activities:{Sport:1,Studying:0,Family_Time:2,work:8}},
    { date: '2023-11-13', value: 2.5 ,label:'Isabella',activities:{Sport:2,Studying:1,Family_Time:3,work:8}},
    { date: '2023-11-24', value: 5,label:'Daisy',activities:{Sport:0,Studying:2,Family_Time:7,work:8}},

  ];

  const colors = {
    Mia: '#c3f4ab',
    Luna: '#e3f781',
    Iris: '#f0f8ff',
    Daisy: 'pink',
    Isabella: 'pink',
   
  };



  const codeString1 = `  import React from 'react'
  import {DyCalendar} from 'dynamochart';

  const App = () => {
  
    const data = [
      { date: '2023-11-01', value: 10,label:'Mia',activities:{Sport:1,Studying:2,Family_Time:5,work:8,just:7,jusddt:7} },
      { date: '2023-11-25', value: -5,label:'Luna',activities:{Sport:0,Studying:2,Family_Time:4,work:8} },
      { date: '2023-11-15', value: 2 ,label:'Daisy',activities:{Sport:0.5,Studying:3,Family_Time:6,work:8}},
      { date: '2023-11-10', value: 1.5,label:'Iris',activities:{Sport:1,Studying:0,Family_Time:2,work:8}},
      { date: '2023-11-13', value: 2.5 ,label:'Isabella',activities:{Sport:2,Studying:1,Family_Time:3,work:8}},
      { date: '2023-11-24', value: 5,label:'Daisy',activities:{Sport:0,Studying:2,Family_Time:7,work:8}},
  
    ];
  
    const colors = {
      Mia: '#c3f4ab',
      Luna: '#e3f781',
      Iris: '#f0f8ff',
      Daisy: 'pink',
      Isabella: 'pink',
     
    };
  
    return (
      <div>
        <DyCalendar 
        data={data}
        colors={colors}    ///either use colors or chartColor
        // chartColor={{red:244,green:238,blue:244,singel:false}}   
        mode="value" ///value  and activities
        showLabel={true}
        labelColor="#ffa8a8"
        showSummery={false}
        chartWidth={1600}
        chartHeight={650}
        />
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <div className="mainchartsBaroooho">
        <DyCalendar 
      data={data}
      colors={colors}    ///either use colors or chartColor
      chartColor={{red:244,green:238,blue:244,singel:false}}   
      mode="value" ///value  and activities
      showAll="all"   //all,Sum,Ave,Max,Min
      showLabel={true}
      labelColor="#ffa8a8"
      showSummery={true}
      chartWidth={1100}
      chartHeight={600}
      defaultMonth="november-2023"
      />

    </div>
     

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
          <h2>DyCalendar Component Properties</h2>
            <ul>
              <li><strong>data:</strong> An array of objects representing the calendar data. Each object should contain a date and other relevant information.</li>
              <li><strong>colors:</strong> An optional object to specify colors for different data categories. Alternatively, you can use <strong>chartColor</strong> to set a single color.</li>
              <li><strong>mode:</strong> A string value to determine the mode of the calendar, such as 'value' or 'activities'.</li>
              <li><strong>showLabel:</strong> A boolean to determine whether to show labels on calendar days.</li>
              <li><strong>labelColor:</strong> A string representing the color of the labels (used when <strong>showLabel</strong> is true).</li>
              <li><strong>showSummery:</strong> A boolean to toggle the display of a summary section with aggregate data like total, average, minimum, and maximum values.</li>
              <li><strong>chartWidth:</strong> The width of the calendar chart in pixels.</li>
              <li><strong>chartHeight:</strong> The height of the calendar chart in pixels.</li>
              <li><strong>chartColor:</strong> An object defining a single color for the calendar, used when <strong>colors</strong> is not provided.</li>
            </ul>
          </div>



        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a Monthly Calender  in the DynamoChart library </span></div>
  
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

export default Calendar;


