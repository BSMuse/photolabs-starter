import { useState, useEffect } from 'react';

function useApplicationData() {
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

  const handleFavClick = (id, setFavPhotos) => {
    !selected
      ? setFavPhotos((prev) => [...prev, id])
      : setFavPhotos((prev) => prev.filter((prevId) => prevId !== id));
    setSelected(!selected);
  }

  const handleCloseClick = () => {
    setPhotoData(photoData);
    setModal({
      ...showModal,
      status: false,
    });
  };

  const navigateToTopic = (id) => {
    // setTopic(id);
    console.log(photoData)
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
