import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Footer from '../../components/Footer';
import Content from './components/Content';
import queryString from 'query-string';
import getCarDetails from '../../services/getCarDetails';

  const CarDetailPage = (props) => {
    const [ car, setCar ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    useEffect(() => {
      const { location: { search } } = props;
      const queryObject = queryString.parse(search);
      const { id = 1 } = queryObject;
      getCarDetails(id)
      .then((data) => {
        setCar(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setCar(null);
        setIsLoading(false);
      })
    },[]);
    return (
      <>
        <Header/>
        <PageTitle title="Our Gallery" />
        {!isLoading && <Content {...car} />}
        <Footer/>
    </>
    );
  }

export default CarDetailPage;