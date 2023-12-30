
import {DyFunnel} from "dynamochart";

import "./StackVertica.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const Funnel = () => {
  const data = [
    { name: 'Impressions', values: { Facebook: 1500, Google: 500, Insta: 700, Email: 250, Tiktok: 50 }, },
    { name: 'Clicked', values: { Facebook: 1000, Google: 300, Insta: 500, Email: 150, Tiktok: 50 }, },
    { name: 'Pricing', values: { Facebook: 500, Google: 185, Insta: 200, Email: 50, Tiktok: 50 }, },
    { name: 'Add_to_cart', values: { Facebook: 120, Google: 30, Insta: 20, Email: 20, Tiktok: 10 }, },
    { name: 'Purchased', values: { Facebook: 20, Google: 12, Insta: 15, Email: 5, Tiktok: 5 }, },

  ];
  const colors = [
    {
      Facebook: '#E15759',
      Google: '#F28E2C',
      Insta: '#4E79A7',
      Email: '#76B7B2',
      Tiktok: '#e9b0ef',
    }
  ];
  
 


  const codeString1 = `  import React from 'react'
  import {DyFunnel} from 'dynamochart';

  const App = () => {
  
    const data = [
      { name: 'Impressions', values: { Facebook: 1500, Google: 500, Insta: 700, Email: 250, Tiktok: 50 }, },
      { name: 'Clicked', values: { Facebook: 1000, Google: 300, Insta: 500, Email: 150, Tiktok: 50 }, },
      { name: 'Pricing', values: { Facebook: 500, Google: 185, Insta: 200, Email: 50, Tiktok: 50 }, },
      { name: 'Add_to_cart', values: { Facebook: 120, Google: 30, Insta: 20, Email: 20, Tiktok: 10 }, },
      { name: 'Purchased', values: { Facebook: 20, Google: 12, Insta: 15, Email: 5, Tiktok: 5 }, },
  
    ];
    const colors = [
      {
        Facebook: '#E15759',
        Google: '#F28E2C',
        Insta: '#4E79A7',
        Email: '#76B7B2',
        Tiktok: '#e9b0ef',
      }
    ];
  
    return (
      <div>
      <DyFunnel
        data={data}
        colors={colors}
        showLegend={true}
        funnelValues={true}
        chartWiedth = {800}
        chartHeight = {420}
        chartTitle="Marketing Funnel Chart"
        chartTitleFontSize={22}
        showSmall={7}
        chartDecimals={0}
        chartTemplate="t2"
    />  
      </div>
    );
  };
  
  export default App;`;


  return (
    <div className="mainchartsBar">
        <div className="mainchartsBar1">
        <DyFunnel
       data={data}
       colors={colors}
       showLegend={true}
       funnelValues={true}
       chartWiedth = {1100}
       chartHeight = {520}
       chartTitle="Marketing Funnel Chart"
       chartTitleFontSize={22}
       showSmall={7}
       chartDecimals={0}
       chartTemplate="t1"
       />

<DyFunnel
       data={data}
       colors={colors}
       showLegend={true}
       funnelValues={true}
       chartWiedth = {1100}
       chartHeight = {520}
       chartTitle="Marketing Funnel Chart"
       chartTitleFontSize={22}
       showSmall={7}
       chartDecimals={0}
       chartTemplate="t2"
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
    <h2>Chart Configuration Properties</h2>
    <ul>
        <li><strong>data:</strong> Dataset for the funnel chart, typically an array of objects with value and label properties.</li>
        <li><strong>colors:</strong> Array of color strings used to style different segments of the funnel.</li>
        <li><strong>showLegend:</strong> Boolean to show or hide the legend associated with the funnel chart.</li>
        <li><strong>funnelValues:</strong> Boolean to determine whether to show values inside the funnel segments.</li>
        <li><strong>chartWidth:</strong> Width of the entire funnel chart in pixels.</li>
        <li><strong>chartHeight:</strong> Height of the entire funnel chart in pixels.</li>
        <li><strong>chartTitle:</strong> Title displayed on the funnel chart.</li>
        <li><strong>chartTitleFontSize:</strong> Font size for the chart title.</li>
        <li><strong>showSmall:</strong> Threshold value that determines the minimum percentage for displaying values inside the funnel segments.</li>
        <li><strong>chartDecimals:</strong> Number of decimal places to round the percentages shown in the funnel chart.</li>
        <li><strong>chartTemplate:</strong> Specifies the theme template for the chart's appearance.</li>
    </ul>
</div>




        </div>
        <div className="step">
      <div className='stepotitleget'>
    
      <div className='title1get'> <span>Tutorial on how to create a Funnel Chart in the DynamoChart library </span></div>
  
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

export default Funnel;


