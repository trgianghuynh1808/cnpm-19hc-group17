import React, { Fragment } from "react";

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

const TableComponent = ({ columnData, rowData }) => {
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
      <style jsx>{`
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
      `}</style>
    </Fragment>
  );
};

export default TableComponent;
