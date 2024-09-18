import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    displayPhotoDetails,
    closePhotoModal
  } = useApplicationData();


  return (
    <div className="App">

      <HomeRoute
        favorites={state.favorites}
        topics={state.topics}
        photos={state.photos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
        displayPhotoDetails={displayPhotoDetails}
      />
      <PhotoDetailsModal
        state={state}
        photo={state.selectPhoto}
        favorites={state.favorites}
        setPhotoSelected={setPhotoSelected}
        updateToFavPhotoIds={updateToFavPhotoIds}
        closePhotoModal={closePhotoModal}
        displayPhotoDetails={displayPhotoDetails}
      />
    </div>
    
  );

};

export default App;



