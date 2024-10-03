import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '../components/Navbar';
import AnimatedPage from '../components/Animation';
import img1 from '../assets/Malware_analysis.png'
import img2 from '../assets/File-Transfer-Sharing.webp'
import "../styles/Card.css"
function MyWorks() {
  return (
    <AnimatedPage>
    <div className="felx flex-col w-full h-screen card">
    <Navbar/>
      {/* Spline Scene */}
      <div className="felx items-center cards">
          <div
              className="img1"
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',    // Ensures the image covers the entire div
                backgroundPosition: 'center',  // Centers the image
                height: '500px',            // Example height
                width: '100%',              // Example width
              }}>
              <h1>Malware Analysis</h1>
              <button className="button-57" role="button"><h3>Read more</h3><h3>Click here</h3></button>
          </div>
          <div
              className="img1"
              style={{
                backgroundImage: `url(${img2})`,
                backgroundSize: 'cover',    // Ensures the image covers the entire div
                backgroundPosition: 'center',  // Centers the image
                height: '500px',            // Example height
                width: '100%',              // Example width
              }}>
              <h1>Malware Analysis</h1>
              <button className="button-57" role="button"><h3>Read more</h3><h3>Click here</h3></button>
          </div>
          <div
              className="img1"
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',    // Ensures the image covers the entire div
                backgroundPosition: 'center',  // Centers the image
                height: '500px',            // Example height
                width: '100%',              // Example width
              }}>
              <h1>Malware Analysis</h1>
              <button className="button-57" role="button"><h3>Read more</h3><h3>Click here</h3></button>
          </div>
          <div
              className="img1"
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',    // Ensures the image covers the entire div
                backgroundPosition: 'center',  // Centers the image
                height: '500px',            // Example height
                width: '100%',              // Example width
              }}>
              <h1>Malware Analysis</h1>
              <button className="button-57" role="button"><h3>Read more</h3><h3>Click here</h3></button>
          </div>
      </div>          
    </div>
    </AnimatedPage>
  );
}

export default MyWorks;
