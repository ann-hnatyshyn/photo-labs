import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import App from 'App';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, favourites, toggleFavourite }) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites}/>
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} favourites={favourites} />
    </div>
  );
};

export default HomeRoute;
