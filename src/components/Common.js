import React from 'react';

const Common = (props) => {
  const { imageUrl, country, aqIndex } = props;
  return (
    <div className="flex bg-pink-500 items-center col-span-2">
      <div className="image-container bg-">
        <img
          src={imageUrl}
          alt={`${country}`}
          className="common-image w-52 bg-blend-overlay"
        />
      </div>
      <div className="common-text">
        <h1 className="font-bold text-2xl uppercase text-white">{country}</h1>
        <p className="text-white">Air quality index: {aqIndex}</p>
      </div>
    </div>
  );
};

export default Common;
