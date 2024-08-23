import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(favourites, toggleFavourite) {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(prev => !prev);
  };

  return (
  <div className="photo-list__fav-icon" onClick={handleClick}>
    <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked}/>
    </div>
  </div>
  );
}

export default PhotoFavButton;