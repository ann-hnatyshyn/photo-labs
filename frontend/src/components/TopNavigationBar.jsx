import React from 'react';
import App from 'App';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({topics, favourites, toggleFavourite}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <div className="fav-badge">
        <FavBadge/>
      </div>
    </div>
  )
}

export default TopNavigation;