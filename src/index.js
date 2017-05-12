import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import StarWarsSearch from './containers/starWarsSearch/StarWarsSearch';

const App = () => (
  <Provider store={store}>
  	<StarWarsSearch />
  </Provider>
);

render(<App />, document.getElementById('root'));
