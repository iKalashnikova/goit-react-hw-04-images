import React from 'react';
import './Modal.css'

const Modal = ({ largeImageURL, onClose }) =>  {
 
    return (
      <div className="overlay" onClick={onClose}>
        <div className="modal">
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }

export default Modal;