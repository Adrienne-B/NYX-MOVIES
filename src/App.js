import React, { useState, useEffect, useRef } from 'react';
import './bootstrap.css';
import './App.css';

import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import RemoveFavorites from './components/RemoveFavorites';
import Header from './components/Header';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log('You clicked outside of me!');
            }
        }
        // Bind the event listener
        document.addEventListener('click', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref]);
}
const App = () => {

    const handleHamburgerState = state => {
        setIsHamburgerOpen(state);
    };

    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('Avatar');
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const getMovieRequest = async searchValue => {
        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=c7810f4c`;
        console.log(url);
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);
        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const movieFavorites = JSON.parse(localStorage.getItem('react-movie-app-favorites')) || []; //tries to read an ajecent string from alocal storage and if it is nothing it will defailt into a local array
        console.log(movieFavorites);
        setFavorites(movieFavorites); 
    }, []);

    const saveToLocalStorage = items => {
        localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
    };

    const addFavoriteMovie = movie => {
        // Check if the selected movies is already in favourites array or not...
        //debugger
        if (!favorites.find(favorite => favorite.imdbID === movie.imdbID)) {
            const newFavoriteList = [...favorites, movie];
            setFavorites(newFavoriteList);
            saveToLocalStorage(newFavoriteList);
            const filteredMovies = movies.filter(item => item.imdbID !== movie.imdbID);
            const selectedMovieIndex = movies.findIndex(item => item.imdbID === movie.imdbID);
            const selectedMovie = movies.find(item => item.imdbID === movie.imdbID);
            selectedMovie.isFavourite = true;
            filteredMovies.splice(selectedMovieIndex, 0, selectedMovie);
            setMovies(filteredMovies);
        }
    };

    const removeFavoriteMovie = movie => {
        const newFavoriteList = favorites.filter(favorite => favorite.imdbID !== movie.imdbID);
        setFavorites(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
        const filteredMovies = movies.filter(item => item.imdbID !== movie.imdbID);
        const selectedMovieIndex = movies.findIndex(item => item.imdbID === movie.imdbID);
        const selectedMovie = movies.find(item => item.imdbID === movie.imdbID);
        selectedMovie.isFavourite = false;
        filteredMovies.splice(selectedMovieIndex, 0, selectedMovie);
        setMovies(filteredMovies);
    };



    return (
        <div className="container-fluid move-app">
            <Header setIsHamburgerOpen={handleHamburgerState} isHamburgerOpen={isHamburgerOpen} />
            <div id="search-box" className="row d-flex align-items-center mt-4 mb-4 justify-content-center">
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className="mt-4 mb-4"></div>

            <MovieListHeading heading="Movies" />
            <div ref={wrapperRef} className={!isHamburgerOpen ? 'row' : 'blur-row'}>
                <MovieList movies={movies} handleFavoritesClick={addFavoriteMovie} />
            </div>
            <MovieListHeading heading="Favorites" />
            <div className="row d-flex align-items-center mt-4 mb-4">
                <MovieList
                    isFavourite={true}
                    movies={favorites}
                    handleRemoveFavoritesClick={removeFavoriteMovie}
                    removeFavouriteComponent={RemoveFavorites}
                />
            </div>
        </div>
    );
};

export default App;

