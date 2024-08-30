import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const {
    photos,
    topics,
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
        updateToFavPhotoIds={ updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
      <PhotoDetailsModal
        topics={topics}
        photos={photos}
        isVisible={state.isModalVisible}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        favorites={state.favorites} 
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
    
  );

};

export default App;



