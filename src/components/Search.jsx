import React, { useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import debounce from "lodash/debounce";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce the search to avoid excessive API calls or filtering
  const debouncedSearch = useCallback(
    debounce((term) => {
      onSearch(term);
    }, 300),
    [onSearch]
  );

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    debouncedSearch(newSearchTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="max-w-xl mx-auto my-8">
      <form
        onSubmit={handleSubmit}
        className="flex items-center"
      >
        <input
          type="text"
          placeholder="Search ..."
          className="w-full px-4 py-[1.9%] rounded-l-lg border-2 focus:outline-none focus:border-purple-500"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-purple-500 text-white px-6 py-[3%] rounded-r-lg hover:bg-purple-600 transition duration-300"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
