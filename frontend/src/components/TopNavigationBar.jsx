import React from 'react';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({topics, favorites, toggleFavorite}) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topic-list">
      <TopicList topics={topics}/>
      </div>
      <div className="fav-badge">
      <FavBadge isFavPhotoExist={favorites.length > 0}/>
      </div>
    </div>
  )
}

export default TopNavigation;