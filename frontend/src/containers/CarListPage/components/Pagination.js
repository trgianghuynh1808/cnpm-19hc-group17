import React from 'react';

const Pagination = (props) => {
    const { pageCount = 0, activePage, setActivePage } = props;
    const pagingList = [];
    for(let i = 1; i <= pageCount; i++ ){
        pagingList.push(i);
    }
    const href = `#${activePage + 1}`
    return (
    <div className="page-pagi">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li onClick={() => {
            if(activePage === 0) return;
            setActivePage(activePage - 1);
            }}
            className="page-item">
              <a href={href} className="page-link">
                Previous
              </a>
          </li>
          {pagingList.map(paging =>
          <li
            key={paging}
            onClick={()=> setActivePage(paging - 1)}
            className={`page-item ${paging - 1 === activePage && 'active'}`}>
              <a href={href} className="page-link">
                {paging}
              </a>
          </li>)}
          <li onClick={()=> {
            if(activePage === pageCount - 1) return;
            setActivePage(activePage + 1)
            }} 
            className="page-item">
              <a href={href} className="page-link">
                Next
              </a>
            </li>
        </ul>
      </nav>
    </div>
)
}

export default Pagination;