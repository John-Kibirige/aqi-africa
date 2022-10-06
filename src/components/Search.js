import React from 'react';
import searchIcon from '../assets/search-icon.svg';

const Search = () => {
  return (
    <form className="search-form flex">
      <input
        className="bg-gray-100 appearance-none border-2 border-pink-300  w-3/4 py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-500"
        type="text"
        placeholder="Search by country"></input>
      <button className="submit flex bg-pink-600 w-1/4 pl-1 align-middle">
        <img src={searchIcon} alt="search" className="w-5" />{' '}
        <p className="ml-2 text-white">Search</p>
      </button>
    </form>
  );
};

export default Search;
