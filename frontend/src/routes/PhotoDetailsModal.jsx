import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ isVisible, onClose, photos, favorites, toggleFavorite }) => {
  if (!isVisible) return null;

  return (
    <div className='photo-details-modal'>

      <button className='photo-details-modal__close-button' onClick={onClose}>
        <img src={closeSymbol} alt='close symbol' />
      </button>
      <img
        className='photo-details-modal__image'
        src={photos.urls.full}
      />
      <div className='photo-details-modal__photographer-details'>
        <img
          className='photo-details-modal__photographer-profile'
          src={photos.user.profile}
        />
        <div className='photo-details-modal__photographer-info'>
          {photos.user.name}
          <div className='photo-details-modal__photographer-location'>
            {photos.location.city}, {photos.location.country}
          </div>
        </div>


        <PhotoList photos={photos.similar_photos} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
