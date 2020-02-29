import React, { useState } from 'react';
import TabFilter from './TabFilter';
import Title from './Title';
import Car from './Car';


const CarList = (props) => {
  const { carList } = props;
  const [ activeBrand, setActiveBrand ] = useState('BMW');

  const activeCarList = carList.find(car=> car.id === activeBrand.toLocaleLowerCase());
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
                  {activeCarList && activeCarList.cars.map((car) => 
                    <Car {...car}/>
                  )}
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