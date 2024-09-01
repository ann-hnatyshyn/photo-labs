import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({
  isLiked,
  state,
  toggleLike,
  topics,
  photos,
  updateToFavPhotoIds,
  setPhotoSelected,
}) => {

  const favorites = state?.favorites || [];

  return (
    <div className='home-route'>
      <TopNavigation
        topics={topics}
        favorites={favorites.length > 0}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />

      <PhotoList
        isLiked={isLiked}
        photos={photos}
        favorites={favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        toggleLike={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
