import React from 'react'
import "./PAP.css";
import { pap1, pap2 } from '../../assets';

const PAP = () => {
    return (
      <section id="PAP" className="PAP">

            <div className="image1"></div>
            <div className="image2"></div>

          <div className="left">
            <div className="header">
                Prescription Assistance Program
            </div>
            <div className="description">
                Unable to Afford Your Medication? <br /> <br />
                Whether you are uninsured or insured with a high deductible, our Prescription Assistance Program provides prescription savings to thousands of hard-working people just like you.
            </div>
            <div className="spacer"></div>
            <div className="button">
              <div className="button-text">
                EXPLOPRE PROGRAM
              </div>
            </div>
          </div>
      </section>
    )
};

  export default PAP;