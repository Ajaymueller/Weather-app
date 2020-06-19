import React, { useState } from "react";
import PropTypes from 'prop-types';

const SearchForm = (props) => {

  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };




    return (
        <div>
        <input type="text" onChange={handleInputChange} value={searchText} placeholder="Enter a town or city name" />
        <button onClick={() => props.searchCity(searchText)}>Search</button>
        </div>
        ) 
}

SearchForm.propTypes = {
  searchCity: PropTypes.func.isRequired,
};

  

export default SearchForm;