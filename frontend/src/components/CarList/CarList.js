import React, { useState } from 'react';
import TabFilter from './TabFilter';
import Title from './Title';
import Car from './Car';


const CarList = (props) => {
  const { brandList } = props;
  const defaultBrand = (brandList && brandList[0]) ? brandList[0].name : 'HONDA';
  const [ activeBrand, setActiveBrand ] = useState(defaultBrand);
  const activeBrandList = brandList.find(car=> car.id === activeBrand.toLocaleLowerCase());
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
                  <TabFilter brandList={brandList} activeBrand={activeBrand} setActiveBrand={setActiveBrand} />
                <div className="row popular-car-gird">
                  {activeBrandList && activeBrandList.cars.map((car) => 
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