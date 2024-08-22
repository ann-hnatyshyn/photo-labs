import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(prev => !prev);
  };

  return (
  <div className="photo-list__fav-icon">
    <div className="photo-list__fav-icon-svg">
      <button onClick={handleClick}>
        <FavIcon liked={isLiked}/>
      </button>
    </div>
  </div>
  );
}

export default PhotoFavButton;