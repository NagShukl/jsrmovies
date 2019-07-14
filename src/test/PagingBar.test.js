import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PagingBar from '../components/PagingBar';
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
        <PagingBar></PagingBar>
        </Provider>);
    expect(document.querySelectorAll('.pagingBar').length).toBe(1);
   
});
it("Should have First Bage Button", () => {
    let attr = 'FirstPageBtn';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
});
it("Should have Previous Bage Button", () => {
    let attr = 'PreviousPageBtn';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
});
it("Should have Last Bage Button", () => {
    let attr = 'LastPageBtn';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
});
it("Should have Next Bage Button", () => {
    let attr = 'NextPageBtn';
    expect(document.querySelectorAll(`[data-test='${attr}']`).length).toBe(1);
});
});
