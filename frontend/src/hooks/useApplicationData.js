import { useState, useEffect } from 'react';

function useApplicationData() {
  const [photoData, setPhotoData] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [favPhotos, setFavPhotos] = useState([]);
  const [selected, setSelected] = useState(false)
  const [showModal, setModal] = useState({
    status: false, 
    key: null,
    id: null,
    imageReg: null,
    imageFull: null, 
    profile: null,
    username: null,
    location: { city: 'City Name', country: 'Country Name' }, // Initialize location properly
  })

  useEffect(() => {
    // Make a fetch request to the "/photos" route
    fetch('http://localhost:8001/api/photos')
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched data to the photoData state variable
        setPhotoData(data)
        // console.log(photoData)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Make a fetch request to the "/photos" route
    fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched data to the photoData state variable
        setTopicData(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFavClick = (id, setFavPhotos) => {
    !selected ? setFavPhotos( prev =>  [...prev,id]) : setFavPhotos(prev => prev.filter((prevId) => prevId !== id ))
    setSelected(!selected)
    console.log(topicData, 'topicData')
  }

  const handleCloseClick = () => {
    console.log(showModal.status)
    setModal({
      ...showModal,
      status: false,
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
    topicData
  };
}

export default useApplicationData;