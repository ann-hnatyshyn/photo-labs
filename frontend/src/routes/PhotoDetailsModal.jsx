import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({
  isVisible,
  onClosePhotoDetailsModal,
  photo,
  updateToFavPhotoIds,
}) => {
  if (!isVisible || !photo) {
    return null;
  }

  const isFavorited = favorites.includes(photo.id);

  return (
    <div className='photo-details-modal'>
      <div className='photo-details-modal__close-button' onClick={onClosePhotoDetailsModal}>
        <img src={closeSymbol} alt='close symbol' />
      </div>

      <PhotoList 
      photos={photo.similar_photos}
      favorites={favorites} 
      addToFavorites={addToFavorites} 
      />

      <div className='fav-button-container'>
        <PhotoFavButton
          isLiked={isFavorited}
          onClick={() => updateToFavPhotoIds(photo)}
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
            {photo.user.name}
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
