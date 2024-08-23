import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import { useState } from 'react';
import FavIcon from 'components/FavIcon';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {

  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photo) => {
    setFavourites((prevFavourites) => {

      if (prevFavourites.some(fav => fav.id === photo.id)) {
        return prevFavourites.filter(fav => fav.id !== photo.id);
      } else {
        return [...prevFavourites, photo];
      }
    });
  };

  return (
  <div className="App">
    <HomeRoute 
    topics={topics}
    photos={photos}
    favourites={favourites}
    toggleFavourite={toggleFavourite}
    />
    
    <div className="photo-details-modal">
    <PhotoDetailsModal/>
    </div>

  </div>
  )
};

export default App;
