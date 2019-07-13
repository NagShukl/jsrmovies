import React from 'react';

const MovieCard = (props) => {

    const selectedMovie = () => {
        props.updateSelectedMovie(props.ele.imdbID);
    }
    return (

        <li key={props.ele.imdbID} className="d-flex flex-row"
        onClick={selectedMovie}>

            <div className="p-1 shadow flex-column">
                <img src={props.ele.Poster}></img>
            </div>
            <div className="p-1 flex-column cardTextCol">
                <div className="flex-row">{props.ele.Title}</div>
                <div className="flex-row rightAlign">{props.ele.Year}</div>
            </div>


        </li>

    );
};
export default MovieCard;