import React from 'react';
import { useState } from 'react';

function Searchbar({addUserInput}) {

    const [userText, setUserText ] = useState('')
    const [error, setError ] = useState('')

    // listen for and add user text. if its empty display error message 
    const inputSubmit = e => {
        e.preventDefault()

        addUserInput(userText)
        resetSearch()
        if(userText === '') {
            setError('Oops! Enter something to search for')
        }
        else{
            setError('')
        }
    }

    const resetSearch = () => {
        setUserText('')
    }
  return (
      <div className='searchBar'>
          <form onSubmit={inputSubmit}>
              <label>
                  <span>Search For Something...</span>
                  <input type="text"
                  value={userText}
                  onChange={(e) => {setUserText(e.target.value)}}
                  />
              </label>
              <button>Search</button>
              <button onClick={() => {setUserText('puppies')}}>Show Puppies!</button>
          </form>
          <span className='error2'>{error}</span>
      </div>
  )
}

export default Searchbar;
