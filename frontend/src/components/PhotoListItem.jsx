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
  onClick
}) => {
  // This function handles the click event on the photo image
  const handlePhotoClick = () => {
    onClick(photo); //pass photo details to the parent component//
    setIsModalVisible(true); //open the modal//
  };

  console.log(photo, id, username, location);

  return (
    <div className='photo-list__item'>
      
      <PhotoFavButton onClick={() => toggleFavourite(photo)} />

      <img
        src={imageSource}
        alt={username}
        onClick={() => handlePhotoClick(photo)}
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
