import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, favourites, toggleFavourite, onClick }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites.length > 0}/>
      <PhotoList 
        photos={photos} 
        toggleFavourite={toggleFavourite} 
        favourites={favourites} 
        onClick={() => handlePhotoClick(photos)}
      />
    </div>
  );
};

export default HomeRoute;
