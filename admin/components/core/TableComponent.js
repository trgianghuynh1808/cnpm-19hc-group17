import React, { Fragment } from "react";
import { isEmpty } from "lodash/fp";

const renderRowData = (row, columnData) => {
  let render = [];
  let i = 0;
  for (const column of columnData) {
    let curValue = "";
    let curData = row[column.key];

    if (column.renderComponent) {
      curValue = column.renderComponent(curData);
    } else curValue = curData;

    if (i === 0)
      render.push(
        <th scope="row" key={i}>
          {curValue}
        </th>
      );
    else render.push(<td key={i}>{curValue}</td>);
    i++;
  }

  return render;
};

const renderPagination = (pages, curPage, doAPI) => {
  let render = [];
  for (let i = 1; i <= pages; i++) {
    render.push(
      <li
        className={`page-item ${curPage == i ? "active" : ""}`}
        key={i}
        onClick={() => {
          doAPI(i);
        }}
      >
        <div className="page-link">{i}</div>
      </li>
    );
  }

  return render;
};

const TableComponent = ({ columnData, rowData, pageInfo, doAPI }) => {
  const { isPrev, isNext, curPage, pages } = pageInfo || {};

  return (
    <Fragment>
      <table className="table table-hover table-core">
        <thead>
          <tr>
            {columnData.map((column, index) => (
              <th scope="col" key={index}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, index) => (
            <tr key={index}>{renderRowData(row, columnData)}</tr>
          ))}
        </tbody>
      </table>
      {!isEmpty(pageInfo) && (
        <nav className="w-100 core-pagination" aria-label="...">
          <ul className="pagination justify-content-end">
            <li className={`page-item ${isPrev ? " " : "disabled"}`}>
              <div
                className="page-link"
                tabIndex={-1}
                onClick={() => {
                  doAPI(curPage - 1);
                }}
              >
                {"<<"}
              </div>
            </li>
            {renderPagination(pages, curPage, doAPI)}
            <li className={`page-item ${isNext ? " " : "disabled"}`}>
              <div
                className="page-link"
                onClick={() => {
                  doAPI(curPage + 1);
                }}
              >
                {">>"}
              </div>
            </li>
          </ul>
        </nav>
      )}

      <style jsx global>{`
        .table-core table,
        thead,
        tr,
        tbody,
        th,
        td {
          text-align: center;
        }

        .table-core td {
          text-align: center;
        }

        .core-pagination .page-link {
          cursor: pointer !important;
        }
      `}</style>
    </Fragment>
  );
};

export default TableComponent;
