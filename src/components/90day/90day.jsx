import React from 'react'
import "./90day.css";
import { d901, d902 } from '../../assets';

const D90 = () => {
    return (
      <section id="d90" className="d90">
            <div className="rectangle"></div>
            <div className="image1"></div>
            <div className="image2"></div>

          <div className="right">
            <div className="header">
                Get a 90 Day supply of your Medications!
            </div>
            <div className="description"> 
                Avoid the pharmacy lines with this valuable benefit! In many cases, a 90-day supply through Home Delivery can be less than a 30-day supply at a local pharmacy. <br /> <br />
                What a fantastic choice for those on recurring medications!
            </div>
            <div className="spacer"></div>
            <div className="button">
              <div className="button-text">
                Start Purchasing today
              </div>
            </div>
          </div>

      </section>
    )
};

  export default D90;