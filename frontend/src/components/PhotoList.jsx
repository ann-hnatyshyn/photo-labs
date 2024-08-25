import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';


const PhotoList = ({
  photos,
  favorites,
  toggleFavorite,
  onClick
}) => {
  return (
    <div className='photo-list'>
      {photos.map((photo) => (

        <PhotoListItem
          key={photo.id}
          id={photo.id}
          photo={photo}
          toggleFavorite={toggleFavorite}
          onClick={onClick}
          isFavorited={favorites.some(fav => fav.id === photo.id)} 
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          profile={photo.user.profile}
        />
      ))}
    </div>
  );
};

console.log('onClick:', onClick); 

export default PhotoList;
