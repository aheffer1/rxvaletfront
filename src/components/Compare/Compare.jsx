import React from 'react'
import "./Compare.css";
import { RxLogo, check, minus } from '../../assets';

const Compare = () => {
    return (
      <section id="compare">
        <div className="container">
          <div className="center">
              <h2>
                  Benefits with <em>Rx Valet</em>
              </h2>
              <div className="pharmecies-text">
                  Rx Valet is accepted at all of these pharmacies and many more!
              </div>
              <table>
                <tr>
                  <th>BENEFITS</th>
                  <th>Local Pharmacy</th>
                  <th>Rx Valet</th>
                </tr>
                <tr>
                  <td>Accepts most insurance plans</td>
                  <td><img src={check} alt="" /></td>
                  <td><img src={check} alt="" /></td>
                </tr>
                <tr>
                  <td>Reviewed by pharmacists</td>
                  <td><img src={check} alt="" /></td>
                  <td><img src={check} alt="" /></td>
                </tr>
                <tr>
                  <td>Automatic refills</td>
                  <td><img src={check} alt="" /></td>
                  <td><img src={check} alt="" /></td>
                </tr>
                <tr>
                  <td>Available to you 24/7</td>
                  <td><img src={minus} alt="" /></td>
                  <td><img src={check} alt="" /></td>
                </tr>
                <tr>
                  <td>Shows prices upfront</td>
                  <td><img src={minus} alt="" /></td>
                  <td><img src={check} alt="" /></td>
                </tr>
                <tr>
                  <td>Delivers to your door</td>
                  <td><img src={minus} alt="" /></td>
                  <td><img src={check} alt="" /></td>
                </tr>
                <tr>
                  <td>Meds are as low as $1/month</td>
                  <td><img src={minus} alt="" /></td>
                  <td><img src={check} alt="" /></td>
                </tr>
                <tr>
                  <td>Offers 6-month supply</td>
                  <td><img src={minus} alt="" /></td>
                  <td><img src={check} alt="" /></td>
                </tr>
              </table>
          <div className="pharmecies"></div>
          </div>
        </div>
      </section>
    )
};

  export default Compare;