
import { useState } from 'react';
import './App.css';
import PixabyApi from './components/PixabyApi';
import Searchbar from './components/Searchbar';


function App() {

  const [userInput, setUserInput] = useState('')

  const addUserInput = e => {
    setUserInput(e)
  }

  return (
    <div className="App">
      <Searchbar addUserInput={addUserInput} />
      {userInput && <PixabyApi userInput={userInput} />}
    </div>
  );
}

export default App;
