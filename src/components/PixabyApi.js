import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import DisplayResults from './DisplayResults'

function PixabyApi({userInput}) {
    const apiKey = '15445371-5ad66d0e837e3a3178ba34189'
    const [photos, setPhotos] = useState([])
    const [isLoading, setIsLoading ] = useState(true)

    // run api and have it rerender everytime userInput is changed. Takes array and puts it in photos which is sent to DisplayResults
    // useEffect(() => {
    //     fetch(`https://pixabay.com/api/?key=${apiKey}&q=${userInput}&&orientation=horizontal&image_type=photo`)
    //     .then(res => res.json())
    //     .then(data => setPhotos(data.hits))
    //     .catch(err => console.log(err))
    // }, [userInput])

      useEffect(() => {
        const fetchItems = async () => {
          const result = await axios(`https://pixabay.com/api/?key=${apiKey}&q=${userInput}&&orientation=horizontal&image_type=photo`)
          console.log(result.data);
          setPhotos(result.data.hits)
          setIsLoading(false)
        }
        fetchItems()

      }, [userInput])


  return (
          <  DisplayResults photos={photos} isLoading={isLoading} />
  )
}

export default PixabyApi;
