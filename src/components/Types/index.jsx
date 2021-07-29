import React from 'react';
import house from '../../house.png';

const Types = ({ typesRow1, typesRow2, typesRow3 }) => (
  <div className="m-4">
    <h1 className="header-med house-header-2" style={{ textAlign: 'left', fontWeight: 'bold' }}>The types</h1>
    <div className="mt-6 mb-6 med-on-hover">
      <div>
        <img src={house} className="house" alt="logo" style={{ width: '25%', height: 'auto' }} />
      </div>
    </div>

    <div className="m-2">
    
      <div className="row justify-content-start">
        <div className="mt-5 d-flex justify-content-around w-100">
          {typesRow1.map((type) => {
            return (
              <div 
                className="col-2 large-on-hover" 
                style={{ cursor: 'pointer', width: '20%' }}>
                  <span style={{ color: `${type.textColor}`, fontWeight: 'bold' }}>
                    {type.name}
                  </span>
                </div>
              )
          })}
        </div>
      </div>
      <div className="row justify-content-start">
        <div className="mt-5 d-flex justify-content-around w-100">
          {typesRow2.map((type) => {
            return (
              <div 
                className="col-2 large-on-hover" 
                style={{ cursor: 'pointer', width: '20%' }}>
                  <span style={{ color: `${type.textColor}`, fontWeight: 'bold' }}>
                    {type.name}
                  </span>
                </div>
              )
          })}
        </div>
      </div>
      <div className="row justify-content-start">
        <div className="mt-5 d-flex justify-content-around w-100">
          {typesRow3.map((type) => {
            return (
              <div 
                className="col-2 large-on-hover" 
                style={{ cursor: 'pointer', width: '20%' }}>
                  <span style={{ color: `${type.textColor}`, fontWeight: 'bold' }}>
                    {type.name}
                  </span>
                </div>
              )
          })}
        </div>
      </div>

    </div>

  </div>
)
export default Types;