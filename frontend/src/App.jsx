import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { state, updateToFavPhotoIds, setPhotoSelected, closePhotoModal, photosByTopic, photosByFilter } =
    useApplicationData();

  const isFavourite = (photo_id) => {
    return state.favorites.includes(photo_id);
  };

  return (
    <div className='App'>
      <HomeRoute
        topics={state.topics}
        photosByTopic={photosByTopic}
        photos={state.photos}
        photosByFilter={photosByFilter}
        favorites={state.favorites}
        isFavourite={isFavourite}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
      <PhotoDetailsModal
        photo={state.selectPhoto}
        photosByFilter={photosByFilter}
        photosByTopic={photosByTopic}
        favorites={state.favorites}
        isFavourite={isFavourite}
        isModalVisible={state.isModalVisible}
        setPhotoSelected={setPhotoSelected}
        updateToFavPhotoIds={updateToFavPhotoIds}
        closePhotoModal={closePhotoModal}
      />
    </div>
  );
};

export default App;
