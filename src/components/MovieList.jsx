import React, { useState } from 'react'
import MovieCard from './MovieCard';

const MovieList = () => {

    const moviesList = [
        {
            id: 1,
            title: 'Black Panther',
            poster: 'https://image.tmdb.org/t/p/w500//uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
            liked: true
        },
        {
            id: 2,
            title: 'Interstellar',
            poster: 'https://image.tmdb.org/t/p/w500//gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
            liked: true
        },
        {
            id: 3,
            title: 'The Dark Knight',
            poster: 'https://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg',
            liked: true
        },
        {
            id: 4,
            title: 'The Matrix',
            poster: 'https://image.tmdb.org/t/p/w500//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
            liked: false
        },
        {
            id: 5,
            title: 'Avengers: Endgame',
            poster: 'https://image.tmdb.org/t/p/w500//or06FN3Dka5tukK1e9sl16pB3iy.jpg',
            liked: false
        },
        {
            id: 6,
            title: 'Titanic',
            poster: 'https://image.tmdb.org/t/p/w500//9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
            liked: false
        },
        {
            id: 7,
            title: 'Joker',
            poster: 'https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
            liked: true
        },
        {
            id: 8,
            title: 'Spider-Man: No Way Home',
            poster: 'https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
            liked: false
        },
        {
            id: 9,
            title: 'Black Panther',
            poster: 'https://image.tmdb.org/t/p/w500//uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
            liked: true
        },
        {
            id: 10,
            title: 'Guardians of the Galaxy',
            poster: 'https://image.tmdb.org/t/p/w500//r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg',
            liked: false
        }
    ];

    const [movies, setMovies] = useState(moviesList)

    function toggleliked(id) {
        const updatedMovies = movies.map((movie) =>
            movie.id === id ? { ...movie, liked: !movie.liked } : movie
        );
        setMovies(updatedMovies);
    }

    return (
        <section className='movies-section' >
            <h1 className='section-heading'>Best Movies List </h1>
            <div id='movie-wrapper'>
                {
                    movies.map((movie) => {
                        return <MovieCard movie={movie} key={movie.id} toggleliked={toggleliked} />
                    })
                }
            </div>


        </section>
    )
}

export default MovieList