import React, {useState} from 'react';
import Car from './Car';

const Content = (props) => {
    const { carList, activePage, setActivePage } = props;
    console.log(carList);
    return <section id="gallery-page-content" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <div class="row popular-car-gird">
                {carList && carList.map((car) => {
                  const { brand, model, color, seat, car_price, rent_price, image, status } = car;
                  return <Car 
                  brand={brand}
                  model={model}
                  seat={seat}
                  carPrice={car_price}
                  color={color} 
                  rentPrice={rent_price}
                  image={image}
                  status={status}
                  />
                })
                }
            </div>
        </div>
      </div>
      <div className="row">
  <div className="col-lg-12">
    <div className="page-pagi">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li onClick={()=> setActivePage(activePage - 1)} className="page-item"><a className="page-link">Previous</a></li>
          {[1,2,3,4].map(paging =>
          <li
            onClick={()=> setActivePage(paging - 1)}
            className={`page-item ${paging - 1 === activePage && 'active'}`}>
              <a className="page-link">
                {paging}
              </a>
          </li>)}
          <li onClick={()=> setActivePage(activePage + 1)} className="page-item"><a className="page-link">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
    </div>
  </section>
  
}

export default Content;