import React from 'react'
import "./Compare.css";
import { RxLogo } from '../../assets';

const Compare = () => {
    return (
      <section id="compare" className="compare">
        <div className="center">
            <div className="header">
                Benefits with Rx Valet
            </div>
            <div className="pharmecies-text">
                Rx Valet is accepted at all of these pharmacies and many more!
            </div>
            <div className="table"></div>
        <div className="pharmecies"></div>
        </div>
      </section>
    )
};

  export default Compare;