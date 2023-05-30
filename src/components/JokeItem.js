import React from 'react';

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
            <p>{joke.setup}</p>
            <p>{joke.delivery}</p>
            <button onClick={handleFavoriteClick}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
}

export default JokeItem;
