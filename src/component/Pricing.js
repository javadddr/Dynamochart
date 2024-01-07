import React from 'react';
import "./Pricing.css"
import { Link } from 'react-router-dom';
import dido from "../res/checkmark.png"



const Pricing = () => {

  
  return (
    <div className='pmain'>
      <div className='pmain2'>
     <div className='cards'>
        <div className='card1'>
          <div className='topnote'>
            <h1>Free</h1>
            <h><span>No Billing</span></h>
            </div>
          <div className='topnote2'>
            <p>Just for Development and testing </p>
           
          </div>
          <div className='actpri'>
          
          </div>
          <div className='undercard'>
            <div className='checkandtext'>
              <img className='iconprice' src={dido} alt="Checkmark Icon" /> <h className='checkm'>16 Charts </h>
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Ultimate requests</h>

            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Minimal coding</h>
           
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Dark Mode and  Light Mode</h>
     
            </div>
           
      
          </div>
          <div className='forfree1'>
  <Link to="/get-started">
    <button className='linkmainsdrr'>Get Started</button>
  </Link>
</div>
          <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
        </div>
        <div className='card1'>
         
          <div className='topnote'>
            <h1>Standard</h1>
            <h><span> &#36; 299</span></h>
            </div>
            <div className='topnote2'>
            <p>For One Year </p>
          
          </div>
          <div className='actpri'>
           
          </div>

       
          <div className='undercard'>
          <div className='checkandtext'>
              <img className='iconprice' src={dido} alt="Checkmark Icon" /> <h className='checkm'>16 Charts </h>
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Ultimate requests</h>

            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Minimal coding</h>
           
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Dark Mode and Light Mode</h>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Customer support </h>
           
            </div>
       
          </div>
          <div className='forfree'>
            <a href="https://billing.globalpackagetracker.com/login" target="_blank" rel="noopener noreferrer">
              <button className='linkmainsdex'>Buy Now</button>
            </a>
          </div>
          <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
        </div>
        <div className='card1'>
        <div className='topnote'>
            <h1>Premium</h1>
            <h><span> &#36; 1199</span></h>
            </div>
            <div className='topnote21'>
            <p>For 3 years </p>

          </div>
          <div className='actpri1'>
          
          </div>
       
          <div className='undercard'>
          <div className='checkandtext'>
              <img className='iconprice' src={dido} alt="Checkmark Icon" /> <h className='checkm'>16 Charts </h>
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Ultimate requests</h>

            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Minimal coding</h>
           
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Dark Mode and Light Mode</h>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Customer support </h>
           
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'>Access to source code and CSS</h>
            
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <h className='checkm'> Accsess to new charts</h>
            
            </div>
          
          
        
          </div>
          <div className='forfree'>
            <a href="https://billing.globalpackagetracker.com/login" target="_blank" rel="noopener noreferrer">
              <button className='linkmainsd'>Buy Now</button>
            </a>
          </div>
          <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
        </div>
        <div className='card1'>
        <div className='topnote'>
            <h1>Custom</h1>
            <h><span> &#36;70 - &#36;150</span></h>
            </div>
       
          <h5>Order custom charts and dashboards</h5>
          <div className='tf'>
        <p>New chart owned by DynamoChart:<br></br> <span>€70</span></p>
              

          </div>
          <div className='tf'>
          <p>New chart owned by you: <br></br><span>€150</span></p>
              </div>
              <div className='forfree1'>
  <Link to="/contact">
    <button className='linkmainsdrr'>Contact us</button>
  </Link>
</div>
                <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
        
        </div>
       
        
      </div>
      </div>
    </div>
  );
};

export default Pricing;