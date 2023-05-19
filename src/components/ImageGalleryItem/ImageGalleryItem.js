import React, { Component } from "react";
import './ImageGallert.css'

const ImageGalleryItem = ({ image, onClick }) => {

    return (
      <li key={image.id} className="gallery-item">
        <img
          src={image.webformatURL}
          alt={image.tags}
          className="galleryImage"
          onClick={() => onClick(image.largeImageURL)}
        />
      </li>
    );
  }

export default ImageGalleryItem