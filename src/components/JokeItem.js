import React from 'react';
import { FaHeart } from 'react-icons/fa';

function JokeItem({
                      joke,
                      isFavorite,
                      onAddToFavorites,
                      onRemoveFromFavorites,
                  }) {
    const handleFavoriteClick = () => {
        if (isFavorite) {
            onRemoveFromFavorites(joke.id);
        } else {
            onAddToFavorites(joke);
        }
    };

    return (
        <div>
            {joke.type === "single" ? (<p>{joke.joke}</p>) : (<><p>{joke.setup}</p>
                <p>{joke.delivery}</p></>)}
            <button onClick={handleFavoriteClick}>
                <FaHeart color={isFavorite ? 'red' : 'gray'} />
            </button>
        </div>
    );
}

export default JokeItem;
