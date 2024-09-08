import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = ({
  id,
  updateToFavPhotoIds,
  location,
  imageSource,
  username,
  profile,
  setPhotoSelected,
  favorites,
  title

}) => {
  return (
    <div className='photo-list__item' onClick={() => setPhotoSelected(photo)}> 
    
      <PhotoFavButton
        favorites={favorites}
        photoId={id}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />

      <img 
      src={imageSource} 
      alt={username} 
      className='photo-list__image' 
      />

      <div className='photo-list__user-details'>
        <img
          src={profile}
          alt={username}
          className='photo-list__user-profile'
        />

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