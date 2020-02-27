import React, { Component } from 'react';
import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import About from '../../components/About';
import Partners from '../../components/Partners';
import Services from '../../components/Services';
import FunFact from '../../components/FunFact';
import CarList from '../../components/CarList';
import Testimonials from '../../components/Testimonials';
import Articles from '../../components/Articles';
import Footer from '../../components/Footer/Footer';

class HomePage extends Component {
    render() {
        return (
            <div>
  {/*== Header Area Start ==*/}
        <Header/>
  {/*== Header Area End ==*/}
  {/*== Slider Area Start ==*/}
        <SearchForm />
  {/*== Slider Area End ==*/}
  {/*== About Us Area Start ==*/}
        <About/>
  {/*== About Us Area End ==*/}
  {/*== Partner Area Start ==*/}
        <Partners/>
  {/*== Partner Area End ==*/}
  {/*== Services Area Start ==*/}
        <Services/>
  {/*== Services Area End ==*/}
  {/*== Fun Fact Area Start ==*/}
        <FunFact/>
  {/*== Fun Fact Area End ==*/}
  {/*== Choose Car Area Start ==*/}
        <CarList/>
  {/*== Choose Car Area End ==*/}
  {/*== Testimonials Area Start ==*/}
        <Testimonials/>
  {/*== Testimonials Area End ==*/}
  {/*== Articles Area Start ==*/}
        <Articles/>
  {/*== Articles Area End ==*/}
  {/*== Footer Area Start ==*/}
        <Footer/>
    {/* Footer Bottom End */}
  {/*== Footer Area End ==*/}
  </div>
        );
    }
}

export default HomePage;