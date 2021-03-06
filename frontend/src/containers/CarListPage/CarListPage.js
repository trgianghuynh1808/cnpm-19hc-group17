import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CAR_PER_VERTI_PAGE } from "../../utils/enums";
import { navigateWithClear } from '../../utils/route';
import PageTitle from "../../components/PageTitle";
import SideBar from "./components/SideBar";
import Car from "./components/Car";
import Pagination from "./components/Pagination";
import PageLayout from "../../layouts";
import {
  searchCar,
  searchCarDataSelector,
  searchCarCountSelector,
} from "../../stores/CarsState";

const { history = {} } = window;
  const { state = {} } = history;
  if(!state) {
    navigateWithClear('/');
  }

const connectToRedux = connect(
  createStructuredSelector({
    carListData: searchCarDataSelector,
    carListCount: searchCarCountSelector,
  }),
  (distpatch) => ({
    searchCar: (queryObj) => {
      distpatch(searchCar({ ...queryObj }));
    },
  })
);

const CarListPage = ({ carListCount, carListData, searchCar }) => {
  const [activePage, setActivePage] = useState(0);
  const { history = {} } = window;
  const { state = {} } = history;
  if(!state) window.location.replace('/');

  const { state: queryState = {} } = state;

  useEffect(() => {
    document.title= 'Car List';
    const carPerPage = CAR_PER_VERTI_PAGE - 1;
    const offset = activePage === 0 ? 0 : activePage * carPerPage + activePage;
    const limit = offset + carPerPage;
    searchCar({ ...queryState, offset: offset, limit: limit });
  }, [activePage, searchCar, queryState]);

  
  

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
                  {carListData &&
                    carListData.map((car) => {
                      const {
                        id,
                        brand,
                        model,
                        color,
                        seat,
                        car_price,
                        rent_price,
                        image,
                        status,
                      } = car;
                      return (
                        <Car
                          key={id}
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
                      );
                    })}
                </div>
                <Pagination
                  activePage={activePage}
                  setActivePage={setActivePage}
                  pageCount={Math.ceil(carListCount / CAR_PER_VERTI_PAGE)}
                />
              </div>
              ={" "}
            </div>
          </div>
        </section>
        <div className="scroll-top">
          <img src="assets/img/scroll-top.png" alt="JSOFT" />
        </div>
      </PageLayout>
    </div>
  );
};

export default connectToRedux(CarListPage);
