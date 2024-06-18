const SearchBar = () => (
  <div className="flex gap-4 max-w-[560px] w-[95%] mx-auto m-5 h-12 lg:w-[500px]   ">
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search for Restaurants and cuisine"
      className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow"
    ></input>
    <button
      type="submit"
      className="bg-orange-400 text-white p-2 sm:px-8 rounded-md"
    >
      Search
    </button>
  </div>
);

export default SearchBar;
