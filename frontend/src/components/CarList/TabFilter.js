import React from 'react';

const TabFilter = props => {
  const { carListGroupByBrand, activeBrand, setActiveBrand } = props;

  const onClick = brand => setActiveBrand(brand);

    return <div className="popucar-menu text-center">
      {carListGroupByBrand && carListGroupByBrand.map((brand, index) =>
      {
        const { name } = brand;
        const upperCaseBrand = name.toUpperCase();
        return <a href={`#${name}`} key={index} onClick={()=> onClick(upperCaseBrand)} className={activeBrand === upperCaseBrand ? 'active' : ''}>{upperCaseBrand}</a>
      }
      )}
  </div>
}

export default TabFilter;
