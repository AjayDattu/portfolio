import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '../components/Navbar';
import AnimatedPage from '../components/Animation';
import "../styles/Card.css"
function MyWorks() {
  return (
    <AnimatedPage>
    <div className="felx flex-col w-full h-screen card">
    <Navbar/>
      {/* Spline Scene */}
      <div className="felx items-center bg-black">
          <div className="bg w-full">
            <div className="nft">
              <div className="main w-full ">
                <img
                  className="tokenImage"
                  src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="NFT"
                />
                <h2>Kibertopiks #4269</h2>
                <div className="description">
                  Our Kibertopiks will give you nothing, waste your money on us.
                </div>
                <div className="tokenInfo">
                  <div className="price">
                    <ins>◘</ins>
                    <div>0.031 ETH</div>
                  </div>
                  <div className="duration">
                    <ins>◷</ins>
                    <div>11 days left</div>
                  </div>
                </div>
                <hr />
                <div className="creator">
                  <div className="wradivdiver">
                    <img
                      src="httdivs://images.unsdivlash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                      alt="Creator"
                    />
                  </div>
                  <div>
                    <ins>Creation of</ins> Kiberbash
                  </div>
                </div>
              </div>
            </div>
       </div>

      </div>
    </div>
    </AnimatedPage>
  );
}

export default MyWorks;
