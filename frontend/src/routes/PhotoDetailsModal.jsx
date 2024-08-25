import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';



const PhotoDetailsModal = ({ isVisible, onClose, selectedPhoto }) => {
  if (!isVisible) return null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;



// photo-details-modal__photographer-details
// photo-details-modal__header
// photo-details-modal__photographer-location
// photo-details-modal__photographer-profile
// photo-details-modal__photographer-info

