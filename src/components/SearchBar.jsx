import React from "react";

function SearchBar({onSearch}){
    (
        <div>
          <label htmlFor="search">Search Expenses:</label>
          <input type="text" id="search" placeholder="Search by description or name" onChange={onSearch} />
        </div>
      );
    }

    export default SearchBar;
