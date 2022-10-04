import React from 'react';

const Common = (props) => {
  const { imageUrl, country, aqIndex } = props;
  return (
    <div>
      <img src={imageUrl} alt="" />
      <h1>{country}</h1>
      <p>{aqIndex}</p>
    </div>
  );
};

export default Common;
