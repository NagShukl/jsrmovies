import React from 'react';

const MovieCard = (props) => {

    const selectedMovie = () => {
        props.updateSelectedMovie(props.ele.imdbID);
    }
    return (

        <li key={props.ele.imdbID} className="d-flex flex-row"
            onClick={selectedMovie} data-test="MovieCard">

            <div className="p-1 shadow flex-column">
                <img src={props.ele.Poster} alt="Movie Poster" data-test="MoviePoster"></img>
            </div>
            <div className="p-1 flex-column cardTextCol">

                <div className="flex-row" data-test="MovieTitle">{props.ele.Title}</div>
                <div className="flex-row rightAlign" data-test="MovieYear">{props.ele.Year}</div>
                <div className={props.selectedMovie === props.ele.imdbID ? 'selectedIcon' : 'noDisplay'}>
                    <img width="25px;" height="25px;" alt="Movie Poster"
                        src='https://image.flaticon.com/icons/png/128/660/660463.png' data-test="SelectedMovieIcon"></img>
                </div>
            </div>


        </li>

    );
};
export default MovieCard;