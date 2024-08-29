import React from 'react';
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
        topics={state.topics}
        photos={state.photos}
        updateToFavPhotoIds={ updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
      <PhotoDetailsModal
        state={state}
        topics={state.topics}
        photos={state.photos}
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



