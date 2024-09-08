import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({
  toggleLike,
  isLiked,
  setTopics,
  setPhotos,
  updateToFavPhotoIds,
  setPhotoSelected,
  addToFavorites,

}) => {

  const favorites = photo => isLiked(photo.id);

  return (
    <div className='home-route'>
      <TopNavigation
        setTopics={setTopics}
        favorites={favorites}
      />

      <PhotoList
        setPhotos={setPhotos}
        favorites={favorites} 
        addToFavorites={addToFavorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        toggleLike={toggleLike}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
