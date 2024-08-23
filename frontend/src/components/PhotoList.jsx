import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = () => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          id={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          profile={photo.user.profile}
        />
      ))}
    </div>
  );
};


export default PhotoList;
