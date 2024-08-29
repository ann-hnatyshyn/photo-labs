import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavIcon from './FavIcon';


const TopNavigation = ({topics, favorites, updateToFavPhotoIds, setPhotoSelected}) => {

  console.log(favorites, "favorites");
  console.log(updateToFavPhotoIds, "updateToFavPhotoIds");
  console.log(setPhotoSelected, "setPhotoSelected")

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
        topics={topics}
      />
      <FavIcon />
    </div>
  )
}

export default TopNavigation;
