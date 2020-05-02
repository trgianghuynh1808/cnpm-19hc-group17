import React from "react";

export default ({ title, data, columns, customHeader }) => {
  return (
    <div className="main-card mb-3 card">
      <div className="card-header">
        {title}
        <div className="btn-actions-pane-right">
          {customHeader}
          {/* <div role="group" className="btn-group-sm btn-group">
              <button className="active btn btn-focus">Last Week</button>
              <button className="btn btn-focus">All Month</button>
            </div> */}
        </div>
      </div>
      <div>
        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
          <thead>
            <tr>
              {columns.map((column, index) => {
                const { Header, className } = column;
                return (
                  <th className={className} key={index}>
                    {Header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((row, index) => {
                return (
                  <tr key={index}>
                    {columns.map((column, indexCol) => {
                      return (
                        <td key={indexCol}>
                          {column.component(row[`${column.accessor}`])}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* <div className="d-block text-center card-footer">
        <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
          <i className="pe-7s-trash btn-icon-wrapper"> </i>
        </button>
        <button className="btn-wide btn btn-success">Save</button>
      </div> */}
    </div>
  );
};
