import React from 'react';
import PropTypes from 'prop-types';

const DetailsCard = (props) => {
  const {
    imageUrl,
    country,
    aqIndex,
    latitude,
    longitude,
    capital,
    co,
    no,
    no2,
    o3,
    so2,
    pm25,
    pm10,
    nh3,
  } = props;
  return (
    <div className="details-card min-h-screen h-full details-container p-4 bg-slate-200 sm:px-7 md:pt-8">
      <div className="img-text relative flex sm:flex sm:gap-4">
        <img
          src={imageUrl}
          alt={`${country}`}
          className="card-image h-[28vh] object-contain w-[45%] sm:h-[36vh] sm:object-contain md:w-2/5"
        />
        <div className="details-text  shadow-xl p-3 bg-white ml-3 w-[50%]  top-3 right-2 $sm:static md:w-3/12">
          <h1 className="card-title uppercase text-pink-500 font-bold text-center sm:text-2xl sm:mt-2">
            {country}
          </h1>
          <h3 className="card-capital text-center underline sm:text-xl sm:no-underline sm:font-bold sm:my-2">
            {capital}
          </h3>
          <p className="lon-lat sm:text-xl sm:text-center sm:mb-2">
            Longitude:
            {' '}
            {longitude}
          </p>
          <p className="lon-lat sm:text-xl sm:text-center sm:mb-2">
            Latitude:
            {' '}
            {latitude}
          </p>
        </div>

        <div className="rubric-table ml-auto mr-14 hidden md:block mt-10">
          <table className="table-fixed">
            <thead>
              <tr>
                <th className="p-1">Rubric</th>
                <th className="p-1">Index</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="p-1 font-normal border-b border-pink-400 border-r">
                  Good
                </th>
                <th className="p-1 font-normal border-b border-pink-400 ">1</th>
              </tr>
              <tr>
                <th className="p-1 font-normal border-b border-pink-400 border-r">
                  Fair
                </th>
                <th className="p-1 font-normal border-b border-pink-400 ">2</th>
              </tr>
              <tr>
                <th className="p-1 font-normal border-b border-pink-400 border-r">
                  Moderate
                </th>
                <th className="p-1 font-normal border-b border-pink-400 ">3</th>
              </tr>
              <tr>
                <th className="p-1 font-normal border-b border-pink-400 border-r">
                  Poor
                </th>
                <th className="p-1 font-normal border-b border-pink-400 ">4</th>
              </tr>
              <tr>
                <th className="p-1 font-normal  border-pink-400 border-r">
                  Very Poor
                </th>
                <th className="p-1 font-normal ">5</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button
        type="button"
        className="index bg-pink-500 text-gray-100 uppercase px-3 sm:px-5 py-1 sm:py-2 sm:text-white sm:font-bold sm:text-lg rounded ml-auto hover:bg-pink-400 block mt-[18px] mr-3 sm:mt-7 sm:mr-7"
      >
        index =
        {' '}
        {aqIndex}
      </button>

      <h2 className="break-down font-bold text-2xl uppercase text-center my-4 sm:text-3xl">
        Air Quality Index breakdown
      </h2>

      <table className="table-fixed sm:w-full mb-6">
        <thead>
          <tr className="bg-pink-600 text-white odd:border border border-solid">
            <th className="header w-1/3 sm:p-3 sm:text-lg">Symbol</th>
            <th className="header w-1/3 sm:p-3 sm:text-lg">Component name</th>
            <th className="header w-1/3 sm:p-3 sm:text-lg">
              Concentration (??g/m
              <sup>3</sup>
              )
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all sm:p-2">
              CO
            </td>
            <td className="hover:bg-pink-200 transition-all border border-solid border-pink-400">
              Carbon Monoxide
            </td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              {co}
            </td>
          </tr>
          <tr>
            <td className="border border-solid border-l border-pink-400 hover:bg-pink-200 transition-all sm:p-2">
              NO
            </td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              Nitrogen monoxide
            </td>
            <td className="border border-solid border-r border-pink-400 hover:bg-pink-200 transition-all">
              {no}
            </td>
          </tr>
          <tr>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all sm:p-2">
              NO
              <sub>2</sub>
            </td>
            <td>Nitrogen dioxide</td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              {no2}
            </td>
          </tr>
          <tr>
            <td className="border border-solid border-l border-pink-400 hover:bg-pink-200 transition-all sm:p-2">
              O
              <sub>3</sub>
            </td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              Ozone
            </td>
            <td className="border border-solid border-r border-pink-400 hover:bg-pink-200 transition-all">
              {o3}
            </td>
          </tr>

          <tr>
            <td className="border border-solid border-l border-pink-400 hover:bg-pink-200 transition-all sm:p-2">
              SO
              <sub>2</sub>
            </td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              {' '}
              Sulphur dioxide
            </td>
            <td className="border border-solid border-r border-pink-400 hover:bg-pink-200 transition-all">
              {so2}
            </td>
          </tr>
          <tr>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all sm:p-2">
              PM
              <sub>2_5</sub>
            </td>
            <td className="hover:bg-pink-200 transition-all">
              Small size particulates
            </td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              {pm25}
            </td>
          </tr>
          <tr>
            <td className="border border-solid border-l border-pink-400 hover:bg-pink-200 transition-all sm:p-2">
              PM
              <sub>10</sub>
            </td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              {' '}
              Bigger size Particulates
            </td>
            <td className="border border-solid border-r border-pink-400 hover:bg-pink-200 transition-all">
              {pm10}
            </td>
          </tr>
          <tr>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all sm:p-2">
              NH
              <sub>3</sub>
            </td>
            <td className="border border-solid border-b border-pink-400 hover:bg-pink-200 transition-all">
              Ammonia
            </td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              {nh3}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

DetailsCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  aqIndex: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  capital: PropTypes.string.isRequired,
  co: PropTypes.number.isRequired,
  no: PropTypes.number.isRequired,
  no2: PropTypes.number.isRequired,
  o3: PropTypes.number.isRequired,
  so2: PropTypes.number.isRequired,
  pm25: PropTypes.number.isRequired,
  pm10: PropTypes.number.isRequired,
  nh3: PropTypes.number.isRequired,
};

export default DetailsCard;
