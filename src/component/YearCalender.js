


import {DyYearCalender} from "dynamochart";
import "./StackVertica.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const YearCalender = () => {
  const data = [
    { date: '2023-01-17', value: 10 },
    { date: '2023-02-01', value: 10 },
    { date: '2023-02-5', value: -5 },
    { date: '2023-02-15', value: 2 },
    { date: '2023-02-20', value: 1.5},
    { date: '2023-02-20', value: 2.5},
    { date: '2023-03-01', value: 10 },
    { date: '2023-03-25', value: -5 },
    { date: '2023-03-15', value: 2 },
    { date: '2023-04-10', value: 1.5},
    { date: '2023-04-13', value: 2.5},
    { date: '2023-05-01', value: 10 },
    { date: '2023-05-25', value: -5 },
    { date: '2023-05-15', value: 2 },
    { date: '2023-05-10', value: 1.5},
    { date: '2023-05-23', value: 2.5},
    { date: '2023-06-01', value: 10 },
    { date: '2023-06-25', value: -5 },
    { date: '2023-07-15', value: 2 },
    { date: '2023-08-10', value: 1.5},
    { date: '2023-09-10', value: 2.5},
    { date: '2023-11-25', value: 20.5},
  ];


  const codeString1 = `  import React from 'react'
  import {DyYearCalender} from 'dynamochart';

  const data = [
    { date: '2023-01-17', value: 10 },
    { date: '2023-02-01', value: 10 },
    { date: '2023-02-5', value: -5 },
    { date: '2023-02-15', value: 2 },
    { date: '2023-02-20', value: 1.5},
    { date: '2023-02-20', value: 2.5},
    { date: '2023-03-01', value: 10 },
    { date: '2023-03-25', value: -5 },
    { date: '2023-03-15', value: 2 },
    { date: '2023-04-10', value: 1.5},
    { date: '2023-04-13', value: 2.5},
    { date: '2023-05-01', value: 10 },
    { date: '2023-05-25', value: -5 },
    { date: '2023-05-15', value: 2 },
    { date: '2023-05-10', value: 1.5},
    { date: '2023-05-23', value: 2.5},
    { date: '2023-06-01', value: 10 },
    { date: '2023-06-25', value: -5 },
    { date: '2023-07-15', value: 2 },
    { date: '2023-08-10', value: 1.5},
    { date: '2023-09-10', value: 2.5},
    { date: '2023-11-25', value: 20.5},
  ];
  
    return (
      <div>
      <DyYearCalender 
      data={data}
      chartWidth={1700}
      chartHeight={500}
      calculation="sum"   //average , max, min, sum
      startMonth={1}   ///start from 1
      monthsNumber={12}
      chartPadding={6}   ////0-6 also decimals
      chartColor="#2cfc03"
            />
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1y">
        <DyYearCalender 
            data={data}
            chartWidth={1600}
            chartHeight={500}
            calculation="sum"   //average , max, min, sum
            startMonth={1}   ///start from 1
            monthsNumber={12}
            chartPadding={6}   ////0-6 also decimals
            chartColor="#2cfc03"
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
          <h2>DyYearCalender Component Properties</h2>
            <ul>
              <li><strong>data:</strong> An array of data objects to be displayed on the calendar. Each object typically contains date and value properties.</li>
              <li><strong>chartWidth:</strong> The width of the calendar chart in pixels.</li>
              <li><strong>chartHeight:</strong> The height of the calendar chart in pixels.</li>
              <li><strong>calculation:</strong> A string specifying the type of calculation to perform on the data. Options include 'sum', 'average', 'max', and 'min'.</li>
              <li><strong>startMonth:</strong> The starting month for the calendar, where 1 represents January.</li>
              <li><strong>monthsNumber:</strong> The number of months to display in the calendar.</li>
              <li><strong>chartPadding:</strong> The padding between each month's display, ranging from 0 to 6. Decimal values are accepted.</li>
              <li><strong>chartColor:</strong> A string representing the hex color code used for coloring the calendar.</li>
            </ul>
          </div>



        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a Yearly Calender in the DynamoChart library </span></div>
  
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

export default YearCalender;


