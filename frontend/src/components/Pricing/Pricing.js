import React, { Component } from 'react';

class Pricing extends Component {
  render() {
    return (
      <section id="pricing-area" className="section-padding overlay">
    <div className="container">
      <div className="row">
        {/* Section Title Start */}
        <div className="col-lg-12">
          <div className="section-title  text-center">
            <h2>Only quality for clients</h2>
            <span className="title-line"><i className="fa fa-car" /></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        {/* Section Title End */}
      </div>
      {/* Pricing Table Conatent Start */}
      <div className="row">
        {/* Single Pricing Table */}
        <div className="col-lg-4 col-md-6 text-center">
          <div className="single-pricing-table">
            <h3>BUSINESS</h3>
            <h2>$ 55.99</h2>
            <h5>PER MONTH</h5>
            <ul className="package-list">
              <li>FREE VEHICLE DELIVERY</li>
              <li>WEDDINGS CELEBRATIONS</li>
              <li>FULL INSURANCE INCLUDED</li>
              <li>TRANSPORT ABROAD</li>
              <li>ALL INCLUSIVE MINI BAR</li>
              <li>CHAUFFER INCLUDED IN PRICE</li>
            </ul>
          </div>
        </div>
        {/* Single Pricing Table */}
        {/* Single Pricing Table */}
        <div className="col-lg-4 col-md-6 text-center">
          <div className="single-pricing-table">
            <h3>Trial</h3>
            <h2>Free</h2>
            <h5>PER MONTH</h5>
            <ul className="package-list">
              <li>FREE VEHICLE DELIVERY</li>
              <li>OTHER CELEBRATIONS</li>
              <li>FULL INSURANCE</li>
              <li>TRANSPORT ABROAD</li>
              <li>MINI BAR</li>
              <li>INCLUDED IN PRICE</li>
            </ul>
          </div>
        </div>
        {/* Single Pricing Table */}
        {/* Single Pricing Table */}
        <div className="col-lg-4 col-md-6 text-center">
          <div className="single-pricing-table">
            <h3>standard</h3>
            <h2>$ 35.99</h2>
            <h5>PER MONTH</h5>
            <ul className="package-list">
              <li>DELIVERY AT AIRPORT</li>
              <li>WEDDINGS AND OTHER</li>
              <li>FULL INCLUDED</li>
              <li>TRANSPORT ABROAD</li>
              <li>ALL MINI BAR</li>
              <li>CHAUFFER PRICE</li>
            </ul>
          </div>
        </div>
        {/* Single Pricing Table */}
      </div>
      {/* Pricing Table Conatent End */}
    </div>
  </section>
    );
  }
}

export default Pricing;