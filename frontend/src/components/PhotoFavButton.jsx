import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {

  const [like, setLike] = useState("inactive");
  const handleClick = () => {
    setLike(like);
    console.log(handleClick);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
      <button onClick={handleClick}></button>
      </div>
    </div>
  );
}

export default PhotoFavButton;