import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = ({
  photo,
  id,
  favorites,
  setPhotoSelected,
  updateToFavPhotoIds,
  displayPhotoDetails,
  location,
  imageSource,
  username,
  profile,
}) => {
  return (
    <div className='photo-list__item' > 

    
      <PhotoFavButton
        favorites={favorites}
        id={id}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />

    <img 
      className='photo-list__image' 
      src={imageSource} 
      alt={username} 
    />
  
      <div className='photo-list__user-details'>

        <img
          className='photo-list__user-profile'
          src={profile}
          alt={username}
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


// onClick={() => setPhotoSelected(id)} 