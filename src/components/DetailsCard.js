import React from 'react';

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
    <div className="details-card h-screen">
      <div
        className={`img-text relative ${
          country === 'Gambia' || country === 'Central African Republic'
            ? 'flex '
            : ''
        }`}>
        <img
          src={imageUrl}
          alt={`${country}`}
          className="card-image w-[45%] "
        />
        <div
          className={`details-text  shadow-xl p-3 bg-pink-100 ml-3 w-[50%]  top-3 right-2 ${
            country !== 'Gambia' && country !== 'Central African Republic'
              ? 'absolute'
              : ''
          }`}>
          <h1 className="card-title uppercase text-pink-500 font-bold text-center">
            {country}
          </h1>
          <h3 className="card-capital text-center underline">{capital}</h3>
          <p className="lon-lat">Longitude: {longitude}</p>
          <p className="lon-lat">Latitude: {latitude}</p>
        </div>
      </div>
      <hr className="separator my-3" />

      <button
        type="button"
        className="index bg-pink-500 text-gray-100 uppercase px-3 py-1 rounded ml-auto hover:bg-pink-400 block ">
        {' '}
        index = {aqIndex}
      </button>

      <h2 className="break-down font-bold text-2xl uppercase text-center my-4">
        Air Quality Index breakdown
      </h2>
      <table class="table-fixed">
        <thead>
          <tr className="bg-pink-600 text-white odd:border border border-solid ">
            <th className="header w-1/3">Symbol</th>
            <th className="header w-1/3">Component name</th>
            <th className="header w-1/3">
              Concentration (μg/m<sup>3</sup>)
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              CO
            </td>
            <td className="hover:bg-pink-200 transition-all">
              Carbon Monoxide
            </td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              {co}
            </td>
          </tr>
          <tr>
            <td className="border border-solid border-l border-pink-400 hover:bg-pink-200 transition-all">
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
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              NO<sub>2</sub>
            </td>
            <td>Nitrogen dioxide</td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              {no2}
            </td>
          </tr>
          <tr>
            <td className="border border-solid border-l border-pink-400 hover:bg-pink-200 transition-all">
              O<sub>3</sub>
            </td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              Ozone
            </td>
            <td className="border border-solid border-r border-pink-400 hover:bg-pink-200 transition-all">
              {o3}
            </td>
          </tr>
          <tr>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              O<sub>3</sub>
            </td>
            <td>Ozone</td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              {o3}
            </td>
          </tr>
          <tr>
            <td className="border border-solid border-l border-pink-400 hover:bg-pink-200 transition-all">
              SO<sub>2</sub>
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
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              PM<sub>2_5</sub>
            </td>
            <td className="hover:bg-pink-200 transition-all">
              Small size particulate
            </td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              {pm25}
            </td>
          </tr>
          <tr>
            <td className="border border-solid border-l border-pink-400 hover:bg-pink-200 transition-all">
              PM<sub>10</sub>
            </td>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              {' '}
              Bigger size Particulates{' '}
            </td>
            <td className="border border-solid border-r border-pink-400 hover:bg-pink-200 transition-all">
              {pm10}
            </td>
          </tr>
          <tr>
            <td className="border border-solid border-pink-400 hover:bg-pink-200 transition-all">
              NH<sub>3</sub>
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

export default DetailsCard;
