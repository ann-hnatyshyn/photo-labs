import React, { useState } from 'react';


const useApplicationData = () => {

const [favorites, setFavorites] = useState([]);
const [isModalVisible, setIsModalVisible] = useState(false);
const [selectedPhoto, setSelectedPhoto] = useState([null]);

const toggleFavorite = (photo) => {
  setFavorites((prevFavorites) => {
    const photoId = photo.id;
    if (prevFavorites.includes(photoId)){
      return prevFavorites.filter(id => id !== photoId);
    } else {
      return [...prevFavorites, photoId];
    }
  });
};

const handlePhotoClick = (photo) => {
  setIsModalVisible(true);
  setSelectedPhoto(photo)
};

const handleCloseModal = () => {
  setIsModalVisible(false);
  setSelectedPhoto(null)
};

};

export default useApplicationData;