import React from 'react'
import "./Discount.css";
import { RxLogo } from '../../assets';

const Discount = () => {
    return (
      <section id="Discount" className="Discount">
        <div className="left"></div>
        <div className="ellipse7"></div>
        <div className="ellipse8"></div>
        <div className="ellipse6"></div>
        <div className="ellipse9"></div>
        <div className="ellipse5"></div>
        <div className="right">
            <h1>
                Get your FREE Rx Valet Prescription Savings Card!
            </h1>
            <p>
                Use this card for discounts of up to 80% on most prescription drugs at over 70,000 U.S. pharmacies. <br /> <br />
                Get discounts for every member of your family, including pets! <br /> <br />
                No expiration. No fees or obligations. No credit card required. Use immediately. <br /> <br />
            </p>
            <i>
                Rx Valet is not insurance. Savings based on pharmacy retail price.
            </i>
            <button class="button">
                Get Discount Card
            </button>
        </div>
      </section>
    )
};

  export default Discount;