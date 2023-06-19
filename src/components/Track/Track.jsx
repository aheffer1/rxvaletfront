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
            <h1>
              Track your order every step of the way.
            </h1>
            <p>
              At Rx Valet, you'll always be in the know. Get the track of order all through your account.
            </p>
          </div>
        </div>

      </section>
    )
};

  export default Track;