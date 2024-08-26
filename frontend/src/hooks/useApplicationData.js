import { useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {

  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED: {
      const photoId = action.payload.id;
      return {
        ...state,
        favorites: [...state.favorites, photoId],
      };
    }
      
    case ACTIONS.FAV_PHOTO_REMOVED: {
      const photoId = action.payload.id;
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== photoId),
      };
    }
    case ACTIONS.SET_PHOTO_DATA: {
      return {
        ...state,
        photos: action.payload.photos,
      };
    }
    case ACTIONS.SET_TOPIC_DATA: {
      return {
        ...state,
        topics: action.payload.topics,
      };
    }
    case ACTIONS.SELECT_PHOTO: {
      return {
        ...state,
        selectedPhoto: action.payload.photo,
        isModalVisible: true,
      };
    }
    case ACTIONS.DISPLAY_PHOTO_DETAILS: {
      return {
        ...state,
        isModalVisible: action.payload.isVisible,
        selectedPhoto: action.payload.photo,
      };
    }
    default:
      throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
      );

  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    photos: [],
    topics: [],
    selectedPhoto: null,
    isModalVisible: false,
  });


  const updateToFavPhotoIds = (photo) => {
    const photoId = photo.id;
    if (state.favorites.includes(photoId)) {
      setState((prevState) => ({
        ...prevState,
        favorites: prevState.favorites.filter((id) => id !== photoId),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        favorites: [...prevState.favorites, photoId],
      }));
    }
  };

  const setPhotoSelected = (photo) => {
    setState((prevState) => ({
      ...prevState,
    setIsModalVisible,
    setSelectedPhoto
  }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalVisible: false,
      selectedPhoto: null,
    }));
  };



export default useApplicationData;