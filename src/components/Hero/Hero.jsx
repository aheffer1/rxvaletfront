import React from 'react'
import "./Hero.css";
import Hands from '../../assets/hands.png';
import playImg from '../../assets/play.svg';

const Hero = () => {
    return (
      <section className="hero">
          <div className='container'> 
            <div className='row'>
                <div className="left">
                    <h1>
                        Best Prices on <br />
                        Medications.
                    </h1>
                    <h2>
                        You Choose Your Way to Save!
                    </h2>
                    <div className="frame5">
                        <div className="play">
                            <a href="#">
                                <img className="icon" src={playImg} alt="play" />
                                <div className="ellipse4" />
                            </a>
                        </div>
                        <div className="playtext">
                            <a href="#">See How It Works</a>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={Hands} alt="Hands" />
                </div>
            </div>
        </div>
      </section>
    )
};

  export default Hero;


  /*

  <div className='container'> 
            <div className='row'>
                <div className="left">
                    <h1>
                        Best Prices on <br />
                        Medications.
                    </h1>
                    <h2>
                        You Choose Your Way to Save!
                    </h2>
                    <div className="frame5">
                        <div className="play">
                            <a href="#">
                                <img className="icon" src={playImg} alt="play" />
                                <div className="ellipse4" />
                            </a>
                        </div>
                        <div className="playtext">
                            <a href="#">See How It Works</a>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={Hands} alt="Hands" />
                </div>
            </div>
        </div> */

      /*  <div className="image">
            <img src={Hands} alt="Hands" />
        </div>
        <div className="left">
            <h1>
                Best Prices on <br />
                Medications.
            </h1>
            <h2>
                You Choose Your Way to Save!
            </h2>
            <div className="frame5">
                <div className="play">
                    <a href="#">
                        <div className="icon">
                            <img src={playImg} alt="play" />
                        </div>
                        <div className="ellipse4" />
                    </a>
                </div>
                <div className="playtext">
                    <a href="#">See How It Works</a>
                </div>
            </div>
        </div>*/