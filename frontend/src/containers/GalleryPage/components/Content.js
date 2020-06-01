import React from "react";
import Car from "./Car";
import SearchForm from './SearchForm';
import TabFilter from './TabFilter';

const Content = (props) => {
  const { immediatedSubmit, carPerPage, filterObj, brands, carList = [], activePage, setActivePage, pageCount, handleSubmit, setFilterObj } = props;
  const pagingList = [];
  for (let i = 1; i <= pageCount; i++) {
    pagingList.push(i);
  }

  const pagingHandleClick = (newActivePage, offset) => {
    setActivePage(newActivePage);
    setFilterObj({ type: 'offset', payload: offset })
    immediatedSubmit({ type: 'offset', value: offset });
  };

  const href = `#${activePage + 1}`;
  return (
    <section id="gallery-page-content" className="section-padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <SearchForm brands={brands} handleSubmit={handleSubmit} setFilterObj={setFilterObj} />
          </div>
          <div className="col-lg-9">
            <TabFilter immediatedSubmit={immediatedSubmit} filterObj={filterObj} setFilterObj={setFilterObj} brands={brands} />
            <div className="row popular-car-gird">
              {carList && carList.map((car, index) => {
                const { id, brand, model, color, seat, car_price, rent_price, image, status } = car;
                return <Car
                  key={index}
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
              })
              }
            </div>
          </div>
        </div>
        <div className="row" style={{ padding: '0 50%' }}>
          <div className="col-lg-12">
            <div className="page-pagi">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li
                    onClick={() => {
                      if (activePage === 0) return;
                      const prevActivePage = activePage - 1;
                      const offset = (prevActivePage * carPerPage) + prevActivePage;
                      pagingHandleClick(prevActivePage, offset);
                    }}
                    className="page-item"
                  >
                    <a href={href} className="page-link">Previous</a>
                  </li>
                  {pagingList.map(paging => (
                    <li
                      key={paging}
                      onClick={() => {
                        const newActivePage = paging - 1;
                        if (activePage === newActivePage) return;
                        const offset = (newActivePage * carPerPage) + newActivePage ;
                        pagingHandleClick(paging - 1, offset);
                      }}
                      className={`page-item ${paging - 1 === activePage &&
                        "active"}`}
                    >
                      <a href={href} className="page-link">{paging}</a>
                    </li>
                  ))}
                  <li
                    onClick={() => {
                      if (activePage === pageCount - 1) return;
                      const nextActivePage = activePage + 1;
                      const offset = (nextActivePage * carPerPage) + nextActivePage;
                      pagingHandleClick(nextActivePage, offset);
                    }}
                    className="page-item"
                  >
                    <a href={href} className="page-link">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
