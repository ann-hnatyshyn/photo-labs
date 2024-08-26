import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">

      <HomeRoute
        topics={topics}
        photos={photos}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        handlePhotoClick={handlePhotoClick}
      />
      <PhotoDetailsModal 
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        photo={selectedPhoto}
        favorites={favorites}
        toggleFavorite={toggleFavorite} 
      />
    </div>
    
  );

};

export default App;



