import { useReducer } from 'react';
import { useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO_MODAL: 'CLOSE_PHOTO_MODAL',
  SELECTED_TOPIC: 'SELECTED_TOPIC',
  FILTERED_PHOTOS: 'FILTERED_PHOTOS',
};

const initialState = {
  favorites: [],
  photos: [],
  topics: [],
  selectPhoto: [],
  selectedTopic: null,
  filteredPhotos: true,
  isModalVisible: false,
};

function reducer(state, action) {
  switch (action.type) {

    case ACTIONS.FAV_PHOTO_ADDED: {
      const photoId = action.payload;
      return {...state,favorites: [...state.favorites, photoId],};
    }
    case ACTIONS.FAV_PHOTO_REMOVED: {
      const photoId = action.payload;
      return {...state, favorites: state.favorites.filter((id) => id !== photoId),};
    }
    case ACTIONS.SET_PHOTO_DATA: {
      return { ...state, photos: action.payload };
    }
    case ACTIONS.SET_TOPIC_DATA: {
      return { ...state, topics: action.payload };
    }
    case ACTIONS.FILTERED_PHOTOS: {
      return {...state, filteredPhotos: action.payload};
    }
    case ACTIONS.SELECTED_TOPIC: {
      return {...state, selectedTopic: action.payload};
    }
    case ACTIONS.SELECT_PHOTO: {
      return {...state, selectPhoto: action.payload,isModalVisible: true,};
    }
    case ACTIONS.CLOSE_PHOTO_MODAL: {
      return { ...state, isModalVisible: false };
    }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favorites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const photosByFilter = () => {
    dispatch({type: ACTIONS.FILTERED_PHOTOS,payload: true,});
  };

  const photosByTopic = (topic_id) => {
    dispatch({type: ACTIONS.SELECTED_TOPIC, payload: topic_id})
  }

  const closePhotoModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_MODAL });
  };

  useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => console.error('Error fetching photos:', error));
  }, [state.filteredPhotos]);

  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => console.error('Error fetching topics:', error));
  }, []);

  // Retrieve photos for selected topic
  useEffect(() => {
    const topic_id = state.selectedTopic;
    if (topic_id) {
      console.log('Fetching photos for topic:', topic_id);
      fetch(`/api/topics/photos/${topic_id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched photos data:", data);
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
          dispatch ({type: ACTIONS.FILTERED_PHOTOS, payload: false})
        });
    }
  }, [state.selectedTopic]);
      
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    closePhotoModal,
    photosByTopic,
    photosByFilter,
  }
};

export default useApplicationData;
