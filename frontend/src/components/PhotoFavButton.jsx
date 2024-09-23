import React from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = ({
  photo,
  updateToFavPhotoIds,
  isFavourite,
}) => {
  const handleClick = () => {
    const photoId = photo.id;
    updateToFavPhotoIds(photoId);
  };
  return (
    <div className='photo-list__fav-icon'>
      <div className='photo-list__fav-icon-svg' onClick={handleClick}>
        <FavIcon selected={isFavourite(photo.id)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
