import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({
  favorites,
  isFavourite,
  topics,
  photos,
  photosByFilter,
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
        photosByFilter={photosByFilter}
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
        photosByFilter={photosByFilter}
      />
    </div>
  );
};

export default HomeRoute;
