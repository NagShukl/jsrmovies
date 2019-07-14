import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MovieDetails from '../components/MovieDetails';
import { render, fireEvent, getByTestId} from "@testing-library/react";
import store from '../redux/redux';
import AppReducer from '../redux/reducer';
import { shallow } from 'enzyme';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};
describe('PagingBar Component', () => {
   
it("Should renders without crashing", () => {
    render(<Provider store={store}>
        <MovieDetails></MovieDetails>
        </Provider>);
    expect(document.querySelectorAll('.MovieDetails').length).toBe(1);
   
});
it("Should have Movie Title", () => {
    let attr = 'movieTitle';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
});
it("Should have Movie Poster", () => {
    let attr = 'moviePoster';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
});
it("Should have Movie Plot", () => {
    let attr = 'moviePlot';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
});
it("Should have Movie Language", () => {
    let attr = 'movieLanguage';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
});
it("Should have Movie Director", () => {
    let attr = 'movieDirector';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
});
it("Should have Movie Actors", () => {
    let attr = 'movieActors';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
});
it("Should have Movie Duration", () => {
    let attr = 'movieDuration';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
});
});
