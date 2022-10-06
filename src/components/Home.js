import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/pollution';
import Search from './Search';
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

  // search
  const [searchState, setSearchState] = useState('');
  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchState(value);
  };

  const sequencyForAddingColors = [
    1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33, 36, 37, 40,
    41, 44, 45, 48, 49, 52, 53, 56, 57, 60,
  ];

  return (
    <section className="home-section p-4">
      <Search handleOnChange={handleOnChange} nameState={searchState} />
      <div className="card-wrapper grid grid-cols-2 gap-3 pt-4">
        {status === 'succeeded' &&
          data.map((value, index) => {
            const { country, imgUrl, id } = value;
            const { list } = value.fetched;
            return (
              <Link
                to={`details/${id}`}
                className={`${
                  sequencyForAddingColors.includes(index + 1)
                    ? 'bg-slate-300'
                    : 'bg-slate-200'
                } shadow-lg rounded p-2`}>
                <HomeCard
                  imageUrl={imgUrl}
                  country={country}
                  aqIndex={list[0].main.aqi}
                  key={id}
                />
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default Home;
