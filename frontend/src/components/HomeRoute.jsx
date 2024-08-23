import React from 'react';
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';
import "../styles/HomeRoute.scss";

function HomeRoute() {
  return (
    <div className="home-route">
    <TopNavigation/>
    <PhotoList/>
    </div>
  );
}

export default HomeRoute;
