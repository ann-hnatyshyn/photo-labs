import React from "react";
import App from "../App";
import "../styles/PhotoListItem.scss";

App();

const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt="Photo" />
      <div>
        <img src={profile} alt="Profile" />
        <p>{username}</p>
        <p>{location.city}, {location.country}</p>
      </div>
    </div>
  );
}

export default PhotoListItem;
