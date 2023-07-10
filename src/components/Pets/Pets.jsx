import React from 'react'
import "./Pets.css";
import {  PetLogo, PetLogo2, image, Rectangle3 } from '../../assets';

const Pets = () => {
    return (
      <section id="Pets">
            <div className="image">
              <div className="background">
                <div className="center">
                        <img className="small-logo" src={PetLogo} alt="" />
                    <h1>
                      We care for your Pets too!
                    </h1>
                    <p>
                      Now your fast and furry friends have a benefit too! <br /> <br />
                      Rx Valet For Pets is included with your membership at no additional cost. Just login with your Rx Valet username and password and check out our competitive retail and home delivery prices for your pets’ needs.
                    </p>
                    <button class="button">
                        SEARCH PET MEDS
                    </button>
                </div>

              </div>
              <img classsName="large-logo" src={PetLogo2} alt="" />
            </div>
      </section>
    )
};

  export default Pets;