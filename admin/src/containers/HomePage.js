import React from "react";
import Wrapper from '../components';
import Table from '../components/Table';

const HomePage = ({ login }) => {
  document.title = 'Dashboard';
    return (
      <Wrapper>
        <Table />
      </Wrapper>
    );
}

export default HomePage;
