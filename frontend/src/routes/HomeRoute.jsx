import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({
  favorites,
  isFavourite,
  topics,
  photos,
  filteredPhotos,
  updateToFavPhotoIds,
  setPhotoSelected,
  photosByTopic,
}) => {
  const isFavPhotoExist = favorites.length > 0;

  

  return (
    <div className='home-route'>
      <TopNavigation
        topics={topics}
        photosByTopic={photosByTopic}
        filteredPhotos={filteredPhotos}
        favorites={favorites}
        isFavourite={isFavourite}
        isFavPhotoExist={isFavPhotoExist}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
      <PhotoList
        photos={photos}
        favorites={favorites}
        isFavourite={isFavourite}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
        filteredPhotos={filteredPhotos}
      />
    </div>
  );
};

export default HomeRoute;
