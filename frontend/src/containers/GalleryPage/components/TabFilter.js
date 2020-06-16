import React from 'react';

const TabFilter = props => {
  const { brands, filterObj, setFilterObj, immediatedSubmit } = props;
  const { brand: activeBrand } = filterObj;

    return (
      <>
        <div style={{ margin: '20px 0' }} className="popucar-menu text-center">
          <a href={`#ALL`} 
             onClick={()=> {
              setFilterObj({type: 'brand', payload: '' });
              immediatedSubmit({type: 'brand', value: '' });
             }}
             className={ activeBrand === '' ? 'active' : ''}>
               ALL
          </a>
        </div>
        <div className="popucar-menu text-center">
          {brands && brands.map((brand, index) =>
          {
            const { id } = brand;
            const upperCaseBrand = id.toUpperCase();
            return <a href={`#${id}`} key={index} 
                      onClick={()=> {
                        setFilterObj({type: 'brand', payload: id });
                        immediatedSubmit({type: 'brand', value: id });
                      }}
            className={activeBrand === id ? 'active' : ''}>{upperCaseBrand}</a>
          }
          )}
        </div>
      </>
)}

export default TabFilter;
