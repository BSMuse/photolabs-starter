import { useReducer, useEffect } from 'react';

const initialState = {
  photoData: [],
  topicData: [],
  topicSelect: '',
  favPhotos: [],
  selected: false,
  showModal: {
    status: false,
    key: null,
    id: null,
    imageReg: null,
    imageFull: null,
    profile: null,
    username: null,
    location: { city: 'City Name', country: 'Country Name' },
    selected: false
  },
};

const actionTypes = {
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_FAV_PHOTOS: 'SET_FAV_PHOTOS',
  SET_SELECTED: 'SET_SELECTED',
  SET_MODAL: 'SET_MODAL',
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO', 
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case actionTypes.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case actionTypes.SET_FAV_PHOTOS:
      return { ...state, favPhotos: action.payload };
    case actionTypes.SET_SELECTED:
      return { ...state, selected: action.payload };
    case actionTypes.SET_MODAL:
      return { ...state, showModal: { ...state.showModal, ...action.payload } };
    case actionTypes.TOGGLE_FAV_PHOTO:
      const newFavPhotos = state.favPhotos.includes(action.payload)
        ? state.favPhotos.filter((photoId) => photoId !== action.payload)
        : [...state.favPhotos, action.payload];
      return { ...state, favPhotos: newFavPhotos };
    default:
      return state;
  }
};

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const { photoData, topicData, favPhotos, selected, showModal } = state;

  // Fetch photos data from the server
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  // Fetch topics data from the server
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: actionTypes.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, []);


 // Function to handle adding/removing photos to/from favorites
 const handleFavClick = (id) => {
  dispatch({ type: actionTypes.TOGGLE_FAV_PHOTO, payload: id });
};

// Function to close the modal
const handleCloseClick = () => {
  dispatch({ type: actionTypes.SET_MODAL, payload: { status: false } });
};

// Function to navigate to a specific topic and fetch its photos
const navigateToTopic = (id) => {
  const apiUrl = `http://localhost:8001/api/topics/photos/${id}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: data });
    })
    .catch((error) => {
      console.error('Error fetching photos:', error);
    });
};

const handlePhotoClick = (id, imageFull, profile, username, location, selected) => {
  dispatch({
    type: actionTypes.SET_MODAL,
    payload: {
      status: true,
      id: id,
      imageFull: imageFull,
      profile: profile,
      username: username,
      location: location,
      selected: selected
    },
  });
};

  // Return the public interface of this custom hook
  return {
    favPhotos,
    showModal,
    handleFavClick,
    handleCloseClick,
    handlePhotoClick,
    selected,
    photoData,
    topicData,
    navigateToTopic,
  };
}

export default useApplicationData;
