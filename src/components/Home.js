import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/pollution';
import Common from './Common';
import HomeCard from './HomeCard';

const Home = () => {
  const { data, status } = useSelector((state) => state.pollutionData);
  const dispatch = useDispatch();
  console.log('the data at this stage is ', status, data);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, []);

  return (
    <div>
      {status === 'succeeded' &&
        data.map((value, index) => {
          const { country, imageUrl } = value;
          const { list } = value.fetched;
          if (index === 0) {
            return (
              <Link to={'details'}>
                <Common
                  imageUrl={imageUrl}
                  country={country}
                  aqIndex={list[0].main.aqi}
                />
              </Link>
            );
          } else {
            return (
              <Link to={'details'}>
                <HomeCard
                  imageUrl={imageUrl}
                  country={country}
                  aqIndex={list[0].main.aqi}
                />
              </Link>
            );
          }
        })}
    </div>
  );
};

export default Home;
