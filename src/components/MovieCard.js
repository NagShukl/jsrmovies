import React from 'react';

const MovieCard = (props) => {


    return (

        <li key={props.imdbID} className="d-flex flex-row">

            <div className="p-1 shadow flex-column">
                <img src={props.Poster}></img>
            </div>
            <div className="p-1 flex-column cardTextCol">
                <div className="flex-row">{props.Title}</div>
                <div className="flex-row rightAlign">{props.Year}</div>
            </div>


        </li>

    );
};
export default MovieCard;