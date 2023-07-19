import React from 'react'
import "./90day.css";
import image1 from '../../assets/90day2.png';
import image2 from '../../assets/90day1.png';

const D90 = () => {
    return (
      <section id="d90">
        <div className="container">
              <div className="left">
                <div className="rectangle"></div>
                <img className="image1" alt='' src={image1}></img>
                <img className="image2" alt='' src={image2}></img>
              </div>

            <div className="right">
              <h1>
                  Get a 90 Day supply of your Medications!
              </h1>
              <p> 
                  Avoid the pharmacy lines with this valuable benefit! In many cases, a 90-day supply through Home Delivery can be less than a 30-day supply at a local pharmacy. <br /> <br />
                  What a fantastic choice for those on recurring medications!
              </p>
              <button class="button">
                Start Purchasing Today
              </button>
            </div>
         </div>
      </section>
    )
};

  export default D90;