import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({
  photo,
  onClick,
  isFavorited,
  location,
  imageSource,
  username,
  profile,
}) => {
  return (
    <div className='photo-list__item' onClick={() => onClick(photo)}>
      <PhotoFavButton
        isLiked={isFavorited}
        onClick={() => toggleFavorite(photo)}
      />
      <img src={imageSource} alt={username} className='photo-list__image' />
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
            {location.city} {location.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
