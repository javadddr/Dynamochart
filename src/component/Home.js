import React, { useState } from 'react';
import { debounce } from 'lodash';
import "./Home.css";
import clogo from "../res/paste.png";
import Gifvs from './Gifvs';
import Gifvs1 from './Gifvs1';
import Gifvs2 from './Gifvs2';
import Gifvs3 from './Gifvs3';
import Action from './Action';
const Home = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('Copy to clipboard');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setTooltipText('Copied!');
    setTimeout(() => {
      setTooltipText('Copy to clipboard');
      setShowTooltip(false);
    }, 2000); // Reset tooltip text after 2 seconds
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setTooltipText('Copy to clipboard'); // Reset tooltip when not hovered
  };
  const Tooltip = ({ text }) => {
    return (
      <div className="tooltip">
        {text}
      </div>
    );
  };
     // States to hold unique keys for hover refresh
  const [gifvsKey, setGifvsKey] = useState(Date.now());

  const [gifvs2Key, setGifvs2Key] = useState(Date.now());


  // Function to refresh Gifvs component on hover
  const refreshGifvsOnHover = () => setGifvsKey(Date.now());

  const refreshGifvs2OnHover = debounce(() => {
    setGifvs2Key(Date.now());
  }, 100); // Adjust the delay as necessary
 

  return (
    <div>
    <div className="home">
      <div className='halfhe'>
      <div className='content'> 
      <div className='TitleHero'>
      Elevate Your Data with <span className='d2'>DYNAMO</span><span className='d1'>CHART</span> <div className='spand2'>The Ultimate Charting Solution for <span className='d2'>React!</span> </div>
      </div>
      <br></br>
      <div className='download'>
      <div className="code-snippet1">
          <div className="icon-container">
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
          <div className="icon-container">
            import &#123;YOUR CHART&#125; from 'dynamochart'
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
      
    </div>
    <Gifvs3  />
    <div onMouseEnter={refreshGifvsOnHover}>
        <Gifvs key={gifvsKey} />
      </div>
      
     
  
   
        <Gifvs1  />


      <div onMouseEnter={refreshGifvs2OnHover}>
        <Gifvs2 key={gifvs2Key} />
      </div>

    
        <Action/>
      

    </div>
  );
};

export default Home;
