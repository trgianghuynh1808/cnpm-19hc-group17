import React from 'react';

const TabFilter = props => {
  const { brandList, activeBrand, setActiveBrand } = props;

  const onClick = brand => setActiveBrand(brand);

    return <div className="popucar-menu text-center">
      {brandList && brandList.map((brand, index) =>
      {
        const { name } = brand;
        const upperCaseBrand = name.toUpperCase();
        return <a key={index} onClick={()=> onClick(upperCaseBrand)} className={activeBrand === upperCaseBrand ? 'active' : ''}>{upperCaseBrand}</a>
      }
      )}
  </div>
}

export default TabFilter;
