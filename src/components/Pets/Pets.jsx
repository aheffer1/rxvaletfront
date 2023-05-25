import React from 'react'
import "./Pets.css";
import {  PetLogo, image, Rectangle3 } from '../../assets';

const Pets = () => {
    return (
      <section id="Pets" className="Pets">
        <div className="overlap-group">
            <img className="image" alt="" src={image}></img>
            <div className="background">
                <img src={Rectangle3} alt="" />
            </div>
            <div className="large-logo">
                <img src={PetLogo} alt="" />
            </div>
            <div className="small-logo">
                <img src={PetLogo} alt="" />
            </div>
        </div>
      </section>
    )
};

  export default Pets;