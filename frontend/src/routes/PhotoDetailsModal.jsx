import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({
  photo,
  favorites,
  isFavourite,
  isModalVisible,
  setPhotoSelected,
  updateToFavPhotoIds,
  closePhotoModal,
}) => {
  if (!isModalVisible || !photo) {
    return null;
  }

  const similarPhotos = photo.similar_photos;

  return (
    <div className='photo-details-modal'>
      <button
        className='photo-details-modal__close-button'
        onClick={closePhotoModal}
      >
        <img src={closeSymbol} alt='close symbol' />
      </button>

      <div className='photo-details-modal__images'>
        <PhotoFavButton
          photo={photo}
          favorites={favorites}
          isFavourite={isFavourite}
          setPhotoSelected={setPhotoSelected}
          updateToFavPhotoIds={updateToFavPhotoIds}
        />
        <img className='photo-details-modal__image' src={photo.urls.full} />
      </div>

      <div className='photo-details-modal__photographer-details'>
        <div className='photo-list__user-details'>
          <img className='photo-list__user-profile' src={photo.user.profile} />
        </div>
        <div className='photo-list__user-info'>
          <span>{photo.user.username}</span>
          <div className='photo-list__user-location'>
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>

      <div className='photo-details-modal__top-bar'>
        <div className='photo-details-modal__header'>
          <strong>Similar Photos</strong>
          <div className='photo-details-modal__photographer-info'>
          <PhotoList
            photos={similarPhotos}
            favorites={favorites}
            isFavourite={isFavourite}
            updateToFavPhotoIds={updateToFavPhotoIds}
            setPhotoSelected={setPhotoSelected}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
