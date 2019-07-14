import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MovieList from '../components/MovieList';
import { render, fireEvent, getByTestId} from "@testing-library/react";
import store from '../redux/redux';
import AppReducer from '../redux/reducer';
import { shallow } from 'enzyme';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};
describe('MovieList Component', () => {
  
it("Should renders without crashing", () => {
    render(<Provider store={store}>
        <MovieList></MovieList>
        </Provider>);
    let attr = 'movieListContainer';
    expect(document.querySelectorAll('.movieList').length).toBe(1);
   
});
it("Should rener 10 movie cards", () => {
    let attr = 'MovieCard';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(10);
});
});
