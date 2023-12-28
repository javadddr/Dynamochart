import React from 'react';
import {DyFunnel} from "dynamochart";


import './Gifvs2.css';


const Gifvs2 = () => {
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

    <div className='mainsecvsmainp'>
      <div  className='jusblurgifp'>
      <div className='mainsecvsmain3'><h1>Unique data analysis and <br></br>visualisation features</h1></div>
      <div className='text12'>
      <div className='text11'>
      <h1>Discover New Perspectives <br></br>in Data Visualization</h1>

      <div className='text11oo1'>DynamoChart goes beyond conventional charting. We offer unique features for data analysis and visualization that set your applications apart.</div><div className='text11002'> Uncover hidden insights with our advanced analytical tools and present them in visually appealing, innovative formats. Transform your data into compelling stories with our versatile and unique charting options.</div>
      </div>
      </div>
      <div className='mainsecvs'>
        <div className="samplechartgifrr">
         
        <DyFunnel
          data={data}
          colors={colors}
          showLegend={true}
          funnelValues={false}
          chartWiedth = {370}
          chartHeight = {400}
          chartTitle="Marketing Funnel Chart"
          chartTitleFontSize={22}
          showSmall={7}
          chartDecimals={0}
          chartTemplate="t2"
       />
       
      
    
    
        </div>
      </div>
      </div>
    </div>
  );
};

export default Gifvs2;
