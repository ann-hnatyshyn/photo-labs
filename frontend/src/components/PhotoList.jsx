import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';


const PhotoList = ({
  photos,
  favourites,
  toggleFavourite,
  onPhotoClick
}) => {
  return (
    <div className='photo-list'>
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photos={photo}
          id={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          profile={photo.user.profile}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          onClick={onPhotoClick}
        />
      ))}
    </div>
  );
};

export default PhotoList;
