import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({
  isLiked,
  toggleLike,
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
          isLiked={isLiked}
          toggleLike={toggleLike}
          id={photo.id}
          photo={photo}
          title={photo.title}
          handlePhotoClick={setPhotoSelected}
          updateToFavPhotoIds={updateToFavPhotoIds}
          isFavorited={favorites(photo.id)} 
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
