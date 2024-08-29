import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ isLiked, onClick}) {

  const handleClick = () => {
    onClick();
  };

  return (
  <div className="photo-list__fav-icon" onClick={handleClick}>
    <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked} />
    </div>
  </div>
  );
}

export default PhotoFavButton;