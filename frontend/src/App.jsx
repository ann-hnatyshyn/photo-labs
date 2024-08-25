import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {

  const [favourites, setFavourites] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState([null]);

  const toggleFavourite = (photo) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.some(fav => fav.id === photo.id)) {
        return prevFavourites.filter(fav => fav.id !== photo.id);
      } else {
        return [...prevFavourites, photo];
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
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        onClick={() => handlePhotoClick(photos)}
      />
      <PhotoDetailsModal 
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        selectedPhoto={selectedPhoto}
      />
    </div>
    
  );

};

export default App;
