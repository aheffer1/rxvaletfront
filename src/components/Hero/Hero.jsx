import React from 'react'
import "./Hero.css";

const Hero = () => {
    return (
      <section id="Hero" className="Hero">
        <div className="left">
            <h1>
                Best Prices on <br />
                Medications.
            </h1>
            <p>
                You Choose Your Way to Save!
            </p>
            <div className="frame5">
                <div className="play">
                    <div className="playtext">
                        See How It Works
                    </div>
                </div>
            </div>
        </div>
        <div className="icon"></div>
        <div className="ellipse4"></div>
        <div className="image"></div>
      </section>
    )
};

  export default Hero;