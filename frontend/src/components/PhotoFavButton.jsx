import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({
  id,
  favorites, 
  updateToFavPhotoIds,
  setPhotoSelected
}) => {

  return (
  <div className="photo-list__fav-icon">
    <div className="photo-list__fav-icon-svg"  onClick={() => updateToFavPhotoIds({id})}>
        <FavIcon
        setPhotoSelected={setPhotoSelected}
        favorites={favorites} 
        />
    </div>
  </div>
  );
}

export default PhotoFavButton;