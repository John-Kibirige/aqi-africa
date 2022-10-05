import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Details = () => {
  const { data } = useSelector((state) => state.pollutionData);
  const path = useLocation();
  const [, , countryId] = path.pathname.split('/');

  console.log('the country id is ', countryId);

  const filtered = data.filter((obj) => obj.id === countryId);
  const { imageUrl, country, latitude, longitude, capital, fetched } =
    filtered[0];

  console.log('the filteted array is ', filtered);
  const list = fetched.list;
  const { aqi } = list[0].main.aqi;
  const { co, no, no2, so2, o3, nh3, pm2_5, pm10 } = list[0].components;

  return (
    <div>
      {
        <DetailsCard
          imageUrl={imageUrl}
          country={country}
          aqIndex={aqi}
          latitude={latitude}
          longitude={longitude}
          capital={capital}
          co={co}
          no={no}
          no2={no2}
          o3={o3}
          so2={so2}
          pm25={pm2_5}
          pm10={pm10}
          nh3={nh3}
        />
      }
    </div>
  );
};

export default Details;
