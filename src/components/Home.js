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

  const sequencyForAddingColors = [
    1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33, 36, 37, 40,
    41, 44, 45, 48, 49, 52, 53, 56, 57, 60,
  ];

  return (
    <div className="card-wrapper grid grid-cols-2">
      {status === 'succeeded' &&
        data.map((value, index) => {
          const { country, imgUrl } = value;
          const { list } = value.fetched;
          if (index === 0) {
            return (
              <Link to={'details'} className="col-span-2">
                <Common
                  imageUrl={imgUrl}
                  country={country}
                  aqIndex={list[0].main.aqi}
                />
              </Link>
            );
          } else {
            return (
              <Link
                to={'details'}
                className={`${sequencyForAddingColors.includes(index) ? 'bg-pink-600' : 'bg-pink-700'}`}>
                <HomeCard
                  imageUrl={imgUrl}
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
