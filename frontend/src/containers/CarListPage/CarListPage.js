import React, { Component } from "react";
import PageTitle from "../../components/PageTitle";
import SideBar from "./components/SideBar";
import Car from "./components/Car";
import queryString from "query-string";
import PageLayout from "../../layouts";

class CarListPage extends Component {
  render() {
    console.log(queryString.parse(this.props.location.search));
    return (
      <div>
        <PageLayout>
          {/*== Header Area End ==*/}
          {/*== Page Title Area Start ==*/}
          <PageTitle />
          {/*== Page Title Area End ==*/}
          {/*== Car List Area Start ==*/}
          <section id="car-list-area" className="section-padding">
            <div className="container">
              <div className="row">
                {/* Sidebar Area Start */}
                <SideBar />
                {/* Sidebar Area End */}
                {/* Car List Content Start */}
                <div className="col-lg-8">
                  <div className="car-list-content m-t-50">
                    <Car />
                    <Car />
                  </div>
                  {/* Page Pagination Start */}
                  <div className="page-pagi">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            Previous
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="/#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            5
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* Page Pagination End */}
                </div>
                {/* Car List Content End */}
              </div>
            </div>
          </section>
          {/*== Car List Area End ==*/}
          {/*== Footer Area Start ==*/}
          <div className="scroll-top">
            <img src="assets/img/scroll-top.png" alt="JSOFT" />
          </div>
        </PageLayout>
      </div>
    );
  }
}

export default CarListPage;
