import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavIcon from './FavIcon';

const TopNavigation = ({ topics, favorites, updateToFavPhotoIds }) => {
  
  return (
    <div className='top-nav-bar'>
      <span className='top-nav-bar__logo'>PhotoLabs</span>
      <TopicList topics={topics} />
      <FavIcon favorites={favorites} updateToFavPhotoIds={updateToFavPhotoIds} />
    </div>
  );
};

export default TopNavigation;
