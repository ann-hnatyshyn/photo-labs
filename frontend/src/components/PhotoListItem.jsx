import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = ({
  isLiked,
  isFavorited,
  updateToFavPhotoIds,
  location,
  imageSource,
  username,
  profile,
  setPhotoSelected,

}) => {
  return (
    <div className='photo-list__item' onClick={() => setPhotoSelected(photo)}> 
    
      <PhotoFavButton
        isLiked={isLiked}
        isFavorited={isFavorited}
        toggleLike={() => updateToFavPhotoIds(photo)}
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