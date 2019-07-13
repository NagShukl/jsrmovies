import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/redux';
import './App.scss';
import MovieApp from './components/MovieApp';
import './custom.scss';

function App() {

  return (

    <div className="App">
      <Provider store={store}>
        <MovieApp></MovieApp>
      </Provider>
    </div>
  );
};


export default App;
