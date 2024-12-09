
import React, { useState, useContext } from "react";
import { FaMagnifyingGlass } from 'react-icons/fa6';
import './SearchBar.css';
import { weatherContext } from "../App"; 

function SearchBar() {
  const [city, setCity] = useState('');
  const { search } = useContext(weatherContext);  

  const handleSearch = () => {
    if (city) {
      search(city);  
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search City"
        value={city}
        onChange={(e) => setCity(e.target.value)}  
      />
      <div className="search-icon" onClick={handleSearch}>
        <FaMagnifyingGlass />
      </div>
    </div>
  );
}

export default SearchBar;
