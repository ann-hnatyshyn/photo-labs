import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const {
    isLiked,
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
        isLiked={isLiked}
        topics={state.topics}
        photos={state.photos}
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



