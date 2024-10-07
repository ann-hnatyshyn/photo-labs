import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({
  photos,
  favorites,
  isFavourite,
  updateToFavPhotoIds,
  setPhotoSelected,
  filteredPhotos
}) => {
  return (
    <ul className='photo-list'>

      {photos.map((photo) => (
        <PhotoListItem
          photo={photo}
          filteredPhotos={filteredPhotos}
          key={photo.id}
          id={photo.id}
          favorites={favorites}
          isFavourite={isFavourite}
          updateToFavPhotoIds={updateToFavPhotoIds}
          setPhotoSelected={setPhotoSelected}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          profile={photo.user.profile}
        />
      ))}
      
    </ul>
  );
};

export default PhotoList;
