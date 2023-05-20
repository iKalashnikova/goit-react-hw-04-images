
import React, { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import './App.css'
import PropTypes from 'prop-types';
const App = () => {
  const [searchText, setIssearchText] = useState('')
 
  const handleSearchFormSubmit = (searchText) => {
    setIssearchText(searchText);
  };

   
    return (
      <div className="App">
        <Searchbar onSubmit={handleSearchFormSubmit} />
        <ImageGallery searchText={searchText} />
      </div>
    );
  }

  App.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default App;
