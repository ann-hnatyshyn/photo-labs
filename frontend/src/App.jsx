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
        state={state}
        topics={topics}
        photos={photos}
        updateToFavPhotoIds={ updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      />
      <PhotoDetailsModal
        topics={topics}
        photos={photos}
        state={state}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      />
    </div>
    
  );

};

export default App;



