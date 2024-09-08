import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const {
    state,
    // isLiked,
    // updateToFavPhotoIds,
    // setPhotoSelected,
    // closePhotoModal,
  } = useApplicationData();

  console.log(state);

  // const isLiked = photoId => likes.includes(photoId);

  // const isFavorited = likes.length > 0;

  return (
    <div className="App">

      <HomeRoute
        isLiked={isLiked}
        topics={state.topics}
        photos={state.photos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
      <PhotoDetailsModal
        photos={state.photos}
        isVisible={state.isModalVisible}
        closePhotoModal={closePhotoModal}
        favorites={state.favorites} 
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
    
  );

};

export default App;



