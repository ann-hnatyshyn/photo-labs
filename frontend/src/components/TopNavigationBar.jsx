import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import PhotoFavButton from './PhotoFavButton';

const TopNavigation = ({topics, favorites, updateToFavPhotoIds, setPhotoSelected}) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
        topics={topics}
      />
      <PhotoFavButton favorites={favorites} />
    </div>
  )
}

export default TopNavigation;
