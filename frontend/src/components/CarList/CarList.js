import React, { useState } from 'react';
import TabFilter from './TabFilter';
import Title from './Title';
import Car from './Car';

const CarList = (props) => {
  const { carListGroupByBrand = [] } = props;
  const defaultBrand = (carListGroupByBrand && carListGroupByBrand[0]) ? carListGroupByBrand[0].name : 'HONDA';
  const [ activeBrand, setActiveBrand ] = useState(defaultBrand);
  const activeBrandList = carListGroupByBrand.find(car=> car.id === activeBrand.toLocaleLowerCase());
  if(!carListGroupByBrand[0]) return <></>;
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
                  <TabFilter carListGroupByBrand={carListGroupByBrand} activeBrand={activeBrand} setActiveBrand={setActiveBrand} />
                <div className="row popular-car-gird">
                  {activeBrandList && activeBrandList.cars.map((car, index) => 
                    <Car key={index} {...car}/>
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