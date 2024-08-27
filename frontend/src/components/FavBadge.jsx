import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <span className="fav-badge__count">
       <FavIcon displayAlert={!!isFavPhotoExist}/>
      </span>
    </div>
  ) 
};

export default FavBadge;