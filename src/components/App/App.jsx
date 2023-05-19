
import React, { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import './App.css'

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


export default App;
