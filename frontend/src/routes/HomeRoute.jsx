import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, favorites, toggleFavorite, handlePhotoClick }) => {
  return (
    <div className="home-route">
      <TopNavigation
      topics={topics} 
      favorites={favorites.length > 0}
      />
      <PhotoList 
        photos={photos} 
        favorites={favorites}
        toggleFavorite={toggleFavorite} 
        onClick={handlePhotoClick}
      />
    </div>
  );
};

export default HomeRoute;


