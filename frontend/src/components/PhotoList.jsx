import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({
  toggleLike,
  setPhotos,
  favorites,
  updateToFavPhotoIds,

}) => {

  return (
    <div className='photo-list'>
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          setPhotos={setPhotos}
          favorites={favorites}
          toggleLike={toggleLike}
          setPhotoSelected={setPhotoSelected}
          updateToFavPhotoIds={updateToFavPhotoIds}
          title={photo.title}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          profile={photo.user.profile}
        />
      ))}
    </div>
  );
};

export default PhotoList;
