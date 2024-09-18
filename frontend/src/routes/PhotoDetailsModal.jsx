import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({
  state,
  photo,
  favorites,
  setPhotoSelected,
  updateToFavPhotoIds,
  displayPhotoDetails,
  closePhotoModal,
}) => {
  if (!state.setPhotoSelected|| !photo) {
    return null;
  }

  return (
    <div className='photo-details-modal'>
      <div className='photo-details-modal__close-button' onClick={closePhotoModal} >
        <img src={closeSymbol} alt='close symbol' />
      </div>

      <PhotoList 
      photos={photo.similar_photos}
      favorites={favorites} 
      updateToFavPhotoIds={updateToFavPhotoIds} 
      setPhotoSelected={setPhotoSelected}
      />

      <div className='fav-button-container'>
        <PhotoFavButton
          photoId={photo.Id}
          favorites={favorites}
          updateToFavPhotoIds={updateToFavPhotoIds}
        />
      </div>

      <div className='photo-details-modal__images'>
        <img
          className='photo-details-modal__image'
          src={photo.urls.full}
          alt={photo?.description || 'Photo'}
        />
      </div>

      <div className='photo-details-modal__top-bar'>
        <div className='photo-details-modal__photographer-details'>
          <div className='photo-details-modal__header'>
            <img
              className='photo-details-modal__photographer-profile'
              src={photo.user.profile}
              alt={`${photo?.user?.name}'s profile`} 
            />
          </div>
          <div className='photo-details-modal__photographer-info'>
            {photo.user.username}
            <div className='photo-details-modal__photographer-location'>
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
