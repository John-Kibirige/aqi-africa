import PropTypes from 'prop-types';
import searchIcon from '../assets/search-icon.svg';

const Search = ({ nameState, handleOnChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="search-form flex sm:mt-7 sm:mb-4 md:w-8/12 md:mx-auto mx-4"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-gray-100 appearance-none border-2 border-pink-400 w-10/12 py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-500 sm:p-2 md:p-3 text-xl"
        type="text"
        placeholder="Search by country"
        value={nameState}
        name={nameState}
        onChange={handleOnChange}
      />
      <button
        type="button"
        className="submit flex bg-pink-600 pl-1 align-middle w-2/12 justify-center"
      >
        <img src={searchIcon} alt="search" className="w-5 block md:w-6" />
      </button>
    </form>
  );
};

Search.propTypes = {
  nameState: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};
export default Search;
