import React from 'react';
import { Link } from 'react-router-dom';
import backChevron from '../assets/back-chevron.svg';

const Common = (props) => {
  const { isDetail = false } = props;
  return (
    <header className="header">
      <nav className="nav flex justify-center relative items-center">
        {isDetail && (
          <Link to={'/'}>
            <img
              src={backChevron}
              alt="back-arrow"
              className="chevron w-7 hover:border border-solid border-pink-600 p-1 "
            />
          </Link>
        )}
        <h2 className="py-5 text-pink-500 font-bold text-xl w-10/12 text-center">
          {isDetail ? 'Details' : 'Home'}
        </h2>
      </nav>
    </header>
  );
};

export default Common;
