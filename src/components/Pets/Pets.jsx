import React from 'react'
import "./Pets.css";
import {  PetLogo, PetLogo2, image, Rectangle3 } from '../../assets';

const Pets = () => {
    return (
      <section id="Pets" className="Pets">
        <div className="overlap-group">
            <img className="image" alt="" src={image}></img>
            <div className="background">
                <img src={Rectangle3} alt="" />
            </div>
            <div className="large-logo">
                <img src={PetLogo2} alt="" />
            </div>
            <div className="small-logo">
                <img src={PetLogo} alt="" />
            </div>
            <div className="center">
              <div className="header">
                We care for your Pets too!
              </div>
              <div className="description">
                Now your fast and furry friends have a benefit too! <br /> <br />
                Rx Valet For Pets is included with your membership at no additional cost. Just login with your Rx Valet username and password and check out our competitive retail and home delivery prices for your pets’ needs.
              </div>
              <div className="spacer"></div>
              <div className="button">
                <div className="button-text">
                  SEARCH PET MEDS
                </div>
              </div>
            </div>
        </div>
      </section>
    )
};

  export default Pets;