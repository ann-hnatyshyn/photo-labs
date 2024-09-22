import React from 'react';
import FavBadge from './FavBadge';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ id, updateToFavPhotoIds, isFavourite, isFavPhotoExist }) => {
  const handleClick = () => {
    updateToFavPhotoIds(id);
    console.log(`PhotoFavButton clicked for photoId: ${id}`);
  };
  return (
    <div className='photo-list__fav-icon'>
      <div className='photo-list__fav-icon-svg' onClick={handleClick}>
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
