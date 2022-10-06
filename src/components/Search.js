import searchIcon from '../assets/search-icon.svg';

const Search = ({ nameState, handleOnChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="search-form flex justify-center" onSubmit={handleSubmit}>
      <input
        className="bg-gray-100 appearance-none border-2 border-pink-400 w-10/12 py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-500"
        type="text"
        placeholder="Search by country"
        value={nameState}
        name={nameState}
        onChange={handleOnChange}></input>
      <button className="submit flex bg-pink-600 pl-1 align-middle w-2/12 justify-center">
        <img src={searchIcon} alt="search" className="w-5 block" />
      </button>
    </form>
  );
};

export default Search;
