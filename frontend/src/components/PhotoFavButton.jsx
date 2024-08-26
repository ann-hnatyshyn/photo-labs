import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ isLiked, onClick}) {

  const handleClick = () => {
    setLiked(prev => !prev);
    onClick();
  };

  return (
  <div className="photo-list__fav-icon" onClick={onClick}>
    <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked}/>
    </div>
  </div>
  );
}

export default PhotoFavButton;