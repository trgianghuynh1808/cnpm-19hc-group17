import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div>
  {/*== Preloader Area Start ==*/}
  {/* <div className="preloader">
    <div className="preloader-spinner">
      <div className="loader-content">
        <img src="assets/img/preloader.gif" alt="JSOFT" />
      </div>
    </div>
  </div> */}
  {/*== Preloader Area End ==*/}
  {/*== Header Area Start ==*/}
  <header id="header-area" className="fixed-top">
    {/*== Header Top Start ==*/}
    <div id="header-top" className="d-none d-xl-block">
      <div className="container">
        <div className="row">
          {/*== Single HeaderTop Start ==*/}
          <div className="col-lg-3 text-left">
            <i className="fa fa-map-marker" /> 802/2, Mirpur, Dhaka
          </div>
          {/*== Single HeaderTop End ==*/}
          {/*== Single HeaderTop Start ==*/}
          <div className="col-lg-3 text-center">
            <i className="fa fa-mobile" /> +1 800 345 678
          </div>
          {/*== Single HeaderTop End ==*/}
          {/*== Single HeaderTop Start ==*/}
          <div className="col-lg-3 text-center">
            <i className="fa fa-clock-o" /> Mon-Fri 09.00 - 17.00
          </div>
          {/*== Single HeaderTop End ==*/}
          {/*== Social Icons Start ==*/}
          <div className="col-lg-3 text-right">
            <div className="header-social-icons">
              <a href="#"><i className="fa fa-behance" /></a>
              <a href="#"><i className="fa fa-pinterest" /></a>
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-linkedin" /></a>
            </div>
          </div>
          {/*== Social Icons End ==*/}
        </div>
      </div>
    </div>
    {/*== Header Top End ==*/}
    {/*== Header Bottom Start ==*/}
    <div id="header-bottom">
      <div className="container">
        <div className="row">
          {/*== Logo Start ==*/}
          <div className="col-lg-4">
            <a href="index.html" className="logo">
              <img src="assets/img/logo.png" alt="JSOFT" />
            </a>
          </div>
          {/*== Logo End ==*/}
          {/*== Main Menu Start ==*/}
          <div className="col-lg-8 d-none d-xl-block">
            <nav className="mainmenu alignright">
              <ul>
                <li className="active"><a href="#">Home</a>
                  <ul>
                    <li><a href="index.html">Home 1</a></li>
                    <li><a href="index2.html">Home 2</a></li>
                    <li><a href="index3.html">Home 3</a></li>
                  </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">services</a></li>
                <li><a href="#">Cars</a>
                  <ul>
                    <li><a href="car-left-sidebar.html">Car Left Sidebar</a></li>
                    <li><a href="car-right-sidebar.html">Car Right Sidebar</a></li>
                    <li><a href="car-without-sidebar.html">Car Without Sidebar</a></li>
                    <li><a href="car-details.html">Car Details</a></li>
                  </ul>
                </li>
                <li><a href="index.html">Pages</a>
                  <ul>
                    <li><a href="package.html">Pricing</a></li>
                    <li><a href="driver.html">Driver</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="help-desk.html">Help Desk</a></li>
                    <li><a href="login.html">Log In</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li><a href="404.html">404</a></li>
                  </ul>
                </li>
                <li><a href="#">Blog</a>
                  <ul>
                    <li><a href="article.html">Blog Page</a></li>
                    <li><a href="article-details.html">Blog Details</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          {/*== Main Menu End ==*/}
        </div>
      </div>
    </div>
    {/*== Header Bottom End ==*/}
  </header>
  {/*== Header Area End ==*/}
  {/*== Slider Area Start ==*/}
  <section id="slider-area">
    {/*== slide Item One ==*/}
    <div className="single-slide-item overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="book-a-car">
              <form action="index.html">
                {/*== Pick Up Location ==*/}
                <div className="pickup-location book-item">
                  <h4>PICK-UP LOCATION:</h4>
                  <select className="custom-select">
                    <option selected>Select</option>
                    <option value={1}>Dhaka</option>
                    <option value={2}>Comilla</option>
                    <option value={3}>Barishal</option>
                    <option value={3}>Rangpur</option>
                  </select>
                </div>
                {/*== Pick Up Location ==*/}
                {/*== Pick Up Date ==*/}
                <div className="pick-up-date book-item">
                  <h4>PICK-UP DATE:</h4>
                  <input id="startDate" placeholder="Pick Up Date" />
                  <div className="return-car">
                    <h4>Return DATE:</h4>
                    <input id="endDate" placeholder="Return Date" />
                  </div>
                </div>
                {/*== Pick Up Location ==*/}
                {/*== Car Choose ==*/}
                <div className="choose-car-type book-item">
                  <h4>CHOOSE CAR TYPE:</h4>
                  <select className="custom-select">
                    <option selected>Select</option>
                    <option value={1}>BMW</option>
                    <option value={2}>Audi</option>
                    <option value={3}>Lexus</option>
                  </select>
                </div>
                {/*== Car Choose ==*/}
                <div className="book-button text-center">
                  <button className="book-now-btn">Book Now</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-7 text-right">
            <div className="display-table">
              <div className="display-table-cell">
                <div className="slider-right-text">
                  <h1>BOOK A CAR TODAY!</h1>
                  <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br /> FOR OUR RETURNING CUSTOMERS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*== slide Item One ==*/}
  </section>
  {/*== Slider Area End ==*/}
  {/*== About Us Area Start ==*/}
  <section id="about-area" className="section-padding">
    <div className="container">
      <div className="row">
        {/* Section Title Start */}
        <div className="col-lg-12">
          <div className="section-title  text-center">
            <h2>About us</h2>
            <span className="title-line"><i className="fa fa-car" /></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        {/* Section Title End */}
      </div>
      <div className="row">
        {/* About Content Start */}
        <div className="col-lg-6">
          <div className="display-table">
            <div className="display-table-cell">
              <div className="about-content">
                <p>Lorem simply dummy is a texted of the printing costed and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aliquid debitis optio praesentium, voluptate repellat accusantium deserunt eius.</p>
                <div className="about-btn">
                  <a href="#">Book a Car</a>
                  <a href="#">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Content End */}
        {/* About Video Start */}
        <div className="col-lg-6">
          <div className="about-video">
            <iframe src="https://player.vimeo.com/video/121982328?title=0&byline=0&portrait=0" />
          </div>
        </div>
        {/* About Video End */}
      </div>
    </div>
  </section>
  {/*== About Us Area End ==*/}
  {/*== Partner Area Start ==*/}
  <div id="partner-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="partner-content-wrap">
            {/* Single Partner Start */}
            <div className="single-partner">
              <div className="display-table">
                <div className="display-table-cell">
                  <img src="assets/img/partner/partner-logo-1.png" alt="JSOFT" />
                </div>
              </div>
            </div>
            {/* Single Partner End */}
            {/* Single Partner Start */}
            <div className="single-partner">
              <div className="display-table">
                <div className="display-table-cell">
                  <img src="assets/img/partner/partner-logo-2.png" alt="JSOFT" />
                </div>
              </div>
            </div>
            {/* Single Partner End */}
            {/* Single Partner Start */}
            <div className="single-partner">
              <div className="display-table">
                <div className="display-table-cell">
                  <img src="assets/img/partner/partner-logo-3.png" alt="JSOFT" />
                </div>
              </div>
            </div>
            {/* Single Partner End */}
            {/* Single Partner Start */}
            <div className="single-partner">
              <div className="display-table">
                <div className="display-table-cell">
                  <img src="assets/img/partner/partner-logo-4.png" alt="JSOFT" />
                </div>
              </div>
            </div>
            {/* Single Partner End */}
            {/* Single Partner Start */}
            <div className="single-partner">
              <div className="display-table">
                <div className="display-table-cell">
                  <img src="assets/img/partner/partner-logo-5.png" alt="JSOFT" />
                </div>
              </div>
            </div>
            {/* Single Partner End */}
            {/* Single Partner Start */}
            <div className="single-partner">
              <div className="display-table">
                <div className="display-table-cell">
                  <img src="assets/img/partner/partner-logo-1.png" alt="JSOFT" />
                </div>
              </div>
            </div>
            {/* Single Partner End */}
            {/* Single Partner Start */}
            <div className="single-partner">
              <div className="display-table">
                <div className="display-table-cell">
                  <img src="assets/img/partner/partner-logo-4.png" alt="JSOFT" />
                </div>
              </div>
            </div>
            {/* Single Partner End */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== Partner Area End ==*/}
  {/*== Services Area Start ==*/}
  <section id="service-area" className="section-padding">
    <div className="container">
      <div className="row">
        {/* Section Title Start */}
        <div className="col-lg-12">
          <div className="section-title  text-center">
            <h2>Our Services</h2>
            <span className="title-line"><i className="fa fa-car" /></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        {/* Section Title End */}
      </div>
      {/* Service Content Start */}
      <div className="row">
        {/* Single Service Start */}
        <div className="col-lg-4 text-center">
          <div className="service-item">
            <i className="fa fa-taxi" />
            <h3>RENTAL CAR</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
          </div>
        </div>
        {/* Single Service End */}
        {/* Single Service Start */}
        <div className="col-lg-4 text-center">
          <div className="service-item">
            <i className="fa fa-cog" />
            <h3>CAR REPAIR</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
          </div>
        </div>
        {/* Single Service End */}
        {/* Single Service Start */}
        <div className="col-lg-4 text-center">
          <div className="service-item">
            <i className="fa fa-map-marker" />
            <h3>TAXI SERVICE</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
          </div>
        </div>
        {/* Single Service End */}
        {/* Single Service Start */}
        <div className="col-lg-4 text-center">
          <div className="service-item">
            <i className="fa fa-life-ring" />
            <h3>life insurance</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
          </div>
        </div>
        {/* Single Service End */}
        {/* Single Service Start */}
        <div className="col-lg-4 text-center">
          <div className="service-item">
            <i className="fa fa-bath" />
            <h3>car wash</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
          </div>
        </div>
        {/* Single Service End */}
        {/* Single Service Start */}
        <div className="col-lg-4 text-center">
          <div className="service-item">
            <i className="fa fa-phone" />
            <h3>call driver</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
          </div>
        </div>
        {/* Single Service End */}
      </div>
      {/* Service Content End */}
    </div>
  </section>
  {/*== Services Area End ==*/}
  {/*== Fun Fact Area Start ==*/}
  <section id="funfact-area" className="overlay section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-11 col-md-12 m-auto">
          <div className="funfact-content-wrap">
            <div className="row">
              {/* Single FunFact Start */}
              <div className="col-lg-4 col-md-6">
                <div className="single-funfact">
                  <div className="funfact-icon">
                    <i className="fa fa-smile-o" />
                  </div>
                  <div className="funfact-content">
                    <p><span className="counter">550</span>+</p>
                    <h4>HAPPY CLIENTS</h4>
                  </div>
                </div>
              </div>
              {/* Single FunFact End */}
              {/* Single FunFact Start */}
              <div className="col-lg-4 col-md-6">
                <div className="single-funfact">
                  <div className="funfact-icon">
                    <i className="fa fa-car" />
                  </div>
                  <div className="funfact-content">
                    <p><span className="counter">250</span>+</p>
                    <h4>CARS IN STOCK</h4>
                  </div>
                </div>
              </div>
              {/* Single FunFact End */}
              {/* Single FunFact Start */}
              <div className="col-lg-4 col-md-6">
                <div className="single-funfact">
                  <div className="funfact-icon">
                    <i className="fa fa-bank" />
                  </div>
                  <div className="funfact-content">
                    <p><span className="counter">50</span>+</p>
                    <h4>office in cities</h4>
                  </div>
                </div>
              </div>
              {/* Single FunFact End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*== Fun Fact Area End ==*/}
  {/*== Choose Car Area Start ==*/}
  <section id="choose-car" className="section-padding">
    <div className="container">
      <div className="row">
        {/* Section Title Start */}
        <div className="col-lg-12">
          <div className="section-title  text-center">
            <h2>Choose your Car</h2>
            <span className="title-line"><i className="fa fa-car" /></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        {/* Section Title End */}
      </div>
      <div className="row">
        {/* Choose Area Content Start */}
        <div className="col-lg-12">
          <div className="choose-content-wrap">
            {/* Choose Area Tab Menu */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#popular_cars" role="tab" aria-selected="true">popular Cars</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#newest_cars" role="tab" aria-selected="false">newest cars</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#office_map" role="tab" aria-selected="false">Our Office</a>
              </li>
            </ul>
            {/* Choose Area Tab Menu */}
            {/* Choose Area Tab content */}
            <div className="tab-content" id="myTabContent">
              {/* Popular Cars Tab Start */}
              <div className="tab-pane fade show active" id="popular_cars" role="tabpanel" aria-labelledby="home-tab">
                {/* Popular Cars Content Wrapper Start */}
                <div className="popular-cars-wrap">
                  {/* Filtering Menu */}
                  <div className="popucar-menu text-center">
                    <a href="#" data-filter="*" className="active">all</a>
                    <a href="#" data-filter=".con">Conver</a>
                    <a href="#" data-filter=".hat">Truck</a>
                    <a href="#" data-filter=".mpv">MPV</a>
                    <a href="#" data-filter=".sedan">Sedan</a>
                    <a href="#" data-filter=".suv">SUV</a>
                  </div>
                  {/* Filtering Menu */}
                  {/* PopularCars Tab Content Start */}
                  <div className="row popular-car-gird">
                    {/* Single Popular Car Start */}
                    <div className="col-lg-4 col-md-6 con suv mpv">
                      <div className="single-popular-car">
                        <div className="p-car-thumbnails">
                          <a className="car-hover" href="assets/img/car/car-1.jpg">
                            <img src="assets/img/car/car-1.jpg" alt="JSOFT" />
                          </a>
                        </div>
                        <div className="p-car-content">
                          <h3>
                            <a href="#">Dodge Ram 1500</a>
                            <span className="price"><i className="fa fa-tag" /> $55/day</span>
                          </h3>
                          <h5>HATCHBACK</h5>
                          <div className="p-car-feature">
                            <a href="#">2017</a>
                            <a href="#">manual</a>
                            <a href="#">AIR CONDITION</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Popular Car End */}
                    {/* Single Popular Car Start */}
                    <div className="col-lg-4 col-md-6 hat sedan">
                      <div className="single-popular-car">
                        <div className="p-car-thumbnails">
                          <a className="car-hover" href="assets/img/car/car-2.jpg">
                            <img src="assets/img/car/car-2.jpg" alt="JSOFT" />
                          </a>
                        </div>
                        <div className="p-car-content">
                          <h3>
                            <a href="#">Dodge Ram 1500</a>
                            <span className="price"><i className="fa fa-tag" /> $55/day</span>
                          </h3>
                          <h5>HATCHBACK</h5>
                          <div className="p-car-feature">
                            <a href="#">2017</a>
                            <a href="#">manual</a>
                            <a href="#">AIR CONDITION</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Popular Car End */}
                    {/* Single Popular Car Start */}
                    <div className="col-lg-4 col-md-6 suv con mpv">
                      <div className="single-popular-car">
                        <div className="p-car-thumbnails">
                          <a className="car-hover" href="assets/img/car/car-3.jpg">
                            <img src="assets/img/car/car-3.jpg" alt="JSOFT" />
                          </a>
                        </div>
                        <div className="p-car-content">
                          <h3>
                            <a href="#">Dodge Ram 1500</a>
                            <span className="price"><i className="fa fa-tag" /> $55/day</span>
                          </h3>
                          <h5>HATCHBACK</h5>
                          <div className="p-car-feature">
                            <a href="#">2017</a>
                            <a href="#">manual</a>
                            <a href="#">AIR CONDITION</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Popular Car End */}
                    {/* Single Popular Car Start */}
                    <div className="col-lg-4 col-md-6 con hat">
                      <div className="single-popular-car">
                        <div className="p-car-thumbnails">
                          <a className="car-hover" href="assets/img/car/car-4.jpg">
                            <img src="assets/img/car/car-4.jpg" alt="JSOFT" />
                          </a>
                        </div>
                        <div className="p-car-content">
                          <h3>
                            <a href="#">Dodge Ram 1500</a>
                            <span className="price"><i className="fa fa-tag" /> $55/day</span>
                          </h3>
                          <h5>HATCHBACK</h5>
                          <div className="p-car-feature">
                            <a href="#">2017</a>
                            <a href="#">manual</a>
                            <a href="#">AIR CONDITION</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Popular Car End */}
                    {/* Single Popular Car Start */}
                    <div className="col-lg-4 col-md-6 con sedan mpv">
                      <div className="single-popular-car">
                        <div className="p-car-thumbnails">
                          <a className="car-hover" href="assets/img/car/car-5.jpg">
                            <img src="assets/img/car/car-5.jpg" alt="JSOFT" />
                          </a>
                        </div>
                        <div className="p-car-content">
                          <h3>
                            <a href="#">Dodge Ram 1500</a>
                            <span className="price"><i className="fa fa-tag" /> $55/day</span>
                          </h3>
                          <h5>HATCHBACK</h5>
                          <div className="p-car-feature">
                            <a href="#">2017</a>
                            <a href="#">manual</a>
                            <a href="#">AIR CONDITION</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Popular Car End */}
                    {/* Single Popular Car Start */}
                    <div className="col-lg-4 col-md-6 hat suv mpv">
                      <div className="single-popular-car">
                        <div className="p-car-thumbnails">
                          <a className="car-hover" href="assets/img/car/car-6.jpg">
                            <img src="assets/img/car/car-6.jpg" alt="JSOFT" />
                          </a>
                        </div>
                        <div className="p-car-content">
                          <h3>
                            <a href="#">Dodge Ram 1500</a>
                            <span className="price"><i className="fa fa-tag" /> $55/day</span>
                          </h3>
                          <h5>HATCHBACK</h5>
                          <div className="p-car-feature">
                            <a href="#">2017</a>
                            <a href="#">manual</a>
                            <a href="#">AIR CONDITION</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Popular Car End */}
                  </div>
                  {/* PopularCars Tab Content End */}
                </div>
                {/* Popular Cars Content Wrapper End */}
              </div>
              {/* Popular Cars Tab End */}
              {/* Newest Cars Tab Start */}
              <div className="tab-pane fade" id="newest_cars" role="tabpanel" aria-labelledby="profile-tab">
                {/* Newest Cars Content Wrapper Start */}
                <div className="popular-cars-wrap">
                  {/* Filtering Menu */}
                  <div className="newcar-menu text-center">
                    <a href="#" data-filter="*" className="active">all</a>
                    <a href="#" data-filter=".toyota">toyota</a>
                    <a href="#" data-filter=".bmw">bmw</a>
                    <a href="#" data-filter=".audi">audi</a>
                    <a href="#" data-filter=".tata">Tata</a>
                  </div>
                  {/* Filtering Menu */}
                  {/* NewestCars Tab Content Start */}
                  <div className="row newest-car-gird">
                    {/* Single Newest Car Start */}
                    <div className="col-lg-4 col-md-6 tata audi">
                      <div className="single-new-car">
                        <div className="p-car-thumbnails">
                          <a className="car-hover" href="assets/img/car/car-6.jpg">
                            <img src="assets/img/car/car-6.jpg" alt="JSOFT" />
                          </a>
                        </div>
                        <div className="p-car-content">
                          <h3>
                            <a href="#">Toyota RAV4 EV</a>
                            <span className="price"><i className="fa fa-tag" /> $35/day</span>
                          </h3>
                          <h5>Toyota</h5>
                          <div className="p-car-feature">
                            <a href="#">2018</a>
                            <a href="#">Auto</a>
                            <a href="#">Non AIR CONDITION</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Newest Car End */}
                    {/* Single Newest Car Start */}
                    <div className="col-lg-4 col-md-6 bmw tata toyota">
                      <div className="single-new-car">
                        <div className="p-car-thumbnails">
                          <a className="car-hover" href="assets/img/car/car-5.jpg">
                            <img src="assets/img/car/car-5.jpg" alt="JSOFT" />
                          </a>
                        </div>
                        <div className="p-car-content">
                          <h3>
                            <a href="#">Toyota RAV4 EV</a>
                            <span className="price"><i className="fa fa-tag" /> $35/day</span>
                          </h3>
                          <h5>Toyota</h5>
                          <div className="p-car-feature">
                            <a href="#">2018</a>
                            <a href="#">Auto</a>
                            <a href="#">Non AIR CONDITION</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Newest Car End */}
                    {/* Single Newest Car Start */}
                    <div className="col-lg-4 col-md-6 bmw">
                      <div className="single-new-car">
                        <div className="p-car-thumbnails">
                          <a className="car-hover" href="assets/img/car/car-4.jpg">
                            <img src="assets/img/car/car-4.jpg" alt="JSOFT" />
                          </a>
                        </div>
                        <div className="p-car-content">
                          <h3>
                            <a href="#">Toyota RAV4 EV</a>
                            <span className="price"><i className="fa fa-tag" /> $35/day</span>
                          </h3>
                          <h5>Toyota</h5>
                          <div className="p-car-feature">
                            <a href="#">2018</a>
                            <a href="#">Auto</a>
                            <a href="#">Non AIR CONDITION</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Newest Car End */}
                  </div>
                  {/* NewestCars Tab Content End */}
                </div>
                {/* Newest Cars Content Wrapper End */}
              </div>
              {/* Newest Cars Tab End */}
              {/* Office Map Tab */}
              <div className="tab-pane fade" id="office_map" role="tabpanel" aria-labelledby="contact-tab">
                <div className="map-area">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6538067244583!2d90.37092511435942!3d23.79533919297639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0cce3251ab1%3A0x7a2aa979862a9643!2sJSoft!5e0!3m2!1sen!2sbd!4v1516771096779" />
                </div>
              </div>
              {/* Office Map Tab */}
            </div>
            {/* Choose Area Tab content */}
          </div>
        </div>
        {/* Choose Area Content End */}
      </div>
    </div>
  </section>
  {/*== Choose Car Area End ==*/}
  {/*== Pricing Area Start ==*/}
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
  {/*== Pricing Area End ==*/}
  {/*== Testimonials Area Start ==*/}
  <section id="testimonial-area" className="section-padding">
    <div className="container">
      <div className="row">
        {/* Section Title Start */}
        <div className="col-lg-12">
          <div className="section-title  text-center">
            <h2>Testimonials</h2>
            <span className="title-line"><i className="fa fa-car" /></span>
            <p>Lorem ipsum dolor sit amet elit.</p>
          </div>
        </div>
        {/* Section Title End */}
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12 m-auto">
          <div className="testimonial-content">
            {/*== Single Testimoial Start ==*/}
            <div className="single-testimonial">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam obcaecati impedit, at autem repellat vel magni architecto veritatis sed.</p>
              <h3>Vongchong Smith</h3>
              <div className="client-logo">
                <img src="assets/img/client/client-pic-1.jpg" alt="JSOFT" />
              </div>
            </div>
            {/*== Single Testimoial End ==*/}
            {/*== Single Testimoial Start ==*/}
            <div className="single-testimonial">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam obcaecati impedit, at autem repellat vel magni architecto veritatis sed.</p>
              <h3>Amader Tuni</h3>
              <div className="client-logo">
                <img src="assets/img/client/client-pic-3.jpg" alt="JSOFT" />
              </div>
            </div>
            {/*== Single Testimoial End ==*/}
            {/*== Single Testimoial Start ==*/}
            <div className="single-testimonial">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam obcaecati impedit, at autem repellat vel magni architecto veritatis sed.</p>
              <h3>Atex Tuntuni Smith</h3>
              <div className="client-logo">
                <img src="assets/img/client/client-pic-2.jpg" alt="JSOFT" />
              </div>
            </div>
            {/*== Single Testimoial End ==*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*== Testimonials Area End ==*/}
  {/*== Mobile App Area Start ==*/}
  <div id="mobileapp-video-bg" />
  <section id="mobile-app-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="mobile-app-content">
            <h2>SAVE 30% WITH THE APP</h2>
            <p>Easy &amp; Fast - Book a car in 60 seconds</p>
            <div className="app-btns">
              <a href="#"><i className="fa fa-android" /> Android Store</a>
              <a href="#"><i className="fa fa-apple" /> Apple Store</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*== Mobile App Area End ==*/}
  {/*== Articles Area Start ==*/}
  <section id="tips-article-area" className="section-padding">
    <div className="container">
      <div className="row">
        {/* Section Title Start */}
        <div className="col-lg-12">
          <div className="section-title  text-center">
            <h2>Tips and articles</h2>
            <span className="title-line"><i className="fa fa-car" /></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        {/* Section Title End */}
      </div>
      {/* Articles Content Wrap Start */}
      <div className="row">
        {/* Single Articles Start */}
        <div className="col-lg-12">
          <article className="single-article">
            <div className="row">
              {/* Articles Thumbnail Start */}
              <div className="col-lg-5">
                <div className="article-thumb">
                  <img src="assets/img/article/arti-thumb-1.jpg" alt="JSOFT" />
                </div>
              </div>
              {/* Articles Thumbnail End */}
              {/* Articles Content Start */}
              <div className="col-lg-7">
                <div className="display-table">
                  <div className="display-table-cell">
                    <div className="article-body">
                      <h3><a href="article-details.html">Wliquam sit amet urna eullam</a></h3>
                      <div className="article-meta">
                        <a href="#" className="author">By :: <span>Admin</span></a>
                        <a href="#" className="commnet">Comments :: <span>10</span></a>
                      </div>
                      <div className="article-date">25 <span className="month">jan</span></div>
                      <p>Wlam aiber vestibulum fringilla oremedad ipsum dolor sit amet consectetur adipisicing elit sed doned eiusmod tempored incididunt ut labore et dolore magna aliquaa enimd ad minim veniad.</p>
                      <a href="article-details.html" className="readmore-btn">Read More <i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Articles Content End */}
            </div>
          </article>
        </div>
        {/* Single Articles End */}
        {/* Single Articles Start */}
        <div className="col-lg-12">
          <article className="single-article middle">
            <div className="row">
              {/* Articles Thumbnail Start */}
              <div className="col-lg-5 d-xl-none">
                <div className="article-thumb">
                  <img src="assets/img/article/arti-thumb-2.jpg" alt="JSOFT" />
                </div>
              </div>
              {/* Articles Thumbnail End */}
              {/* Articles Content Start */}
              <div className="col-lg-7">
                <div className="display-table">
                  <div className="display-table-cell">
                    <div className="article-body">
                      <h3><a href="article-details.html">fringilla oremedad ipsum dolor sit</a></h3>
                      <div className="article-meta">
                        <a href="#" className="author">By :: <span>Admin</span></a>
                        <a href="#" className="commnet">Comments :: <span>10</span></a>
                      </div>
                      <div className="article-date">14<span className="month">feb</span></div>
                      <p>Wlam aiber vestibulum fringilla oremedad ipsum dolor sit amet consectetur adipisicing elit sed doned eiusmod tempored incididunt ut labore et dolore magna aliquaa enimd ad minim veniad.</p>
                      <a href="article-details.html" className="readmore-btn">Read More <i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Articles Content End */}
              {/* Articles Thumbnail Start */}
              <div className="col-lg-5 d-none d-xl-block">
                <div className="article-thumb">
                  <img src="assets/img/article/arti-thumb-2.jpg" alt="JSOFT" />
                </div>
              </div>
              {/* Articles Thumbnail End */}
            </div>
          </article>
        </div>
        {/* Single Articles End */}
        {/* Single Articles Start */}
        <div className="col-lg-12">
          <article className="single-article">
            <div className="row">
              {/* Articles Thumbnail Start */}
              <div className="col-lg-5">
                <div className="article-thumb">
                  <img src="assets/img/article/arti-thumb-3.jpg" alt="JSOFT" />
                </div>
              </div>
              {/* Articles Thumbnail End */}
              {/* Articles Content Start */}
              <div className="col-lg-7">
                <div className="display-table">
                  <div className="display-table-cell">
                    <div className="article-body">
                      <h3><a href="article-details.html">Tempored incididunt ut labore</a></h3>
                      <div className="article-meta">
                        <a href="#" className="author">By :: <span>Admin</span></a>
                        <a href="#" className="commnet">Comments :: <span>10</span></a>
                      </div>
                      <div className="article-date">17 <span className="month">feb</span></div>
                      <p>Wlam aiber vestibulum fringilla oremedad ipsum dolor sit amet consectetur adipisicing elit sed doned eiusmod tempored incididunt ut labore et dolore magna aliquaa enimd ad minim veniad.</p>
                      <a href="article-details.html" className="readmore-btn">Read More <i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Articles Content End */}
            </div>
          </article>
        </div>
        {/* Single Articles End */}
      </div>
      {/* Articles Content Wrap End */}
    </div>
  </section>
  {/*== Articles Area End ==*/}
  {/*== Footer Area Start ==*/}
  <section id="footer-area">
    {/* Footer Widget Start */}
    <div className="footer-widget-area">
      <div className="container">
        <div className="row">
          {/* Single Footer Widget Start */}
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h2>About Us</h2>
              <div className="widget-body">
                <img src="assets/img/logo.png" alt="JSOFT" />
                <p>Lorem ipsum dolored is a sit ameted consectetur adipisicing elit. Nobis magni assumenda distinctio debitis, eum fuga fugiat error reiciendis.</p>
                <div className="newsletter-area">
                  <form action="index.html">
                    <input type="email" placeholder="Subscribe Our Newsletter" />
                    <button type="submit" className="newsletter-btn"><i className="fa fa-send" /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Single Footer Widget End */}
          {/* Single Footer Widget Start */}
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h2>Recent Posts</h2>
              <div className="widget-body">
                <ul className="recent-post">
                  <li>
                    <a href="#">
                      Hello Bangladesh! 
                      <i className="fa fa-long-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Lorem ipsum dolor sit amet
                      <i className="fa fa-long-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Hello Bangladesh! 
                      <i className="fa fa-long-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      consectetur adipisicing elit?
                      <i className="fa fa-long-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Single Footer Widget End */}
          {/* Single Footer Widget Start */}
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h2>get touch</h2>
              <div className="widget-body">
                <p>Lorem ipsum doloer sited amet, consectetur adipisicing elit. nibh auguea, scelerisque sed</p>
                <ul className="get-touch">
                  <li><i className="fa fa-map-marker" /> 800/8, Kazipara, Dhaka</li>
                  <li><i className="fa fa-mobile" /> +880 01 86 25 72 43</li>
                  <li><i className="fa fa-envelope" /> kazukamdu83@gmail.com</li>
                </ul>
                <a href="https://goo.gl/maps/b5mt45MCaPB2" className="map-show" target="_blank">Show Location</a>
              </div>
            </div>
          </div>
          {/* Single Footer Widget End */}
        </div>
      </div>
    </div>
    {/* Footer Widget End */}
    {/* Footer Bottom Start */}
    <div className="footer-bottom-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Bottom End */}
  </section>
  {/*== Footer Area End ==*/}
  {/*== Scroll Top Area Start ==*/}
  <div className="scroll-top">
    <img src="assets/img/scroll-top.png" alt="JSOFT" />
  </div>
</div>

            </div>
        );
    }
}

export default HomePage;