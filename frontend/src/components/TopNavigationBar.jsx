import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavIcon from './FavIcon';

const TopNavigation = ({ setTopics, favorites }) => {
  
  return (
    <div className='top-nav-bar'>
      <span className='top-nav-bar__logo'>PhotoLabs</span>
      <TopicList setTopics={setTopics} />
      <FavIcon favorites={favorites} />
    </div>
  );
};

export default TopNavigation;
