import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {

  const [favorites, setFavorites] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState([null]);

  const toggleFavorite = (photo) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some(fav => fav.id === photo.id)) {
        return prevFavorites.filter(fav => fav.id !== photo.id);
      } else {
        return [...prevFavorites, photo];
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
        photos={selectedPhoto}
        favorites={favorites}
        toggleFavorite={toggleFavorite} 
      />
    </div>
    
  );

};

export default App;



