import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PageTitle from "../../components/PageTitle";
import SideBar from "./components/SideBar";
import Car from "./components/Car";
import Pagination from "./components/Pagination";
import queryString from "query-string";
import PageLayout from "../../layouts";
import {
  searchCar,
  searchCarDataSelector,
  searchCarCountSelector
} from "../../stores/CarsState";

const connectToRedux = connect(
  createStructuredSelector({
    carListData: searchCarDataSelector,
    carListCount: searchCarCountSelector
  }),
  distpatch => ({
    searchCar: (queryObj) => {
      distpatch(searchCar({ ...queryObj }));
    }
  })
);

const CarListPage = ({ carListCount, carListData, searchCar }) => {
    const { history = {} } = window;
    const { state = {} } = history;
    const { state: queryState = {} } = state;
    const [activePage, setActivePage] = useState(0);
    useEffect(() => {
    const offset = activePage === 0 ? 0 : activePage * 5 + activePage;
    const limit = offset + 5;
    searchCar({...queryState,offset: offset, limit: limit});
    }, [activePage]);

    return (
      <div>
        <PageLayout>
          <PageTitle />          
          <section id="car-list-area" className="section-padding">
            <div className="container">
              <div className="row">
                <SideBar />
                <div className="col-lg-8">
                  <div className="car-list-content m-t-50">
                    {carListData && carListData.map((car) => {
                      const {id, brand, model, color, seat, car_price, rent_price, image, status } = car;
                      return <Car
                      brand={brand}
                      model={model}
                      seat={seat}
                      carPrice={car_price}
                      color={color} 
                      rentPrice={rent_price}
                      image={image}
                      status={status}
                      id={id}
                      />
                    }
                    )}
                  </div>
                  <Pagination activePage={activePage} setActivePage={setActivePage} pageCount={Math.ceil(carListCount / 6)} />
                </div>
=              </div>
            </div>
          </section>
          <div className="scroll-top">
            <img src="assets/img/scroll-top.png" alt="JSOFT" />
          </div>
        </PageLayout>
      </div>
    );
}

export default connectToRedux(CarListPage);
