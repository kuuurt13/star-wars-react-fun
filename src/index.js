import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores';
import StarWarsApp from './containers/StarWarsApp';
import './index.css';

const App = () => (
  <Provider store={store}>
  	<StarWarsApp />
  </Provider>
);

render(<App />, document.getElementById('root'));
