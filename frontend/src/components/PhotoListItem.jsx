import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, id, location, imageSource, username, profile, favourites, toggleFavourite, onPhotoClick }) => {

  const handlePhotoClick = () => {
    onPhotoClick(photo); // Passing the photo object to the handler
  };

  return (
    <div className="photo-list-item" onClick={handlePhotoClick}>
      <img src={imageSource} alt={username} />
      <div>
        <p>{username}</p>
        <p>{location}</p>
      </div>
      <button onClick={() => toggleFavourite(photo)}>Favourite</button>
    </div>
  );
};

export default PhotoListItem;
