import React from 'react';

const SliceZone = ({ sliceZone }) => {
    console.log("sliceZone", sliceZone)
  return (
    <div className="container">
      {sliceZone.map((slice, index) => {
        console.log(slice)
      })}
    </div>
  );
};

export default SliceZone;
