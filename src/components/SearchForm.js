import React, { useState } from "react";
import PropTypes from 'prop-types';
import '../styles/search-form.css';

const SearchForm = (props) => {

  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };




    return (
        <div className="searchForm">
        <span>Search for a different city here:</span><input type="text" onChange={handleInputChange} value={searchText} placeholder="Enter a town or city name" />
        <button className="btn2" onClick={() => props.searchCity(searchText)} > 
        Search 
        </button>
        </div>
        ) 
}

SearchForm.propTypes = {
  searchCity: PropTypes.func.isRequired,
};

  

export default SearchForm;