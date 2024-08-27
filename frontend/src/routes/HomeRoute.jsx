import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, state, updateToFavPhotoIds, setPhotoSelected }) => {

  const favorites = state?.favorites || []; 

  return (
    <div className="home-route">
      <TopNavigation
      topics={topics} 
      favorites={favorites.length > 0}
      />
      <PhotoList 
        photos={photos} 
        favorites={favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        handlePhotoClick={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;


