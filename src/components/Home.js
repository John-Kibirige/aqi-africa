import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleData } from './redux/pollution';

const Home = () => {
  const { data, status } = useSelector((state) => state.pollutionData);
  const dispatch = useDispatch();

  useEffect(() => {
    for (let obj of data) {
      dispatch(fetchSingleData(obj));
    }
  }, []);
  return (
    <div>
      <Link to={'details'}>DETAILS</Link>
    </div>
  );
};

export default Home;
