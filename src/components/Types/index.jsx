import React from 'react';
import Grid from '@material-ui/core/Grid';
import house from '../../house.png';

const Types = ({ types }) => (
  <div className="m-4">
    <h1 className="header-med house-header-2" style={{ textAlign: 'left', fontWeight: 'bold' }}>The types</h1>
    <img src={house} className="house" alt="logo" />
    <div className="mt-5">
    {types.map(type => {
        return <div>{type}</div>
      })}
   </div>
  </div>
)
export default Types;