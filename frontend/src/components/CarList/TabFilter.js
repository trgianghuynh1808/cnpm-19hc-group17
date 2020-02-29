import React, { useState } from 'react';

const TabFilter = (props) => {
    const { brandList, activeBrand, setActiveBrand } = props;

    const onClick = (brand) => setActiveBrand(brand);

    return <div className="popucar-menu text-center">
      {brandList && brandList.map((brand) =>
      {
        const { name } = brand;
        const upperCaseBrand = name.toUpperCase();
        return <a onClick={()=> onClick(upperCaseBrand)} className={activeBrand === upperCaseBrand ? 'active' : ''}>{upperCaseBrand}</a>
      }
      )}
    {/* <a onClick={()=> onClick('BMW')} className={brand === 'BMW' ? 'active' : ''}>BMW</a>
    <a onClick={()=> onClick('Audi')} className={brand === 'Audi' ? 'active' : ''}>Audi</a>
    <a onClick={()=> onClick('Toyota')} className={brand === 'Toyota' ? 'active' : ''}>Toyota</a>
    <a onClick={()=> onClick('Honda')} className={brand === 'Honda' ? 'active' : ''}>Honda</a>
    <a onClick={()=> onClick('Ford')} className={brand === 'Ford' ? 'active' : ''}>Ford</a>
    <a onClick={()=> onClick('Mazda')} className={brand === 'Mazda' ? 'active' : ''}>Mazda</a> */}
  </div>
}

export default TabFilter;