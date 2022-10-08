import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, updateRecentSearch } from '../redux/pollution';
import Search from './Search';
import HomeCard from './HomeCard';
import stringComparator from '../script';

import Africa from './Africa';
import Common from './Common';

const Home = () => {
  const { data, status, recentSearch } = useSelector(
    (state) => state.pollutionData
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [dispatch, status]);

  // search
  const [searchState, setSearchState] = useState(recentSearch);
  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchState(value);
  };

  // update recent search
  useEffect(() => {
    dispatch(updateRecentSearch(searchState));
  }, [dispatch, searchState]);

  const sequencyForAddingColors = [
    1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33, 36, 37, 40,
    41, 44, 45, 48, 49, 52, 53, 56, 57, 60,
  ];

  return (
    <section className="home-section">
      <Common />
      <Africa />
      <Search handleOnChange={handleOnChange} nameState={searchState} />

      <div className="card-wrapper grid grid-cols-2 gap-4 sm:gap-6 pt-4 md:grid-cols-3 lg:grid-cols-4  p-4 sm:p-6">
        {searchState
          ? status === 'succeeded' &&
            data
              .filter((obj) => {
                const { country } = obj;
                if (searchState) {
                  return stringComparator(searchState, country);
                }
                return false;
              })
              .map((value, index) => {
                const { country, imgUrl, id } = value;
                const { list } = value.fetched;
                return (
                  <Link
                    key={id}
                    to={`details/${id}`}
                    className={`${
                      sequencyForAddingColors.includes(index + 1)
                        ? 'bg-slate-300'
                        : 'bg-slate-200 md:bg-slate-300'
                    } shadow-lg rounded p-2 sm:hover:scale-[1.03]`}>
                    <HomeCard
                      imageUrl={imgUrl}
                      country={country}
                      aqIndex={list[0].main.aqi}
                      key={id}
                    />
                  </Link>
                );
              })
          : status === 'succeeded' &&
            data.map((value, index) => {
              const { country, imgUrl, id } = value;
              const { list } = value.fetched;
              return (
                <Link
                  key={id}
                  to={`details/${id}`}
                  className={`${
                    sequencyForAddingColors.includes(index + 1)
                      ? 'bg-slate-300'
                      : 'bg-slate-200 md:bg-slate-300'
                  } shadow-lg rounded p-2 hover:scale-[1.02] sm:hover:scale-[1.03] transition-all`}>
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
