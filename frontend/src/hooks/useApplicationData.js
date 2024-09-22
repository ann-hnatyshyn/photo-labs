import { useReducer } from 'react';
import { useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO_MODAL: 'CLOSE_PHOTO_MODAL',
};

const initialState = {
  favorites: [],
  photos: [],
  topics: [],
  selectPhoto: [],
  isModalVisible: false,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED: {
      const photoId = action.payload;
      return {
        ...state,
        favorites: [...state.favorites, photoId],
      };
    }
    case ACTIONS.FAV_PHOTO_REMOVED: {
      const photoId = action.payload;
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== photoId),
      };
    }
    case ACTIONS.SET_PHOTO_DATA: {
      return { ...state, photos: action.payload };
    }
    case ACTIONS.SET_TOPIC_DATA: {
      return { ...state, topics: action.payload };
    }
    case ACTIONS.SELECT_PHOTO: {
      return {
        ...state,
        selectPhoto: action.payload,
        isModalVisible: true,
      };
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

  const updateToFavPhotoIds = (photo) => {
    const photoId = photo.id;
    if (state.favorites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const closePhotoModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_MODAL });
  };

  useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((photos) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos });
      })
      .catch((error) => console.error('Error fetching photos:', error));
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((topics) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics });
      })
      .catch((error) => console.error('Error fetching topics:', error));
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    closePhotoModal,
  };
};

export default useApplicationData;
