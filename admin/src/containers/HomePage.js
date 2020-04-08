import React, { useEffect, useReducer } from "react";
import { connect } from "react-redux";
import Wrapper from '../components';
import Table from '../components/Table';

const HomePage = ({ login }) => {

    return (
      <Wrapper>
        <Table />
      </Wrapper>
    );
}

export default HomePage;
