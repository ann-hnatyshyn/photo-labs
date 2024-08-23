import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import { useState } from 'react';
import FavIcon from 'components/FavIcon';


const App = () => {

  const [fav, setFav] = useState(0);

  const handleClick = () => {
      setFav(fav + 1);
  }

  return (
  <div className="App">
    <HomeRoute topics={topics} photos={photos}/>
    <FavIcon onClick={handleClick}/>
  </div>
  )
};

export default App;