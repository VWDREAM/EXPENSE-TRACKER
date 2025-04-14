import React from "react";

function SearchBar({ onSearch }) {
  return ( // Add the return statement here
    <div className="mb-4"> {/* Added some margin-bottom for spacing */}
      <label htmlFor="search" className="block text-gray-700 text-sm font-bold mb-2">
        Search Expenses:
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search by description or name"
        onChange={onSearch}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 focus:border-blue-500"
      />
    </div>
  );
}

export default SearchBar;
