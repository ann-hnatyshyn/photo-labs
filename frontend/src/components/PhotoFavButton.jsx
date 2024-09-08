import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({favorites, photoId, updateToFavPhotoIds}) {
  const isLiked = favorites.includes(photoId);
  return (
  <div className="photo-list__fav-icon" onClick={() => updateToFavPhotoIds(photoId)}>
    <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked}/>
    </div>
  </div>
  );
}

export default PhotoFavButton;