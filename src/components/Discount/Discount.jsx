import React from 'react'
import "./Discount.css";
import { RxLogo } from '../../assets';
import LogoImg from '../../assets/Logo.png';

const Discount = () => {
    return (
      <section id="discount">
        <div className="container">
        <div className="row">
            <div className="left">
                <div className="ellipse7"></div>
                <div className="ellipse8"></div>
                <div className="ellipse6"></div>
                <div className="ellipse9"></div>
                <div className="ellipse5"></div>
                <div className="logo">
                    <img src={LogoImg} alt="RxValet Logo" />
                </div>
                <h3>
                    PERSCRIPTION SAVINGS CARD
                </h3>
                <div className="details">
                    <div className="frame4">
                        <div className="part">
                            <div className="section" style={{width : '130px'}}>
                                Member ID :
                            </div>
                            <div className="ide">
                                AVCS56789
                            </div>
                        </div>
                        <div className="part">
                            <div className="section" style={{width : '61px'}}>
                                BIN : 
                            </div>
                            <div className="ide">
                                006053
                            </div>
                        </div>
                    </div>

                    <div className="frame4">
                        <div className="part">
                            <div className="section" style={{width : '130px'}}>
                                PCN:
                            </div>
                            <div className="ide">
                                MSC
                            </div>
                        </div>
                        <div className="part">
                            <div className="section" style={{width : '87px'}}>
                                Group: 
                            </div>
                            <div className="ide">
                                2009
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-bottom">
                    Customer Care Phone #: 855-798-2538<br/>
                    Discount ONLY – NOT INSURANCE<br/>
                    Please present this card at the Pharmacy with a valid prescription.<br/>
                </div>
            </div>
            <div className="right">
                <h2>
                    Get your FREE Rx Valet Prescription Savings Card!
                </h2>
                <p>
                    Use this card for discounts of up to 80% on most prescription drugs at over 70,000 U.S. pharmacies. <br /> <br />
                    Get discounts for every member of your family, including pets! <br /> <br />
                    No expiration. No fees or obligations. No credit card required. Use immediately. <br /> <br />
                </p>
                <i>
                    Rx Valet is not insurance. Savings based on pharmacy retail price.
                </i>
                <div className="line"></div>
                <button class="button">
                    Get Discount Card
                </button>
            </div>
            </div>
        </div>
      </section>
    )
};

  export default Discount;