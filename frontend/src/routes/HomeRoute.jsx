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
  displayPhotoDetails,

}) => {


  return (
    <div className='home-route'>
      <TopNavigation
        topics={topics}
        favorites={favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />

      <PhotoList
        photos={photos}
        favorites={favorites} 
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
        displayPhotoDetails={displayPhotoDetails}
      />
    </div>
  );
};

export default HomeRoute;
