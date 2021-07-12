import { useState } from 'react';
import axios from 'axios';
import './App.css';
import QuoteCard from './components/QuoteCard';

function App() {
  const [characters, setCharacters] = useState("");

  const getCharac = () => {

    // Send the request
  
    axios
  
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=10')
  
      // Extract the DATA from the received response
  
      .then((response) => response.data)
  
      // Use this data to update the state
  
      .then((data) => {
  
        setCharacters(data[0]);
  
      });
  
  };


  return (
    <>
    <QuoteCard characters={characters}/>
    <button type="button" onClick={getCharac}>Get Quote</button>
    </>
  );
}

export default App;
