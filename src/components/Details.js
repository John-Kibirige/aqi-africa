import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import DetailsCard from './DetailsCard';
import Common from './Common';

const Details = () => {
  const { data } = useSelector((state) => state.pollutionData);
  const path = useLocation();
  const [, , countryId] = path.pathname.split('/');

  const filtered = data.filter((obj) => obj.id === countryId);
  const { imgUrl, country, latitude, longitude, capital, fetched } =
    filtered[0];

  const list = fetched.list;
  const { aqi } = list[0].main;
  const { co, no, no2, so2, o3, nh3, pm2_5, pm10 } = list[0].components;

  return (
    <section className="">
      <Common isDetail={true} />
      {
        <DetailsCard
          imageUrl={imgUrl}
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
    </section>
  );
};

export default Details;
