import React from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = ({
  id,
  updateToFavPhotoIds,
  isFavourite,
  isFavPhotoExist,
}) => {
  const handleClick = () => {
    updateToFavPhotoIds(id);
    console.log(
      `PhotoFavButton clicked for photoId: ${id}, isFavourite: ${isFavourite(
        id
      )}`
    );
  };
  return (
    <div className='photo-list__fav-icon'>
      <div className='photo-list__fav-icon-svg' onClick={handleClick}>
        <FavIcon selected={isFavourite(id)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
