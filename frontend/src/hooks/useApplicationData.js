import { useReducer } from 'react';
import { useEffect } from 'react';

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
  const initialState = {
    favorites: [],
    photos: [],
    topics: [],
    selectedPhoto: null,
    isModalVisible: false,
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photo) => {
    const photoId = photo.id;
    if (state.favorites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const setPhotos = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
  };

  const setTopics = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
  };

  const displayPhotoDetails = (isVisible, photo) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { isVisible, photo } });
  };

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);


  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    setPhotos,
    setTopics,
    displayPhotoDetails,
  };
};

export default useApplicationData;