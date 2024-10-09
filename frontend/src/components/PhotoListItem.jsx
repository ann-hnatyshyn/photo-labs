import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';



const PhotoListItem = ({
  photo,
  id,
  favorites,
  isFavourite,
  setPhotoSelected,
  updateToFavPhotoIds,
  location,
  imageSource,
  username,
  profile,
}) => {


  return (
    <div className='photo-list__item'>
      
      <PhotoFavButton
        id={id}
        photo={photo}
        favorites={favorites}
        isFavourite={isFavourite}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
      <img
        className='photo-list__image'
        key={photo.id}
        src={imageSource}
        alt={photo.description}
        onClick={() => setPhotoSelected(photo)}
      />
      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={profile} />

        <div className='photo-list__user-info'>
          <span>{username}</span>
          <br />
          <span className='photo-list__user-location'>
            {location.city}, {location.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
