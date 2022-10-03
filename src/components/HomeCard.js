import React from 'react';
import rightArrow from '../assets/right-arrow.svg';

const HomeCard = (props) => {
  const { cardImage, country, aqIndex } = props;
  return (
    <div>
      <img src={rightArrow} alt="right arrow" />
      <img src={cardImage} alt="country map" />
      <h1>{country}</h1>
      <p>{aqIndex}</p>
    </div>
  );
};

export default HomeCard;
