import React, { Component } from 'react';

const TabFilter = (props) => {
    const { brand, setBrand } = props;
    const onClick = (brand) => setBrand(brand);
    return <div className="popucar-menu text-center">
    <a onClick={()=> onClick('BMW')} className={brand === 'BMW' ? 'active' : ''}>BMW</a>
    <a onClick={()=> onClick('Audi')} className={brand === 'Audi' ? 'active' : ''}>Audi</a>
    <a onClick={()=> onClick('Toyota')} className={brand === 'Toyota' ? 'active' : ''}>Toyota</a>
    <a onClick={()=> onClick('Mercedes')} className={brand === 'Mercedes' ? 'active' : ''}>Mercedes</a>
    <a onClick={()=> onClick('Ford')} className={brand === 'Ford' ? 'active' : ''}>Ford</a>
    <a onClick={()=> onClick('Mazda')} className={brand === 'Mazda' ? 'active' : ''}>Mazda</a>
  </div>
}

export default TabFilter;