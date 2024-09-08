import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({
  photos,
  favorites,
  updateToFavPhotoIds,
  setPhotoSelected

}) => {

  return (
    <div className='photo-list'>
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          favorites={favorites}
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
