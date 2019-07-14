import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SearchContainer from '../components/SearchContainer';
import { render, fireEvent, getByTestId } from "@testing-library/react";
import store from '../redux/redux';
import AppReducer from '../redux/reducer';
import { shallow } from 'enzyme';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};
describe('MovieApp Component', () => {

    it("Should renders without crashing", () => {
        render(<Provider store={store}>
            <SearchContainer></SearchContainer>
        </Provider>);
        let attr = 'SearchContainer';
        expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);

    });
    it("Should have movieSearchInput", () => {
        let attr = 'movieSearchInput';
        expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
    });

});
