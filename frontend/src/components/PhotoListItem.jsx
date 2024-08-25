import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import photos from 'mocks/photos';

const PhotoListItem = ({
  photo,
  onClick,
  id,
  location,
  imageSource,
  username,
  profile,

}) => {

  return (
    
    <div className='photo-list__item' onClick={()=> 
    { console.log('Photo clicked', photo); 
    onClick(photo);}}>

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
