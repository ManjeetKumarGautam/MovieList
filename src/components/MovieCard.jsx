import React from 'react'

const MovieCard = ({ movie, toggleliked }) => {
    return (
        <div className='movie-card'>
            <img src={movie.poster} alt="image" />
            <i onClick={() => toggleliked(movie.id)} className={` ${movie.liked ? 'fa-solid ' : 'fa-regular  not-liked'} fa-heart like-icon`}></i>

        </div >
    )
}

export default MovieCard;