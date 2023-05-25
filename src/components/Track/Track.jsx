import React from 'react'
import "./Track.css";
import { scribble, receipt, receipt2 } from '../../assets';

const Track = () => {
    return (
      <section id="track" className="track">
        <div className="wrapper">

            <div className="scribble">
              <img src={scribble} alt="" />
            </div>
            <div className="receipt">
              <img src={receipt} alt="" />
            </div>
            <div className="receipt2">
              <img src={receipt2} alt="" />
            </div>


          <div className="left">
            <div className="header">
              Track your order every step of the way.
            </div>
            <div className="description">
              At Rx Valet, you'll always be in the know. Get the track of order all through your account.
            </div>
          </div>
        </div>

      </section>
    )
};

  export default Track;