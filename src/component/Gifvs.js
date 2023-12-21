import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import DyLine from "../chartcomponents/DyLine";

import './Gifvs.css';


const Gifvs = () => {


  const data = [
    { date: "2022-01-01", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [200, 150, 320, 50] },
    { date: "2022-01-02", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [100, 100, 220, 150] },
    { date: "2022-01-03", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [220, 250, 300, 170] },
    { date: "2022-01-04", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [117, 160, 90, 210] },
    { date: "2022-01-05", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [320, 100, 120, 450] },
    { date: "2022-01-06", labels: ['Hub 1', 'Hub 2', 'Hub 3', 'Hub 4'], values: [200, 150, 320, 50] }
  ];
  

  const colors = ['#E15759', '#F28E2C', '#4E79A7','#76B7B2'];


  const codeString = `import React from 'react'
import {DyLine} from 'dynamochart'

const App = () => {
  const data = data
  const colors = colors;

  return (
    <div>
      <DyLine
        data={data}
        colors={colors}
        xAxisTitle="Date"
        yAxisTitle="Number of packages"
        lineShape="curveMonotoneX"
        startFrom={0}
        legendTitle="Hubs"
        chartTitle="Number of packages shipped per Hub"
      />
    </div>
  );
};

export default App;`;

  return (

    <div className='mainsecvsmain'>
      <div  className='jusblurgif'>
      <div className='mainsecvsmain1'><h1>Unparalleled Ease of Use</h1></div>
      <div className='text12'>
      <div className='text11'>
      <h1>Simplify Your Development Process</h1>

Dive into the world of intuitive charting with DynamoChart. Our library is designed with simplicity in mind, ensuring seamless integration into your React applications. Whether you're a seasoned developer or just starting out, you'll find creating charts astonishingly straightforward. Experience the ease of crafting stunning bar, stackbar, calendar, pie, line charts, and more with minimal coding.
      </div>
      </div>
      <div className='mainsecvs'>
        <div className="sampleCode">
          <SyntaxHighlighter language="javascript" >
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div className='samplechartgif'>
        <DyLine
          data={data}
          colors={colors}
          xAxisTitle = "Date"
          yAxisTitle = "Packages"
          lineShape="curveMonotoneX"       
          chartTitle="Number of packages sent"
          chartWidth={1100}
          chartHeight={560}
          legendTitle='Lines'
          lineAreaColor={true}
          areaColorOpacity={0.0}
          linesPadding={0.1}  //0.0 till 1
          chartTemplate="t2"
          dataPoints={5}
          chartBorder={true}
        />
          {/* <img src={gif1} alt="Chart Animation"  className='samplechartgif1'/>  */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Gifvs;
