import React from 'react';
import { useState } from 'react';
import Spinner from './Spinner';

function DisplayResults({photos, isLoading}) {

    const [error2, setError2 ] = useState("Couldnt find what you're looking for")

    // show photos if they exist otherwise display error msg. Loading/Spinner is to wait for api call to finish so error message doesnt show up for split second
  return (

    //   </div>
    isLoading ? (<Spinner />) : (<div className='photosContainer'>
        {photos.length > 0 ? photos.map((photo) => (
            <img src={photo.largeImageURL} alt='' className='photos' key={Math.floor(Math.random()*10000)} />
        )): <span className='error'>{error2}</span>}
    </div>)
  )
}

export default DisplayResults;
