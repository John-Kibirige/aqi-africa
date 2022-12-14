import React from 'react';
import PropTypes from 'prop-types';
import rightArrow from '../assets/right-arrow.svg';

const HomeCard = (props) => {
  const { imageUrl, country = 'No Country found!!', aqIndex } = props;
  return (
    <div className="home-card rounded flex-col flex justify-between">
      <img
        src={rightArrow}
        alt="right arrow"
        className="arrow w-7 block ml-auto m-4"
      />
      <img
        src={imageUrl}
        alt="country map"
        className="map w-full h-32 sm:h-40 object-contain"
      />

      <div className="home-card-text text-right">
        <h1 className="home-card-title uppercase text-xl text-pink-500 sm:text-pink-700 sm:mt-2 sm:mr-3">
          {country}
        </h1>
        <p className="text-center sm:text-xl">
          Air Quality Index
          <span className="bg-pink-500 inline-block text-white p-1 px-3 m-1 font-bold  rounded-3xl">
            {' '}
            {aqIndex}
          </span>
        </p>
      </div>
    </div>
  );
};

HomeCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  aqIndex: PropTypes.number.isRequired,
};

export default HomeCard;
