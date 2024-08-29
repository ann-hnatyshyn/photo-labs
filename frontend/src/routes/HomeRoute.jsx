import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({
  topics,
  photos,
  state,
  updateToFavPhotoIds,
  setPhotoSelected,
}) => {
  const favorites = state?.favorites || [];

  return (
    <div className='home-route'>
      <TopNavigation
        topics={topics}
        state={state}
        // updateToFavPhotoIds={updateToFavPhotoIds}
        // setPhotoSelected={setPhotoSelected}
        // favorites={favorites.length > 0}
      />

      <PhotoList
        state={state}
        photos={photos}
        // favorites={favorites}
        favorites={favorites.length > 0}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
