import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MovieApp from '../components/MovieApp';
import { render, fireEvent, getByTestId} from "@testing-library/react";
import store from '../redux/redux';
import AppReducer from '../redux/reducer';
import { shallow } from 'enzyme';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};
describe('MovieApp Component', () => {
    let wrapper;
    // let store;
    beforeEach(() => {
        // const initialState =  {
        //     movies: {
        //       Search: aa.Search,
        //       totalResults: aa.totalResults
        //     },
        //     searchKey: 'Ram',
        //     currentPage: 1,
        //     selectedMovie: ''
        //   };
        // store = createStore(AppReducer, initialState);
        // wrapper = shallow(<Provider store={store}>
        //     <MovieApp></MovieApp>
        //   </Provider>).childAt(0).dive();
        // const container = render(<Provider store={store}>
        //     <MovieApp></MovieApp>
        //     </Provider>);
    });

it("Should renders without crashing", () => {
    render(<Provider store={store}>
        <MovieApp></MovieApp>
        </Provider>);
    let attr = 'MovieApp';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
   
});
it("Should have SearchContainer", () => {
    let attr = 'SearchPanel';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
});
it("Should have MovieDetails", () => {
    let attr = 'MovieDetailsPanel';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
    expect(document.querySelectorAll('.hideDetails').length).toBe(1);
});
it("Should have Hide details button", () => {
   expect(document.querySelectorAll('.hideDetails').length).toBe(1);
});
it("Should have movieSearchInput", () => {
    let attr = 'movieSearchInput';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
});
it("Should rener 10 movie cards", () => {
    let attr = 'MovieCard';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(10);
});
});
