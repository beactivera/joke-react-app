import React from 'react';
import JokeItem from './JokeItem';

function Favorites({ favorites, onRemoveFromFavorites }) {
    return (
        <div>
            <h2>Favorites</h2>
            {favorites.map((joke) => (
                <JokeItem
                    key={joke.id}
                    joke={joke}
                    isFavorite={true}
                    onRemoveFromFavorites={onRemoveFromFavorites}
                />
            ))}
        </div>
    );
}

export default Favorites;
