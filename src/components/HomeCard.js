import React from 'react';
import rightArrow from '../assets/right-arrow.svg';

const HomeCard = (props) => {
  const { imageUrl, country, aqIndex } = props;
  return (
    <div className="home-card ">
      <img src={rightArrow} alt="right arrow" className="arrow w-7" />
      <img src={imageUrl} alt="country map" className="map w-full" />
      <div className="home-card-text text-right">
        <h1 className="home-card-title uppercase text-xl">{country}</h1>
        <p>{aqIndex}</p>
      </div>
    </div>
  );
};

export default HomeCard;
