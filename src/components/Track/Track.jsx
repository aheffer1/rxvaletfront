import React from 'react'
import "./Track.css";
import { scribble, receipt, receipt2 } from '../../assets';

const Track = () => {
    return (
      <section id="track">
        <div className="container">
        <div className="row">
            <div className="left">
                <h2>
                  Track your order every step of the way.
                </h2>
                <p>
                  At Rx Valet, you'll always be in the know. Get the track of order all through your account.
                </p>
            </div>
            <div className="right">
                  <img src={scribble} className="scribble" alt="" />
                  <img src={receipt} className="receipt" alt="" />
                  <img src={receipt2} className="receipt2" alt="" />
            </div>
          </div>
          </div>
      </section>
    )
};

  export default Track;