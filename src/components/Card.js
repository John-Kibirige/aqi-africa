import React from 'react';

const Card = (props) => {
  const { imageUrl, country, aqIndex } = props;
  return (
    <div className="card">
      <img src={imageUrl} alt="" className="card-image" />
      <h1 className="card-title">{country}</h1>
      <p className="aqi-value">{aqIndex}</p>
    </div>
  );
};

export default Card;
