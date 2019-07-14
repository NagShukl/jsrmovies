import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import movieService from '../services/api/Movie';

const MovieDetails = () => {
    const selectedMovie = useSelector(state => state.selectedMovie);
    const [selectedMovieData, setSelectedMovieData] = useState({data:{}});
    useEffect(() => {
        loadMovieDetails();
      }, [selectedMovie]);
      
      const loadMovieDetails = () => {
        movieService.searchMovieItem(selectedMovie).then(response => {
            const data = response.data;
            setSelectedMovieData({...selectedMovieData,data});
          }).catch(err => {
            console.log('**JSR something went wrong with api call' + err);
          });
      }
    return (
        <div className="MovieDetails flex-row">
            <div className="movieTitle col-12">{selectedMovieData.data.Title}</div>
            <div className="moviePoster col-lg-6 col-sm-12 col-md-12">
                <img src={selectedMovieData.data.Poster} alt="Movie Poster"></img>
            </div>
            <div className="moviePlot col-lg-6 col-sm-12 col-md-12">
                <div className="col-12"><strong>Movie Plot: </strong> {selectedMovieData.data.Plot}</div>
                <div className="col-12"><strong>Language: </strong> {selectedMovieData.data.Language}</div>
                <div className="col-12"><strong>Director: </strong> {selectedMovieData.data.Director}</div>
                <div className="col-12"><strong>Actors: </strong> {selectedMovieData.data.Actors}</div>
                <div className="col-12"><strong>Duration: </strong> {selectedMovieData.data.Runtime}</div>
            </div>
            
        </div>
    );
};
export default MovieDetails;