import { useState, useEffect } from 'react';

function useApplicationData() {
  // State variables
  const [photoData, setPhotoData] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [topicSelect, setTopic] = useState('');
  const [favPhotos, setFavPhotos] = useState([]);
  const [selected, setSelected] = useState(false);
  const [showModal, setModal] = useState({
    status: false,
    key: null,
    id: null,
    imageReg: null,
    imageFull: null,
    profile: null,
    username: null,
    location: { city: 'City Name', country: 'Country Name' }
  });

  // Fetch photos data from the server
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then((response) => response.json())
      .then((data) => {
        setPhotoData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Fetch topics data from the server
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then((data) => {
        setTopicData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to handle adding/removing photos to/from favorites
  const handleFavClick = (id, setFavPhotos) => {
    !selected
      ? setFavPhotos((prev) => [...prev, id])
      : setFavPhotos((prev) => prev.filter((prevId) => prevId !== id));
    setSelected(!selected);
  }

  // Function to close the modal
  const handleCloseClick = () => {
    setPhotoData(photoData);
    setModal({
      ...showModal,
      status: false,
    });
  };

  // Function to navigate to a specific topic and fetch its photos
  const navigateToTopic = (id) => {
    const apiUrl = `http://localhost:8001/api/topics/photos/${id}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPhotoData(data);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };

  // Return the public interface of this custom hook
  return {
    favPhotos,
    setFavPhotos,
    showModal,
    setModal,
    handleFavClick,
    handleCloseClick,
    setSelected,
    selected,
    photoData,
    setPhotoData,
    topicData,
    topicSelect,
    setTopic,
    navigateToTopic,
  };
}

export default useApplicationData;
