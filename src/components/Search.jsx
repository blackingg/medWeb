import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <form
        onSubmit={handleSearch}
        className="flex items-center"
      >
        <input
          type="text"
          placeholder="Search medical information..."
          className="w-full px-4 py-2 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-500 text-white px-6 py-2 rounded-r-lg hover:bg-purple-600 transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
