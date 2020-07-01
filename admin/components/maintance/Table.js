import React, { useMemo } from 'react';
import TableComponent from "../core/TableComponent";
import Actions from './Actions';
import { capitalize } from '../../utils/common';

const BadgeComponent = ({ content, status }) => {
  return (
    <>
      <span className={`badge badge-${status} p-2`}>
        {content}
      </span>
      <style jsx>
        {`
          .badge {
            color: white;
          }
        `}
      </style>
    </>
  );
};

const COLUMN_DATA = [
  {
    name: "Mã xe",
    key: "id",
  },
  {
    name: "Hiệu xe",
    key: "model",
  },
  {
    name: "Tình trạng",
    key: "status",
    renderComponent: (curData) => {
      let curStatus = "";
      let content = "";
      switch (curData) {
        case "need-check":
          curStatus = "danger";
          content = "Cần kiểm tra";
          break;
        case "maintancing":
          curStatus = "warning";
          content = "Đang bảo dưỡng";
          break;
        default:
          curStatus = "primary";
          break;
      }

      return <BadgeComponent content={content} status={curStatus} />;
    },
  },
  {
    name: "Hành động",
    key: "actions",
    renderComponent: (actionList) => {
      return <Actions actionList={actionList}/>;
    },
  },
];

const Table = (props) => {
  const { carList = [], pageInfo, pagingOnClick, editOnClick } = props;
  const formatCarList = (carList) => {
    return carList.map((car) => {
      const { id, model } = car;
      return {
        ...car,
        id: capitalize(id).split('-')[0],
        model: capitalize(model),
        status: 'maintancing',
        actions: [{ iconName: 'edit', onClick: () => editOnClick(id) }]
      }
    });
  };

  const formattedCarList = useMemo(() => formatCarList(carList), [carList]);
  return (
    <TableComponent
      columnData={COLUMN_DATA}
      rowData={formattedCarList}
      pageInfo={pageInfo}
      doAPI={pagingOnClick}
    />
  );
};

export default Table;