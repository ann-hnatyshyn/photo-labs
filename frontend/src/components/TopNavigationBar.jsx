import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, isFavPhotoExist, photosByFilter, photosByTopic }) => {
  return (
    <div className='top-nav-bar'>
      <span 
      onClick={photosByFilter}
      className='top-nav-bar__logo'>PhotoLabs</span>
      <TopicList topics={topics} photosByTopic={photosByTopic}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
