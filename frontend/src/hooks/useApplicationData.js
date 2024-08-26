import React, { useState } from 'react';

const useApplicationData = () => {
  const [state, setState] = useState({
    favorites: [],
    isModalVisible: false,
    selectedPhoto: null,
  });

  const updateToFavPhotoIds = (photo) => {
    const photoId = photo.id;
    if (state.favorites.includes(photoId)) {
      setState((prevState) => ({
        ...prevState,
        favorites: prevState.favorites.filter((id) => id !== photoId),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        favorites: [...prevState.favorites, photoId],
      }));
    }
  };

  const setPhotoSelected = (photo) => {
    setState((prevState) => ({
      ...prevState,
    setIsModalVisible:true,
    setSelectedPhoto: photo
  }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalVisible: false,
      selectedPhoto: null,
    }));
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
