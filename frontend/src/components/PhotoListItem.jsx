import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({
  photo,
  id,
  location,
  imageSource,
  username,
  profile,
  favourites,
  toggleFavourite,
  onPhotoClick,
}) => {
  // This function handles the click event on the photo image
  const handlePhotoClick = () => {
    onPhotoClick(photo);
  };

  return (
    <div className='photo-list__item'>
      {/* Button to toggle favourite status */}
      <PhotoFavButton onClick={() => toggleFavourite(photo)} />

      <img
        src={imageSource}
        alt={username}
        onClick={handlePhotoClick}
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
        <br/>
        <span className="photo-list__user-location">
          {location.city} {location.country} 
        </span>
      </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
