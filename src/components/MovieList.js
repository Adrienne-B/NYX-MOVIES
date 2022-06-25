import React from 'react';
import Heart from '../assets/images/heart.png';
import FavoriteComponent from '../components/AddFavorites';
import RemoveFavoriteComponent from '../components/RemoveFavorites';

const MovieList = props => {
    const { movies, isFavourite, handleFavoritesClick, handleRemoveFavoritesClick } = props;
    return (
        <>
            {movies.map(movie => {
                return (
                    <div className="image-container d-flex justify-content-start m-3" key={movie.imdbID}>
                        <img src={movie.Poster} alt="movie"></img>
                        <div
                            onClick={() =>
                                !isFavourite ? handleFavoritesClick(movie) : handleRemoveFavoritesClick(movie)
                            }
                            className="overlay"
                        >
                            {isFavourite ? (
                                <RemoveFavoriteComponent />
                            ) : movie.isFavourite && !isFavourite ? (
                                <img className="avatar" src={Heart} alt={''} />
                            ) : (
                                <FavoriteComponent />
                            )}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default MovieList;

//<FavoriteComponent/> should be in line 13 this is important for the favorites to work.
//see if you can render favoritecomponents and see if it will work.
