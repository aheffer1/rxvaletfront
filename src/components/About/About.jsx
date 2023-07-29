import React from 'react'
import "./About.css";
import { icon1, icon2, icon3, icon4, icon5, icon6 } from '../../assets';

const About = () => {
    return (
      <section id="about">
        <div className="container">
            <div className="row">
                <div className="left">
                    <h2>
                        Why Choose Rx Valet?
                    </h2>
                    <p>
                        Rx Valet is a complete one-stop-shop solution to paying less for high-cost prescription medications!
                    </p>
                </div>
                <div className="right">
                    <div className="icons">
                        <img className="icon1" alt='' src={icon1}></img>
                        <img className="icon2" alt='' src={icon2}></img>
                        <img className="icon3" alt='' src={icon3}></img>
                        <img className="icon4" alt='' src={icon4}></img>
                        <img className="icon5" alt='' src={icon5}></img>
                        <img className="icon6" alt='' src={icon6}></img>
                    </div>
                    <div className="content">
                        <h3>
                            Home Delivery
                        </h3>
                        <i>
                            Free Standard Shipping Affordable Express Delivery
                        </i>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
};

  export default About;