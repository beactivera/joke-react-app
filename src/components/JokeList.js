import React from 'react';
import JokeItem from './JokeItem';

function JokeList({
                      jokes,
                      favorites,
                      onAddToFavorites,
                      onRemoveFromFavorites,
                      isJokeInFavorites,
                  }) {
    return (
        <div>
            <h2>Jokes</h2>
            {jokes.map((joke) => (
                <JokeItem
                    key={joke.id}
                    joke={joke}
                    isFavorite={isJokeInFavorites(joke.id)}
                    onAddToFavorites={onAddToFavorites}
                    onRemoveFromFavorites={onRemoveFromFavorites}
                />
            ))}
        </div>
    );
}

export default JokeList;
