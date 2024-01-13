import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Action.css';

const Action = () => {
  return (
    <div className="action-container">
      <h2>Ready to send your data on a visualization journey?</h2>
      <div className='codevideo21'>
          <div className='jusiframe1'>
        <iframe 
                width="770" 
                height="478" 
                src="https://www.youtube.com/embed/pD3z9wRR6qU" 
                title="YouTube video player" 
              
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
              </div>
             
          </div>
      <div className='action-itemp'>

      <div className="action-item">
        <h3>Get Started Effortlessly</h3>
        <p>Begin Your Charting Adventure Now. Kickstart your journey with DynamoChart...</p>
        <Link to="/get-started" className="button1">Start Here</Link> {/* Updated */}
      </div>

      <div className="action-item">
        <h3>Explore Our Live Chart Samples</h3>
        <p>See the Magic in Action. Witness the power and versatility of DynamoChart...</p>
        <Link to="/samples" className="button2">View Samples</Link> {/* Updated */}
      </div>


      <div className="action-item">
        <h3>Flexible Pricing for All Needs</h3>
        <p>Find the Perfect Plan for You. Whether you're a solo developer or a large enterprise...</p>
        <Link to="/pricing" className="button4">View Pricing</Link> {/* Updated */}
      </div>
      </div>
    </div>
  );
};

export default Action;
