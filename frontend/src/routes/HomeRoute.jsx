import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({
  favorites,
  topics,
  photos,
  updateToFavPhotoIds,
  setPhotoSelected,

}) => {


  return (
    <div className='home-route'>
      <TopNavigation
        topics={topics}
        favorites={favorites}
      />

      <PhotoList
        photos={photos}
        favorites={favorites} 
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
