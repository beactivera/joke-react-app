import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JokeList from './components/JokeList';
import Favorites from './components/Favorites';

function App() {
  const [jokes, setJokes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState('jokes');

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Coding');
      const downloadedJoke = response.data;
      if( downloadedJoke.type === "single"){
        setJokes((oldJokes) => ([...oldJokes, {id: downloadedJoke["id"], type: downloadedJoke["type"], joke: downloadedJoke["joke"]}]));
      }else if (downloadedJoke.type === "twopart"){
        setJokes((oldJokes) => ([...oldJokes, {id: downloadedJoke["id"], type: downloadedJoke["type"], setup: downloadedJoke["setup"], delivery: downloadedJoke["delivery"]}]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addJokeToFavorites = (joke) => {
    setFavorites((prevFavorites) => [...prevFavorites, joke]);
  };

  const removeJokeFromFavorites = (jokeId) => {
    setFavorites((prevFavorites) =>
        prevFavorites.filter((joke) => joke.id !== jokeId)
    );
  };

  const isJokeInFavorites = (jokeId) => {
    return favorites.some((joke) => joke.id === jokeId);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
      <div>
        <h1>Joke App</h1>
        <button onClick={fetchJokes}>Add Joke</button>
        <button onClick={() => handlePageChange('jokes')}>Jokes</button>
        <button onClick={() => handlePageChange('favorites')}>Favorites</button>
        {currentPage === 'jokes' ? (
            <JokeList
                jokes={jokes}
                favorites={favorites}
                onAddToFavorites={addJokeToFavorites}
                onRemoveFromFavorites={removeJokeFromFavorites}
                isJokeInFavorites={isJokeInFavorites}
            />
        ) : (
            <Favorites
                favorites={favorites}
                onRemoveFromFavorites={removeJokeFromFavorites}
            />
        )}
      </div>
  );
}

export default App;
