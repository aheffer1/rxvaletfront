import React from 'react'
import "./PAP.css";
import { pap1, pap2 } from '../../assets';

const PAP = () => {
    return (
      <section id="PAP">
          <div className="right">
              <img className="image1" alt='' src={pap2}></img>
              <img className="image2" alt='' src={pap1}></img>
          </div>
          <div className="left">
            <h1>
                Prescription Assistance Program
            </h1>
            <p>
                Unable to Afford Your Medication? <br /> <br />
                Whether you are uninsured or insured with a high deductible, our Prescription Assistance Program provides prescription savings to thousands of hard-working people just like you.
            </p>
            <button class="button">
                EXPLOPRE PROGRAM
            </button>
          </div>
      </section>
    )
};

  export default PAP;