import React from "react";
import LayoutPage from '../pages/LayoutPage';
const demoItemList = [
  {
    title: 'Dashboard',
    onClick: console.log('Dashboard'),
  },
  {
    title: 'DS Xe Bảo Dưỡng',
    onClick: console.log('DS Xe Bảo Dưỡng'),
  },
  {
    title: 'Cập Nhật Xe Sau Trả',
    onClick: console.log('Cập Nhật Xe Sau Trả'),
  }
];

const ExampleComponent = () => {
  return (
  <LayoutPage
    verticalBarItemList={demoItemList}
    headerTitle="Bộ phận bảo dưỡng"
    name="Bao Hoang"
    cardTitle="QL Xe Bảo Dưỡng"
  />
  );
};

export default ExampleComponent;
