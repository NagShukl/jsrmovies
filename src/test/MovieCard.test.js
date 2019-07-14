import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { render, fireEvent, getByTestId } from "@testing-library/react";
import store from '../redux/redux';
import AppReducer from '../redux/reducer';
import { shallow } from 'enzyme';

const movieMock = { "ele" : { 
    "Title":"Lagaan: Once Upon a Time in India",
    "Year":"2001",
    "imdbID":"tt0169102",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
 }};
describe('MovieCard Component', () => {

    it("Should renders without crashing", () => {
        render(<Provider store={store}>
            <MovieCard {...movieMock}></MovieCard>
        </Provider>);
        let attr = 'MovieCard';
        expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);

    });
    it("Should have MoviePoster", () => {
        let attr = 'MoviePoster';
        expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
    });
    it("Should have MovieTitle", () => {
        let attr = 'MovieTitle';
        expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
    });
    it("Should have MovieYear", () => {
        let attr = 'MovieYear';
        expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
    });
    it("Should have Selected Movie Icon", () => {
        let attr = 'MovieYear';
        expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
    });
    
    
});
