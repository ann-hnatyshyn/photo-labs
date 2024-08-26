import React, { useState } from 'react';


const useApplicationData = () => {

  const [state, setState] = useState({
    favorites: [],
    isModalVisible: false,
    selectedPhoto: null
  });

  const updateToFavPhotoIds = (photo) => {
    setFavorites((prevFavorites) => {
      const photoId = photo.id;
      if (prevFavorites.includes(photoId)){
        return prevFavorites.filter(id => id !== photoId);
      } else {
        return [...prevFavorites, photoId];
      }
    });
  };

  const setPhotoSelected = (photo) => {
    setIsModalVisible(true);
    setSelectedPhoto(photo)
  };

  const onClosePhotoDetailsModal = () => {
    setIsModalVisible(false);
    setSelectedPhoto(null)
  };

return {
  state,
  updateToFavPhotoIds,
  setPhotoSelected,
  onClosePhotoDetailsModal
};

};

export default useApplicationData;