import React, { useState } from 'react';
import TabFilter from './TabFilter';
import Title from './Title';


const CarList = (props) => {
  const [ activeBrand, setActiveBrand ] = useState('BMW')
  return (
    <section id="choose-car" className="section-padding">
  <div className="container">
    <div className="row">
        <Title/>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="choose-content-wrap">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="popular_cars" role="tabpanel" aria-labelledby="home-tab">
              <div className="popular-cars-wrap">
                  <TabFilter brand={activeBrand} setBrand={setActiveBrand} />
                <div className="row popular-car-gird">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default CarList;