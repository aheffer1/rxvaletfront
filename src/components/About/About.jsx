import React from 'react'
import "./About.css";
import { icon1, icon2, icon3, icon4, icon5, icon6 } from '../../assets';

const About = () => {
    return (
      <section id="about" className="about">
        <div className="left">
            <div className="header">
                Why Choose Rx Valet?
            </div>
            <div className="description">
                Rx Valet is a complete one-stop-shop solution to paying less for high-cost prescription medications!
            </div>
        </div>
        <div className="right">
            <div className="content">
                <div className="home-delivery">
                    Home Delivery
                </div>
                <div className="hd-description">
                    Free Standard Shipping Affordable Express Delivery
                </div>
            </div>
            <div className="icons">
                <img className="icon1" alt='' src={icon1}></img>
                <img className="icon2" alt='' src={icon2}></img>
                <img className="icon3" alt='' src={icon3}></img>
                <img className="icon4" alt='' src={icon4}></img>
                <img className="icon5" alt='' src={icon5}></img>
                <img className="icon6" alt='' src={icon6}></img>
            </div>
        </div>
      </section>
    )
};

  export default About;