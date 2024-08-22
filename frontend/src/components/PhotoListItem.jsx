import React from "react";
import App from "../App.jsx";
import PhotoList from "./PhotoList.jsx";
import PhotoFavButton from "./PhotoFavButton.jsx";
import "../styles/PhotoListItem.scss";
import FavIcon from "./FavIcon.jsx";


const PhotoListItem = ({ id, location, imageSource, username, profile }) => {

// const photos = [...Array(3)];
// const sampleArrayOfPhotos = photos.map((photo, i) => 

//   <PhotoListItem 
//     key={i} 
//     id={sampleDataForPhotoListItem.id}
//     location={sampleDataForPhotoListItem.location}
//     imageSource={sampleDataForPhotoListItem.imageSource}
//     username={sampleDataForPhotoListItem.username}
//     profile={sampleDataForPhotoListItem.profile}
//   />
//   )

  return (
    <div className="photo-list__item">

    <PhotoFavButton />

    <img className= "photo-list__image" src={imageSource} alt="Photo" />
    
    <div>
      <img className= "photo-list__user-profile" src={profile} alt="Profile" />
    </div>

    <div>
      <p>{username}</p>
      <p>{location.city}, {location.country}</p>
    </div>
    
    </div>
  );
}

export default PhotoListItem;
